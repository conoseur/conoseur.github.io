import json
import pandas as pd

def clean_artwork_data(input_file, output_file):
    # Load the JSON data from the input file
    with open(input_file, 'r') as file:
        artwork_data = json.load(file)

    cleaned_artwork_data = []
    seen_image_urls = set()  # A set to track the unique image URLs

    for artwork in artwork_data:
        # Remove the wikipedia_url key if it exists
        if 'wikipedia_url' in artwork:
            del artwork['wikipedia_url']
        
        # Replace .pdf, .djvu, .tiff values with empty strings
        for key, value in artwork.items():
            if isinstance(value, str) and value.endswith(('.pdf', '.djvu', '.tiff', ".tif")):
                artwork[key] = ""
        
        # Replace NaN values with None
        for key, value in artwork.items():
            if isinstance(value, float) and pd.isna(value):
                artwork[key] = None
        
        # Only add artworks with a non-empty image_url that hasn't been added before
        image_url = artwork.get('image_url', "").strip()
        if image_url and image_url not in seen_image_urls:
            seen_image_urls.add(image_url)  # Mark this image_url as seen
            cleaned_artwork_data.append(artwork)

    # Write the cleaned data back to the output file
    with open(output_file, 'w') as file:
        json.dump(cleaned_artwork_data, file, indent=4, ensure_ascii=False)

    print(f"Artwork data cleaned and saved to {output_file}")

# Example usage
input_file = 'art_data/artwork.json'  # Replace with your actual input file path
output_file = 'art_data/artwork2.json'  # Replace with your desired output file path
clean_artwork_data(input_file, output_file)


# import random

# # Load the existing artwork data from 'artwork_data.json'
# with open('art_data/cleaned_artwork_data2.json', 'r') as f:
#     artwork_data = json.load(f)

# # Scramble the order of the list
# random.shuffle(artwork_data)

# # Save the scrambled list back to 'artwork_data.json'
# with open('art_data/cleaned_artwork_data2.json', 'w') as f:
#     json.dump(artwork_data, f, indent=4, ensure_ascii=False)

# print("Scrambled data saved to 'artwork_data.json'")