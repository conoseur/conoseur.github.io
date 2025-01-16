import random
import json

# Load the existing artwork data from 'artwork_data.json'
with open('art_data/cleaned_artwork_data2.json', 'r') as f:
    artwork_data = json.load(f)

# Scramble the order of the list
random.shuffle(artwork_data)

# Save the scrambled list back to 'artwork_data.json'
with open('art_data/cleaned_artwork_data2.json', 'w') as f:
    json.dump(artwork_data, f, indent=4)

print("Scrambled data saved to 'artwork_data.json'")
