import json
import pandas as pd
import numpy as np

def clean_artwork_data(input_file, output_file):
    # Load the JSON data from the input file
    with open(input_file, 'r') as file:
        artwork_data = json.load(file)

    # Loop through the artwork data and process it
    for artwork in artwork_data:
        # Replace .pdf values with empty strings
        for key, value in artwork.items():
            # If the value is a string and ends with '.pdf', replace it with an empty string
            if isinstance(value, str) and value.endswith('.pdf'):
                artwork[key] = ""

        # Now we handle the NaN (replacing NaN with null)
        # Convert all NaN values to None (which corresponds to null in JSON)
        for key, value in artwork.items():
            if isinstance(value, float) and pd.isna(value):  # Check if it's NaN
                artwork[key] = None

        # Handle nested "metadata" dictionary with possible NaN values
        if "metadata" in artwork:
            for meta_key, meta_value in artwork["metadata"].items():
                if isinstance(meta_value, float) and pd.isna(meta_value):
                    artwork["metadata"][meta_key] = None

    # Write the cleaned data back to a new output file
    with open(output_file, 'w') as file:
        json.dump(artwork_data, file, indent=4)

    print(f"Artwork data cleaned and saved to {output_file}")

# Example usage
input_file = 'art_data/artwork_data.json'  # Replace with your actual input file path
output_file = 'art_data/cleaned_artwork_data.json'  # Replace with your desired output file path
clean_artwork_data(input_file, output_file)
