import pandas as pd
import os

def load_art_datasets(base_path='dataset'):
    """
    Load and process multiple art-related CSV files into a single DataFrame.
    """
    try:
        # Load individual CSV files
        artists_df = pd.read_csv(os.path.join(base_path, 'artist.csv'))
        canvas_df = pd.read_csv(os.path.join(base_path, 'canvas_size.csv'))
        museum_df = pd.read_csv(os.path.join(base_path, 'museum.csv'))
        subject_df = pd.read_csv(os.path.join(base_path, 'subject.csv'))
        work_df = pd.read_csv(os.path.join(base_path, 'work.csv'))
        product_size_df = pd.read_csv(os.path.join(base_path, 'product_size.csv'))

        # Clean numeric columns
        canvas_df['size_id'] = pd.to_numeric(canvas_df['size_id'], errors='coerce')
        product_size_df['size_id'] = pd.to_numeric(product_size_df['size_id'], errors='coerce')
        
        # First create the base artwork information
        # Merge work with artist information
        merged_df = work_df.merge(
            artists_df,
            how='left',
            on='artist_id'
        )
        
        # Merge with museum information
        merged_df = merged_df.merge(
            museum_df,
            how='left',
            on='museum_id'
        )
        
        # Merge with subject information
        merged_df = merged_df.merge(
            subject_df,
            how='left',
            on='work_id'
        )

        # Create a separate DataFrame for size information
        size_info = product_size_df.merge(
            canvas_df,
            how='left',
            on='size_id'
        )

        # Group sizes by work_id and combine them
        size_groups = size_info.groupby('work_id').agg({
            'width': lambda x: ', '.join(map(str, sorted(x.dropna().unique()))),
            'height': lambda x: ', '.join(map(str, sorted(x.dropna().unique()))),
            'label': lambda x: ' | '.join(sorted(x.dropna().unique()))
        }).reset_index()

        # Merge the combined size information with the main artwork information
        final_df = merged_df.merge(
            size_groups,
            how='left',
            on='work_id'
        )
        
        # Select and rename columns for final output
        final_df = final_df[[  # Keep all columns except width and height
            'name_x',         # worktitle
            'full_name',      # artist
            'birth',          # artist_born
            'death',          # artist_dead
            'nationality',    # nationality
            'country',        # country
            'style_x',        # style
            'name_y',         # museum
            'label',          # combined labels
            'subject'         # subject
        ]].rename(columns={  # Rename columns to more user-friendly names
            'name_x': 'worktitle',
            'full_name': 'artist',
            'birth': 'artist_born',
            'death': 'artist_dead',
            'style_x': 'style',
            'name_y': 'museum'
        })
        
        return final_df
        
    except Exception as e:
        print(f"Error: {e}")
        raise

def main():
    # Load and process the data
    df = load_art_datasets()
    
    # Display first few rows
    print("\nFirst few rows of the merged dataset:")
    print(df.head())
    
    # Export to CSV
    output_path = 'output.csv'
    df.to_csv(output_path, index=False)
    print(f"\nData exported to {output_path}")

if __name__ == "__main__":
    main()
