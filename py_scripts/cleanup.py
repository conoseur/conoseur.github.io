import json

# Step 1: Read the existing JSON data from the file
with open('art_data/cleaned_artwork_data.json', 'r', encoding='utf-8') as file:
    art_data = json.load(file)

# Step 2: Refactor the data as needed
# (This step can be modified based on what kind of transformation you want on the data)
# For example, you might want to clean up some fields or update values.
# I'm leaving it as is for now, since you didn't specify any changes.

# Step 3: Write the refactored data back to the same file
with open('art_data/cleaned_artwork_data.json', 'w', encoding='utf-8') as file:
    json.dump(art_data, file, ensure_ascii=False, indent=4)
