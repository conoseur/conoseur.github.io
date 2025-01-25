import json
import math

# Load the JSON file
with open("art_data/artwork_data.json", "r", encoding="utf-8") as file:
    artwork_data = json.load(file)

# Function to clean up data
def clean_artwork_data(data):
    cleaned_data = []
    for entry in data:
        cleaned_entry = {}
        for key, value in entry.items():
            if isinstance(value, float) and math.isnan(value):  # Replace NaN with None
                cleaned_entry[key] = None
            elif isinstance(value, str):  # Handle Unicode escape sequences
                cleaned_entry[key] = value.encode("utf-8").decode("utf-8")
            else:
                cleaned_entry[key] = value  # Retain other values as is
        cleaned_data.append(cleaned_entry)
    return cleaned_data

# Clean the data
cleaned_artwork_data = clean_artwork_data(artwork_data)

# Save the cleaned data back to a JSON file
with open("art_data/cleaned_artwork_data.json", "w", encoding="utf-8") as file:
    json.dump(cleaned_artwork_data, file, indent=4, ensure_ascii=False)

print("Artwork data cleaned and saved to 'cleaned_artwork_data.json'")
