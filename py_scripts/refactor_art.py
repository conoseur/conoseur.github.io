import json
import csv
import uuid
import unicodedata
import re

def normalize_name(name):
    """
    Normalize artist names for more flexible matching:
    - Convert to lowercase
    - Remove accents
    - Remove non-alphabetic characters
    """
    # Remove accents
    normalized = unicodedata.normalize('NFKD', name).encode('ASCII', 'ignore').decode('ASCII')
    # Convert to lowercase and remove non-alphabetic characters
    normalized = re.sub(r'[^a-z\s]', '', normalized.lower()).strip()
    return normalized

def find_best_artist_match(artist_name, artist_mapping):
    """
    Find the best artist match using normalized name
    """
    normalized_input = normalize_name(artist_name)
    
    # Exact normalized match
    for full_name, artist_id in artist_mapping.items():
        if normalize_name(full_name) == normalized_input:
            return artist_id
    
    # Partial match with more flexible criteria
    for full_name, artist_id in artist_mapping.items():
        normalized_full = normalize_name(full_name)
        if normalized_input in normalized_full or normalized_full in normalized_input:
            return artist_id
    
    return "unknown"

# Load the JSON files
with open("art_data/artwork.json", "r", encoding="utf-8") as artwork_file, \
     open("art_data/artists.json", "r", encoding="utf-8") as artists_file:
    artworks = json.load(artwork_file)
    artists = json.load(artists_file)  # Now artists is a dictionary keyed by artist_id

# Create a mapping of artist names to artist IDs
artist_mapping = {artist_info["full_name"]: artist_id for artist_id, artist_info in artists.items()}

# Prepare data for CSV
csv_data = []
unmatched_artists = set()

for artwork in artworks:
    # Generate a unique image ID
    image_id = str(uuid.uuid4())
    image_url = artwork.get("image_url", "")
    artist_name = artwork.get("artist", "")
    
    # Find best artist match
    artist_id = find_best_artist_match(artist_name, artist_mapping)
    
    # Track unmatched artists
    if artist_id == "unknown":
        unmatched_artists.add(artist_name)
    
    # Extract additional fields
    image_title = artwork.get("worktitle", "unknown")
    subject = artwork.get("subject", "unknown")
    style = artwork.get("style", "unknown")
    museum = artwork.get("museum", "unknown")
    label = artwork.get("label", "unknown")
    
    # Append the row
    csv_data.append({
        "image_id": image_id,
        "artist_id": artist_id,
        "image_url": image_url,
        "image_title": image_title,
        "subject": subject,
        "style": style,
        "museum": museum,
        "label": label,
    })

# Write to a CSV file
csv_file = "art_data/artwork_data.csv"
with open(csv_file, "w", newline="", encoding="utf-8") as file:
    writer = csv.DictWriter(
        file, 
        fieldnames=["image_id", "artist_id", "image_title", "subject", "style", "museum", "label", "image_url"]
    )
    writer.writeheader()
    writer.writerows(csv_data)

# Print unmatched artists for review
print("Unmatched Artists:")
for artist in sorted(unmatched_artists):
    print(artist)

print(f"\nCSV file '{csv_file}' created successfully!")
print(f"Total artworks processed: {len(csv_data)}")
print(f"Number of unmatched artists: {len(unmatched_artists)}")