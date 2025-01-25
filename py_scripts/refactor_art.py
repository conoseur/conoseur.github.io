import json
import csv
import uuid

# Load the JSON files
with open("art_data/cleaned_artwork_data.json", "r", encoding="utf-8") as artwork_file, open("art_data/artists.json", "r", encoding="utf-8") as artists_file:
    artworks = json.load(artwork_file)
    artists = json.load(artists_file)  # Now artists is a dictionary keyed by artist_id

# Create a mapping of artist names to artist IDs
artist_mapping = {artist_info["full_name"]: artist_id for artist_id, artist_info in artists.items()}

# Prepare data for CSV
csv_data = []
for artwork in artworks:
    # Generate a unique image ID
    image_id = str(uuid.uuid4())
    image_url = artwork.get("image_url", "")
    artist_name = artwork.get("artist", "")
    artist_id = artist_mapping.get(artist_name, "unknown")  # Default to "unknown" if artist not found
    
    # Append the row
    csv_data.append({
        "image_id": image_id,
        "artist_id": artist_id,
        "image_url": image_url,
    })

# Write to a CSV file
csv_file = "artwork_data.csv"
with open(csv_file, "w", newline="", encoding="utf-8") as file:
    writer = csv.DictWriter(file, fieldnames=["image_id", "artist_id", "image_url"])
    writer.writeheader()
    writer.writerows(csv_data)

print(f"CSV file '{csv_file}' created successfully!")
