import pandas as pd
import requests
import os
import json
from urllib.parse import quote

class WikimediaArtScraper:
    def __init__(self, output_dir="art_data"):
        self.base_url = "https://commons.wikimedia.org/w/api.php"
        self.wiki_url = "https://en.wikipedia.org/w/api.php"
        self.output_dir = output_dir
        self.session = requests.Session()

        # Create output directories if they don't exist
        os.makedirs(output_dir, exist_ok=True)
        
    def search_artwork(self, title, artist):
        """Search for artwork on Wikimedia Commons"""
        params = {
            "action": "query",
            "format": "json",
            "list": "search",
            "srsearch": f"{title} {artist}",
            "srnamespace": "6",  # File namespace
            "srlimit": "1"
        }
        
        try:
            response = self.session.get(self.base_url, params=params)
            data = response.json()
            
            if "query" in data and "search" in data["query"] and data["query"]["search"]:
                return data["query"]["search"][0]["title"]
            return None
        except Exception as e:
            print(f"Error searching for {title}: {e}")
            return None

    def get_image_info(self, file_title):
        """Get image information including URL and metadata"""
        params = {
            "action": "query",
            "format": "json",
            "prop": "imageinfo",
            "iiprop": "url|extmetadata",
            "titles": file_title
        }
        
        try:
            response = self.session.get(self.base_url, params=params)
            data = response.json()
            
            pages = data["query"]["pages"]
            page_id = list(pages.keys())[0]
            
            if "imageinfo" in pages[page_id]:
                return pages[page_id]["imageinfo"][0]
            return None
        except Exception as e:
            print(f"Error getting image info for {file_title}: {e}")
            return None

    def find_wikipedia_article(self, artist, title):
        """Search for related Wikipedia article"""
        params = {
            "action": "query",
            "format": "json",
            "list": "search",
            "srsearch": f"{artist} {title}",
            "srlimit": "1"
        }
        
        try:
            response = self.session.get(self.wiki_url, params=params)
            data = response.json()
            
            if "query" in data and "search" in data["query"] and data["query"]["search"]:
                article_title = data["query"]["search"][0]["title"]
                return f"https://en.wikipedia.org/wiki/{quote(article_title.replace(' ', '_'))}"
            return None
        except Exception as e:
            print(f"Error finding Wikipedia article: {e}")
            return None

    def process_artwork_data(self):
        """Process artwork data from CSV, skipping already processed items"""
        # Read the CSV file
        df = pd.read_csv(f'{self.output_dir}/output.csv')
        
        # Load existing data if the file exists
        if os.path.exists(f"{self.output_dir}/cleaned_artwork_data.json"):
            with open(f"{self.output_dir}/cleaned_artwork_data.json", 'r') as f:
                existing_data = json.load(f)
            processed_works = {(entry.get('worktitle'), entry.get('artist')) for entry in existing_data}
        else:
            processed_works = set()

        # Prepare to write full artwork data
        full_artwork_data = []

        # Process each artwork
        total_rows = len(df)
        for idx, row in df.iterrows():
            print(f"\rProcessing: {int((idx + 1) / total_rows * 100)}% complete", end="")

            # Check if this artwork has already been processed
            if (row['worktitle'], row['artist']) in processed_works:
                continue

            # Search for artworks
            file_title = self.search_artwork(row['worktitle'], row['artist'])
            if not file_title:
                continue

            # Get image info
            image_info = self.get_image_info(file_title)
            if not image_info:
                continue

            # Extract image URL
            image_url = image_info.get("url", "Not Available")
            
            # Find Wikipedia article
            wiki_url = self.find_wikipedia_article(row['artist'], row['worktitle'])

            # Collect all information
            artwork_info = {
                'image_url': image_url,
                'wikipedia_url': wiki_url,
                **row.to_dict()
            }
            
            full_artwork_data.append(artwork_info)

        # Write full artwork data to JSON
        with open(f"{self.output_dir}/full_artwork.json", 'w') as f:
            json.dump(full_artwork_data, f, indent=2)
        
        print("\nProcessing complete!")

def main():
    # Initialize scraper
    scraper = WikimediaArtScraper()
    
    # Process all artworks
    scraper.process_artwork_data()
    
    print("\nProcessing complete!")

if __name__ == "__main__":
    main()