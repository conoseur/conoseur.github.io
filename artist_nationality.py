import csv
import json

def get_nationality_emoji(nationality):
    """Map nationalities to their corresponding flag emojis."""
    nationality_emoji_map = {
        'French': '🇫🇷',
        'Belgian': '🇧🇪',
        'German': '🇩🇪',
        'English': '🇬🇧',
        'American': '🇺🇸',
        'Italian': '🇮🇹',
        'Dutch': '🇳🇱',
        'Swiss': '🇨🇭',
        'Danish': '🇩🇰',
        'Spanish': '🇪🇸',
        'Mexican': '🇲🇽',
        'Russian': '🇷🇺',
        'Japanese': '🇯🇵',
        'Canadian': '🇨🇦',
        'Austrian': '🇦🇹',
        'Norwegian': '🇳🇴',
        'Irish': '🇮🇪',
        'Flemish': '🇧🇪'  # Using Belgian flag for Flemish
    }
    return nationality_emoji_map.get(nationality, '🎨')  # Default emoji if nationality not found

def create_artist_list():
    artists = []
    
    with open('dataset/artist.csv', 'r', encoding='utf-8') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        
        for row in csv_reader:
            # Create full name based on available name components
            name_parts = [
                row['first_name'],
                row['middle_names'] if row['middle_names'] else '',
                row['last_name']
            ]
            full_name = ' '.join(filter(None, name_parts))
            
            # Create artist entry with nationality emoji
            artist = f"{full_name} {get_nationality_emoji(row['nationality'])}"
            artists.append(artist)
    
    # Sort artists alphabetically
    artists.sort()
    
    # Write to JSON file with pretty formatting
    with open('artist_list.json', 'w', encoding='utf-8') as json_file:
        json.dump({'artists': artists}, json_file, indent=2, ensure_ascii=False)

if __name__ == '__main__':
    create_artist_list()