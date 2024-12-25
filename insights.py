import json

# Sample data (replace this with the actual 'cleaned_artwork_data.json' file path)
with open('art_data/cleaned_artwork_data.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Function to calculate unique values in a list of dictionaries
def get_unique_values(data, field):
    return set(entry.get(field) for entry in data if entry.get(field))

# Calculating unique values for various fields
unique_artists = get_unique_values(data, "artist")
unique_titles = get_unique_values(data, "title")
unique_nationalities = get_unique_values(data, "nationality")
unique_styles = get_unique_values(data, "style")
unique_subjects = get_unique_values(data, "subject")
unique_countries = get_unique_values(data, "country")
unique_museums = get_unique_values(data, "museum")

# Printing insights
print(f"Number of unique artists: {len(unique_artists)}")
print(f"Number of unique titles: {len(unique_titles)}")
print(f"Number of unique nationalities: {len(unique_nationalities)}")
print(f"Number of unique styles: {len(unique_styles)}")
print(f"Number of unique subjects: {len(unique_subjects)}")
print(f"Number of unique countries: {len(unique_countries)}")
print(f"Number of unique museums: {len(unique_museums)}")
