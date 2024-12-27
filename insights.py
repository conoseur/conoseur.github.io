import json

# Read the original artwork data
with open('art_data/cleaned_artwork_data.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Function to get sorted unique values
def get_unique_values(data, field):
    # Filter out None and empty strings, then sort
    unique_values = list(set(entry.get(field) for entry in data if entry.get(field) and entry.get(field).strip()))
    return sorted(unique_values)

# Create dictionary with unique values for each field
unique_values = {
    "artists": get_unique_values(data, "artist"),
    "titles": get_unique_values(data, "title"),
    "nationalities": get_unique_values(data, "nationality"),
    "styles": get_unique_values(data, "style"),
    "subjects": get_unique_values(data, "subject"),
    "countries": get_unique_values(data, "country"),
    "museums": get_unique_values(data, "museum")
}

# Save unique values to a new JSON file
with open('art_data/unique_values.json', 'w', encoding='utf-8') as outfile:
    json.dump(unique_values, outfile, indent=2, ensure_ascii=False)

# Print statistics
for category, values in unique_values.items():
    print(f"Number of unique {category}: {len(values)}")
    print(f"Sample of {category}: {values[:3]}")  # Show first 3 examples
    print()