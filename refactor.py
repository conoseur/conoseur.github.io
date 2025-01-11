import json
import pandas as pd
import numpy as np

def clean_artwork_data(input_file, output_file):
    # Load the JSON data from the input file
    with open(input_file, 'r') as file:
        artwork_data = json.load(file)

    seen_urls = set()  # A set to keep track of image URLs we've already encountered
    unique_artwork_data = []  # This will hold the cleaned artwork data with unique image URLs

    # Loop through the artwork data and process it
    for artwork in artwork_data:
        # Replace .pdf values with empty strings
        for key, value in artwork.items():
            if isinstance(value, str) and value.endswith('.pdf'):
                artwork[key] = ""

        # Now we handle the NaN (replacing NaN with null)
        for key, value in artwork.items():
            if isinstance(value, float) and pd.isna(value):  # Check if it's NaN
                artwork[key] = None

        # Handle nested "metadata" dictionary with possible NaN values
        if "metadata" in artwork:
            for meta_key, meta_value in artwork["metadata"].items():
                if isinstance(meta_value, float) and pd.isna(meta_value):
                    artwork["metadata"][meta_key] = None

        # Check if the artwork has an "image_url" and whether it's a duplicate
        if "image_url" in artwork:
            image_url = artwork["image_url"]
            if image_url not in seen_urls:
                seen_urls.add(image_url)  # Add the image URL to the set
                unique_artwork_data.append(artwork)  # Only keep the first occurrence of each unique image_url

    # Write the cleaned data back to a new output file
    with open(output_file, 'w') as file:
        json.dump(unique_artwork_data, file, indent=4)

    print(f"Artwork data cleaned and saved to {output_file}")

# Example usage
input_file = 'art_data/artwork_data2.json'  # Replace with your actual input file path
output_file = 'art_data/cleaned_artwork_data2.json'  # Replace with your desired output file path
clean_artwork_data(input_file, output_file)
