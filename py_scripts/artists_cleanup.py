import json
import os

# File path for the artists.json
input_file = "art_data/artists.json"
output_file = "art_data/artists.json"

def transform_artists(input_file, output_file):
    try:
        # Check if the input file exists
        if not os.path.exists(input_file):
            raise FileNotFoundError(f"Input file '{input_file}' not found.")
        
        # Load the JSON data from the input file
        with open(input_file, "r", encoding="utf-8") as file:
            artists_data = json.load(file)
        
        # Transform the list into a dictionary with artist_id as the key
        artists_dict = {
            artist["artist_id"]: {key: value for key, value in artist.items() if key != "artist_id"}
            for artist in artists_data
        }
        
        # Write the transformed dictionary back to the output file
        with open(output_file, "w", encoding="utf-8") as file:
            json.dump(artists_dict, file, indent=4, ensure_ascii=False)
        
        print(f"Transformed data successfully written to '{output_file}'.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Run the transformation
transform_artists(input_file, output_file)
