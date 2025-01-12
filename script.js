// prettier-ignore
const ARTWORK_VALUES = {
    artists: 
    {
      "Abraham Mignon": "https://en.wikipedia.org/wiki/Abraham_Mignon",
      "Adam Albrecht": "https://en.wikipedia.org/wiki/Albrecht_Adam",
      "Adam Edouard": "https://en.wikipedia.org/wiki/Adam_Armour_%28soccer%29",
      "Adelaide Labille-Guiard": "https://en.wikipedia.org/wiki/Ad%C3%A9la%C3%AFde_Labille-Guiard",
      "Adele Romany": "https://en.wikipedia.org/wiki/Ad%C3%A8le_Romany",
      "Adolph Ulrich Wertmuller": "https://en.wikipedia.org/wiki/Adolf_Ulrik_Wertm%C3%BCller",
      "Adriaan De Lelie": "https://en.wikipedia.org/wiki/Adriaan_de_Lelie",
      "Adriaen Thomasz Key": "https://en.wikipedia.org/wiki/Adriaen_Thomasz_Key",
      "Aelbert Cuyp": "https://en.wikipedia.org/wiki/Aelbert_Cuyp",
      "Albert Andre": "https://en.wikipedia.org/wiki/Albert_Andr%C3%A9",
      "Albert Bierstadt": "https://en.wikipedia.org/wiki/Albert_Bierstadt",
      "Albert Marquet": "https://en.wikipedia.org/wiki/Albert_Marquet",
      "Albrecht Durer": "https://en.wikipedia.org/wiki/Albrecht_D%C3%BCrer",
      "Alexandre Cabanel": "https://en.wikipedia.org/wiki/Alexandre_Cabanel",
      "Alexei Von Jawlensky": "https://en.wikipedia.org/wiki/Alexej_von_Jawlensky",
      "Alexey Savrasov": "https://en.wikipedia.org/wiki/Alexey",
      "Alfred Henry Maurer": "https://en.wikipedia.org/wiki/Alfred_Henry_Maurer",
      "Alfred Sisley": "https://en.wikipedia.org/wiki/Alfred_Sisley",
      "Alfred Thompson Bricher": "https://en.wikipedia.org/wiki/Alfred_Thompson_Bricher",
      "Alice Bailly": "https://en.wikipedia.org/wiki/Alice_Bailly",
      "Amadeo de Souza Cardoso": "https://en.wikipedia.org/wiki/Amadeo_de_Souza-Cardoso",
      "Ambrosius Bosschaert": "https://en.wikipedia.org/wiki/Ambrosius_Bosschaert",
      "Amedeo Modigliani": "https://en.wikipedia.org/wiki/Amedeo_Modigliani",
      "Anders Zorn": "https://en.wikipedia.org/wiki/Anders_Zorn",
      "Andre Derain": "https://en.wikipedia.org/wiki/Andr%C3%A9_Derain",
      "Andrea Mantegna": "https://en.wikipedia.org/wiki/Andrea_Mantegna",
      "Angel Zarraga": "https://en.wikipedia.org/wiki/%C3%81ngel_Z%C3%A1rraga",
      "Anne Vallayer Coster": "https://en.wikipedia.org/wiki/Anne_Vallayer-Coster",
      "Anthony Van Dyck": "https://en.wikipedia.org/wiki/Anthony_van_Dyck",
      "Antoine Bouvard": "https://en.wikipedia.org/wiki/Parque_Dom_Pedro_II",
      "Antoine Jean Gros": "https://en.wikipedia.org/wiki/Antoine-Jean_Gros",
      "Anton Raphael Mengs": "https://en.wikipedia.org/wiki/Anton_Raphael_Mengs",
      "Aristide Maillol": "https://en.wikipedia.org/wiki/Aristide_Maillol",
      "Arnold Bocklin": "https://en.wikipedia.org/wiki/Arnold_B%C3%B6cklin",
      "Arthur Bowen Davies": "https://en.wikipedia.org/wiki/Arthur_Bowen_Davies",
      "Arthur Fitzwilliam Tait": "https://en.wikipedia.org/wiki/Arthur_Fitzwilliam_Tait",
      "Arthur Stockdale Cope": "https://en.wikipedia.org/wiki/Arthur_Stockdale_Cope",
      "Asher Brown Durand": "https://en.wikipedia.org/wiki/Asher_Brown_Durand",
      "August Macke": "https://en.wikipedia.org/wiki/August_Macke",
      "Bartholomeus Van der Helst": "https://en.wikipedia.org/wiki/Bartholomeus_van_der_Helst",
      "Bartolome Esteban Murillo": "https://en.wikipedia.org/wiki/Bartolom%C3%A9_Esteban_Murillo",
      "Becker Paula Modersohn": "https://en.wikipedia.org/wiki/Paula_Modersohn-Becker",
      "Benjamin Marshall": "https://en.wikipedia.org/wiki/Benjamin_Marshall",
      "Benjamin West": "https://en.wikipedia.org/wiki/Benjamin_West",
      "Benson Frank Weston": "https://en.wikipedia.org/wiki/Frank_Weston_Benson",
      "Benvenuto Garofalo": "https://en.wikipedia.org/wiki/Benvenuto_Tisi",
      "Berthe Morisot": "https://en.wikipedia.org/wiki/Berthe_Morisot",
      "Buonarroti Michelangelo": "https://en.wikipedia.org/wiki/Michelangelo",
      "Caesar Boetius Van Everdingen": "https://en.wikipedia.org/wiki/Caesar_van_Everdingen",
      "Camille Bombois": "https://en.wikipedia.org/wiki/Camille_Bombois",
      "Camille Pissarro": "https://en.wikipedia.org/wiki/Camille_Pissarro",
      "Carel Fabritius": "https://en.wikipedia.org/wiki/Carel_Fabritius",
      "Carl Larsson": "https://en.wikipedia.org/wiki/Carl_Larsson",
      "Carlo Brancaccio": "https://en.wikipedia.org/wiki/Carlo_Brancaccio",
      "Carlo Carra": "https://en.wikipedia.org/wiki/Carlo_Carr%C3%A0",
      "Caspar David Friedrich": "https://en.wikipedia.org/wiki/Caspar_David_Friedrich",
      "Cecilia Beaux": "https://en.wikipedia.org/wiki/Cecilia_Beaux",
      "Chaim Soutine": "https://en.wikipedia.org/wiki/Cha%C3%AFm_Soutine",
      "Charles Brooking": "https://en.wikipedia.org/wiki/Charles_Brooking",
      "Charles Caleb Ward": "https://en.wikipedia.org/wiki/Charles_Caleb_Ward",
      "Charles Courtney Curran": "https://en.wikipedia.org/wiki/Charles_Courtney_Curran",
      "Charles Cromwell Ingham": "https://en.wikipedia.org/wiki/Charles_C._Ingham",
      "Charles Demuth": "https://en.wikipedia.org/wiki/Charles_Demuth",
      "Charles Francois Daubigny": "https://en.wikipedia.org/wiki/Charles-Fran%C3%A7ois_Daubigny",
      "Charles Marion Russell": "https://en.wikipedia.org/wiki/Charles_Marion_Russell",
      "Charles Peale Polk": "https://en.wikipedia.org/wiki/Charles_Peale_Polk",
      "Charles Sprague Pearce": "https://en.wikipedia.org/wiki/Charles_Sprague_Pearce",
      "Charles Towne": "https://en.wikipedia.org/wiki/Charles_Towne",
      "Charles Willson Peale": "https://en.wikipedia.org/wiki/Charles_Willson_Peale",
      "Childe Hassam": "https://en.wikipedia.org/wiki/Childe_Hassam",
      "Christian Rohlfs": "https://en.wikipedia.org/wiki/Christian_Rohlfs",
      "Cima Da Conegliano": "https://en.wikipedia.org/wiki/Cima_da_Conegliano",
      "Claude Joseph Vernet": "https://en.wikipedia.org/wiki/Claude-Joseph_Vernet",
      "Claude Lorraine": "https://en.wikipedia.org/wiki/Claude_Lorrain",
      "Claude Monet": "https://en.wikipedia.org/wiki/Claude_Monet",
      "Constantin A Westchiloff": "https://en.wikipedia.org/wiki/Constantin_Westchiloff",
      "Cornelis Springer": "https://en.wikipedia.org/wiki/Cornelis_Springer",
      "Cornelis Troost": "https://en.wikipedia.org/wiki/Cornelis_Troost",
      "Cornelis Van Haarlem": "https://en.wikipedia.org/wiki/Cornelis_van_Haarlem",
      "Daniel Ridgway Knight": "https://en.wikipedia.org/wiki/Daniel_Ridgway_Knight",
      "David Teniers": "https://en.wikipedia.org/wiki/David_Teniers_the_Younger",
      "Diego Velazquez": "https://en.wikipedia.org/wiki/Diego_Vel%C3%A1zquez",
      "Dom?nikos Theotok\u00f3poulos": "https://en.wikipedia.org/wiki/2_euro_commemorative_coins",
      "Dominic Serres": "https://en.wikipedia.org/wiki/Dominic_Serres",
      "Edgar Degas": "https://en.wikipedia.org/wiki/Edgar_Degas",
      "Edgar William": "https://en.wikipedia.org/wiki/William_Edgar",
      "Edmond Francois Aman Jean": "https://en.wikipedia.org/wiki/Edmond_Aman-Jean",
      "Edmund Charles Tarbell": "https://en.wikipedia.org/wiki/Edmund_C._Tarbell",
      "Edouard Manet": "https://en.wikipedia.org/wiki/%C3%89douard_Manet",
      "Edouard Vuillard": "https://en.wikipedia.org/wiki/%C3%89douard_Vuillard",
      "Eduard Von Grutzner": "https://en.wikipedia.org/wiki/Eduard_von_Gr%C3%BCtzner",
      "Edvard Munch": "https://en.wikipedia.org/wiki/Edvard_Munch",
      "Edward Burne Jones": "https://en.wikipedia.org/wiki/Edward_Burne-Jones",
      "Edward Hicks": "https://en.wikipedia.org/wiki/Edward_Hicks",
      "Edward Potthast": "https://en.wikipedia.org/wiki/Edward_Henry_Potthast",
      "Edward William Cooke": "https://en.wikipedia.org/wiki/Edward_William_Cooke",
      "Edwin Lord Weeks": "https://en.wikipedia.org/wiki/Edwin_Lord_Weeks",
      "Egon Schiele": "https://en.wikipedia.org/wiki/Egon_Schiele",
      "Elisabeth Vigee Le Brun": "https://en.wikipedia.org/wiki/%C3%89lisabeth_Vig%C3%A9e_Le_Brun",
      "Emile Bernard": "https://en.wikipedia.org/wiki/%C3%89mile_Bernard",
      "Enoch Wood Perry": "https://en.wikipedia.org/wiki/Enoch_Wood_Perry_Jr.",
      "Ernest Lawson": "https://en.wikipedia.org/wiki/Ernest_Lawson",
      "Ernst Ludwig Kirchner": "https://en.wikipedia.org/wiki/Ernst_Ludwig_Kirchner",
      "Etienne Dinet": "https://en.wikipedia.org/wiki/Nasreddine_Dinet",
      "Eugene De Blaas": "https://en.wikipedia.org/wiki/Eugene_de_Blaas",
      "Eugene Delacroix": "https://en.wikipedia.org/wiki/Eug%C3%A8ne_Delacroix",
      "Eugene Girardet": "https://en.wikipedia.org/wiki/Eug%C3%A8ne_Girardet",
      "Eugene Louis Boudin": "https://en.wikipedia.org/wiki/Eug%C3%A8ne_Boudin",
      "Federico Zandomeneghi": "https://en.wikipedia.org/wiki/Federico_Zandomeneghi",
      "Felix Vallotton": "https://en.wikipedia.org/wiki/F%C3%A9lix_Vallotton",
      "Ferdinand Bol": "https://en.wikipedia.org/wiki/Ferdinand_Bol",
      "Ferdinand Hodler": "https://en.wikipedia.org/wiki/Ferdinand_Hodler",
      "Fernand Cormon": "https://en.wikipedia.org/wiki/Fernand_Cormon",
      "Fernand Leger": "https://en.wikipedia.org/wiki/Fernand_L%C3%A9ger",
      "Fitz Hugh Lane": "https://en.wikipedia.org/wiki/Fitz_Henry_Lane",
      "Francesco Guardi": "https://en.wikipedia.org/wiki/Francesco_Guardi",
      "Francis Augustus Silva": "https://en.wikipedia.org/wiki/Francis_Augustus_Silva",
      "Francis Luis Mora": "https://en.wikipedia.org/wiki/F._Luis_Mora",
      "Francis Picabia": "https://en.wikipedia.org/wiki/Francis_Picabia",
      "Francis William Edmonds": "https://en.wikipedia.org/wiki/Francis_William_Edmonds",
      "Francisco De Goya": "https://en.wikipedia.org/wiki/Francisco_Goya",
      "Francisco De Zurbaran": "https://en.wikipedia.org/wiki/Francisco_de_Zurbar%C3%A1n",
      "Francois Boucher": "https://en.wikipedia.org/wiki/Fran%C3%A7ois_Boucher",
      "Francois Gerard": "https://en.wikipedia.org/wiki/Fran%C3%A7ois_G%C3%A9rard",
      "Francois Hubert Drouais": "https://en.wikipedia.org/wiki/Fran%C3%A7ois-Hubert_Drouais",
      "Frank Duveneck": "https://en.wikipedia.org/wiki/Frank_Duveneck",
      "Frans Francken": "https://en.wikipedia.org/wiki/Frans_Francken_the_Younger",
      "Frans Hals": "https://en.wikipedia.org/wiki/Frans_Hals",
      "Frans Jansz Post": "https://en.wikipedia.org/wiki/Frans_Post",
      "Franz Marc": "https://en.wikipedia.org/wiki/Franz_Marc",
      "Franz Xavier Winterhalter": "https://en.wikipedia.org/wiki/Franz_Xaver_Winterhalter",
      "Frederic Edwin Church": "https://en.wikipedia.org/wiki/Frederic_Edwin_Church",
      "Frederic Remington": "https://en.wikipedia.org/wiki/Frederic_Remington",
      "Frederick Carl Frieseke": "https://en.wikipedia.org/wiki/Frederick_Carl_Frieseke",
      "Friedrich Von Amerling": "https://en.wikipedia.org/wiki/Friedrich_von_Amerling",
      "Gabriel Metsu": "https://en.wikipedia.org/wiki/Gabri%C3%ABl_Metsu",
      "Gabriele Munter": "https://en.wikipedia.org/wiki/Gabriele_M%C3%BCnter",
      "Gaston Bussiere": "https://en.wikipedia.org/wiki/Gaston_Bussi%C3%A8re",
      "Gaston La Touche": "https://en.wikipedia.org/wiki/Gaston_La_Touche",
      "Geertgen Tot Sint Jans": "https://en.wikipedia.org/wiki/Geertgen_tot_Sint_Jans",
      "George Caleb Bingham": "https://en.wikipedia.org/wiki/George_Caleb_Bingham",
      "George Catlin": "https://en.wikipedia.org/wiki/George_Catlin",
      "George Frederic Watts": "https://en.wikipedia.org/wiki/George_Frederic_Watts",
      "George Gardner Symons": "https://en.wikipedia.org/wiki/George_Gardner_Symons",
      "George Garrard": "https://en.wikipedia.org/wiki/George_Garrard",
      "George Henry Laporte": "https://en.wikipedia.org/wiki/George_Henry_Laporte",
      "George Inness": "https://en.wikipedia.org/wiki/George_Inness",
      "George P A Healy": "https://en.wikipedia.org/wiki/George_Peter_Alexander_Healy",
      "George Romney": "https://en.wikipedia.org/wiki/George_W._Romney",
      "George Stubbs": "https://en.wikipedia.org/wiki/George_Stubbs",
      "George Wesley Bellows": "https://en.wikipedia.org/wiki/George_Bellows",
      "Georges Braque": "https://en.wikipedia.org/wiki/Georges_Braque",
      "Georges De La Tour": "https://en.wikipedia.org/wiki/Georges_de_La_Tour",
      "Georges Despagnat": "https://en.wikipedia.org/wiki/Henri_Nassiet",
      "Georges Lemmen": "https://en.wikipedia.org/wiki/Georges_Lemmen",
      "Georges Rouault": "https://en.wikipedia.org/wiki/Georges_Rouault",
      "Georges Seurat": "https://en.wikipedia.org/wiki/Georges_Seurat",
      "Gerard Ter Borch": "https://en.wikipedia.org/wiki/Gerard_ter_Borch",
      "Gerard Van Honthorst": "https://en.wikipedia.org/wiki/Gerard_van_Honthorst",
      "Gerrit Berckheyde": "https://en.wikipedia.org/wiki/Gerrit_Berckheyde",
      "Gerrit Dou": "https://en.wikipedia.org/wiki/Gerrit_Dou",
      "Giacomo Balla": "https://en.wikipedia.org/wiki/Giacomo_Balla",
      "Gilbert Stuart": "https://en.wikipedia.org/wiki/Gilbert_Stuart",
      "Giorgio Morandi": "https://en.wikipedia.org/wiki/Giorgio_Morandi",
      "Giovanni Antionio Canaletto": null,
      "Giovanni Battista Tiepolo": "https://en.wikipedia.org/wiki/Giovanni_Battista_Tiepolo",
      "Giovanni Boldini": "https://en.wikipedia.org/wiki/Giovanni_Boldini",
      "Giuseppe Arcimboldo": "https://en.wikipedia.org/wiki/Giuseppe_Arcimboldo",
      "Grant Wood": "https://en.wikipedia.org/wiki/Grant_Wood",
      "Guido Reni": "https://en.wikipedia.org/wiki/Guido_Reni",
      "Guillaumin Armand": "https://en.wikipedia.org/wiki/Armand_Guillaumin",
      "Gustaf Wilhelm Palm": "https://en.wikipedia.org/wiki/Gustaf_Wilhelm_Palm",
      "Gustav Klimt": "https://en.wikipedia.org/wiki/Gustav_Klimt",
      "Gustave Caillebotte": "https://en.wikipedia.org/wiki/Gustave_Caillebotte",
      "Gustave Courbet": "https://en.wikipedia.org/wiki/Gustave_Courbet",
      "Gustave Dore": "https://en.wikipedia.org/wiki/Gustave_Dor%C3%A9",
      "Gustave Moreau": "https://en.wikipedia.org/wiki/Gustave_Moreau",
      "Gwen John": "https://en.wikipedia.org/wiki/Gwen_John",
      "Hans Dahl": "https://en.wikipedia.org/wiki/Hans_Dahl",
      "Hans Holbein": "https://en.wikipedia.org/wiki/Hans_Holbein_the_Younger",
      "Hans Memling": "https://en.wikipedia.org/wiki/Hans_Memling",
      "Heinrich Campendonk": "https://en.wikipedia.org/wiki/Heinrich_Campendonk",
      "Hendrick Avercamp": "https://en.wikipedia.org/wiki/Hendrick_Avercamp",
      "Hendrick Dubbels": "https://en.wikipedia.org/wiki/Hendrick_Dubbels",
      "Hendrick Ter Brugghen": "https://en.wikipedia.org/wiki/Hendrick_ter_Brugghen",
      "Hendrik Voogd": "https://en.wikipedia.org/wiki/Hendrik_Voogd",
      "Henri De Toulouse Lautrec": "https://en.wikipedia.org/wiki/Henri_de_Toulouse-Lautrec",
      "Henri Edmond Cross": "https://en.wikipedia.org/wiki/Henri-Edmond_Cross",
      "Henri Fantin Latour": "https://en.wikipedia.org/wiki/Henri_Fantin-Latour",
      "Henri Le Sidaner": "https://en.wikipedia.org/wiki/Henri_Le_Sidaner",
      "Henri Lebasque": "https://en.wikipedia.org/wiki/Henri_Lebasque",
      "Henri Manguin": "https://en.wikipedia.org/wiki/Henri_Manguin",
      "Henri Rousseau": "https://en.wikipedia.org/wiki/Henri_Rousseau",
      "Henry Moret": "https://en.wikipedia.org/wiki/Henry_Moret",
      "Henry Raeburn": "https://en.wikipedia.org/wiki/Henry_Raeburn",
      "Horace Vernet": "https://en.wikipedia.org/wiki/Horace_Vernet",
      "Isaac Van Ostade": "https://en.wikipedia.org/wiki/Isaac_van_Ostade",
      "Isaak Levitan": "https://en.wikipedia.org/wiki/Isaac_Levitan",
      "Ivan Aivazovskiy": "https://en.wikipedia.org/wiki/Ivan_Aivazovsky",
      "Ivan Shishkin": "https://en.wikipedia.org/wiki/Ivan_Shishkin",
      "Jack Butler Yeats": "https://en.wikipedia.org/wiki/Jack_B._Yeats",
      "Jacob Cornelisz Van Oostsanen": "https://en.wikipedia.org/wiki/Jacob_Cornelisz_van_Oostsanen",
      "Jacob Van Ruisdael": "https://en.wikipedia.org/wiki/Jacob_van_Ruisdael",
      "Jacques Laurent Agasse": "https://en.wikipedia.org/wiki/Jacques-Laurent_Agasse",
      "Jacques Louis David": "https://en.wikipedia.org/wiki/Jacques-Louis_David",
      "James Ensor": "https://en.wikipedia.org/wiki/James_Ensor",
      "James Mcdougal Hart": "https://en.wikipedia.org/wiki/James_McDougal_Hart",
      "James Mcneill Whistler": "https://en.wikipedia.org/wiki/James_McNeill_Whistler",
      "James Peale": "https://en.wikipedia.org/wiki/James_Peale",
      "James Tissot": "https://en.wikipedia.org/wiki/James_Tissot",
      "Jan Adam Kruseman": "https://en.wikipedia.org/wiki/Jan_Adam_Kruseman",
      "Jan Both": "https://en.wikipedia.org/wiki/Jan_Dirksz_Both",
      "Jan Brueghel": "https://en.wikipedia.org/wiki/Jan_Brueghel_the_Elder",
      "Jan Miense Molenaer": "https://en.wikipedia.org/wiki/Jan_Miense_Molenaer",
      "Jan Porcellis": "https://en.wikipedia.org/wiki/Jan_Porcellis",
      "Jan Portielje": "https://en.wikipedia.org/wiki/Jan_Portielje",
      "Jan Steen": "https://en.wikipedia.org/wiki/Jan_Steen",
      "Jan Toorop": "https://en.wikipedia.org/wiki/Jan_Toorop",
      "Jan Van Eyck": "https://en.wikipedia.org/wiki/Jan_van_Eyck",
      "Jan Van Goyen": "https://en.wikipedia.org/wiki/Jan_van_Goyen",
      "Jan Van Huysum": "https://en.wikipedia.org/wiki/Jan_van_Huysum",
      "Jan Van Scorel": "https://en.wikipedia.org/wiki/Jan_van_Scorel",
      "Jan Vermeer": "https://en.wikipedia.org/wiki/Johannes_Vermeer",
      "Jan Willem Pieneman": "https://en.wikipedia.org/wiki/Jan_Willem_Pieneman",
      "Jean Antoine Watteau": "https://en.wikipedia.org/wiki/Antoine_Watteau",
      "Jean Auguste Ingres": "https://en.wikipedia.org/wiki/Jean-Auguste-Dominique_Ingres",
      "Jean Baptiste Camille Corot": "https://en.wikipedia.org/wiki/Jean-Baptiste-Camille_Corot",
      "Jean Baptiste Greuze": "https://en.wikipedia.org/wiki/Jean-Baptiste_Greuze",
      "Jean Baptiste Oudry": "https://en.wikipedia.org/wiki/Jean-Baptiste_Oudry",
      "Jean Baptiste Perronneau": "https://en.wikipedia.org/wiki/Jean-Baptiste_Perronneau",
      "Jean Baptiste Vanmour": "https://en.wikipedia.org/wiki/Jean_Baptiste_Vanmour",
      "Jean Beraud": "https://en.wikipedia.org/wiki/Jean_B%C3%A9raud",
      "Jean Discart": "https://en.wikipedia.org/wiki/Jean_Discart",
      "Jean Etienne Liotard": "https://en.wikipedia.org/wiki/Jean-%C3%89tienne_Liotard",
      "Jean Francois Millet": "https://en.wikipedia.org/wiki/Jean-Fran%C3%A7ois_Millet",
      "Jean Francois Portaels": "https://en.wikipedia.org/wiki/Jean-Fran%C3%A7ois_Portaels",
      "Jean Francois Raffaelli": "https://en.wikipedia.org/wiki/Jean-Fran%C3%A7ois_Raffa%C3%ABlli",
      "Jean Frederic Bazille": "https://en.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Bazille",
      "Jean Hippolyte Flandrin": "https://en.wikipedia.org/wiki/Hippolyte_Flandrin",
      "Jean Honore Fragonard": "https://en.wikipedia.org/wiki/Jean-Honor%C3%A9_Fragonard",
      "Jean Leon Gerome": "https://en.wikipedia.org/wiki/Jean-L%C3%A9on_G%C3%A9r%C3%B4me",
      "Jean Louis Forain": "https://en.wikipedia.org/wiki/Jean-Louis_Forain",
      "Jean Marc Nattier": "https://en.wikipedia.org/wiki/Jean-Marc_Nattier",
      "Jean Ranc": "https://en.wikipedia.org/wiki/Jean_Ranc",
      "Jean Raoux": "https://en.wikipedia.org/wiki/Jean_Raoux",
      "Jean Simeon Chardin": "https://en.wikipedia.org/wiki/Jean_Sim%C3%A9on_Chardin",
      "Joachim Beuckelaer": "https://en.wikipedia.org/wiki/Joachim_Beuckelaer",
      "Joaquin Sorolla": "https://en.wikipedia.org/wiki/Joaqu%C3%ADn_Sorolla",
      "Johan Barthold Jongkind": "https://en.wikipedia.org/wiki/Johan_Jongkind",
      "John Cleveley": "https://en.wikipedia.org/wiki/John_Cleveley",
      "John Constable": "https://en.wikipedia.org/wiki/John_Constable",
      "John Durand": "https://en.wikipedia.org/wiki/John_Durand",
      "John Everett Millais": "https://en.wikipedia.org/wiki/John_Everett_Millais",
      "John Francis Rigaud": "https://en.wikipedia.org/wiki/John_Francis_Rigaud",
      "John Frederick Herring": "https://en.wikipedia.org/wiki/John_Frederick_Herring_Sr.",
      "John Frederick Kensett": "https://en.wikipedia.org/wiki/John_Frederick_Kensett",
      "John French Sloan": "https://en.wikipedia.org/wiki/John_Sloan",
      "John Hoppner": "https://en.wikipedia.org/wiki/John_Hoppner",
      "John James Audubon": "https://en.wikipedia.org/wiki/John_James_Audubon",
      "John Kane": "https://en.wikipedia.org/wiki/John_Kane",
      "John La Farge": "https://en.wikipedia.org/wiki/John_La_Farge",
      "John Lynn": "https://en.wikipedia.org/wiki/John_Lynn",
      "John Ottis Adams": "https://en.wikipedia.org/wiki/J._Ottis_Adams",
      "John Russell": "https://en.wikipedia.org/wiki/John_Russell_%28actor%29",
      "John Singer Sargent": "https://en.wikipedia.org/wiki/John_Singer_Sargent",
      "John Singleton Copley": "https://en.wikipedia.org/wiki/John_Singleton_Copley",
      "John Trumbull": "https://en.wikipedia.org/wiki/John_Trumbull",
      "John Vanderbank": "https://en.wikipedia.org/wiki/John_Vanderbank",
      "John Wesley Jarvis": "https://en.wikipedia.org/wiki/John_Wesley_Jarvis",
      "John White Alexander": "https://en.wikipedia.org/wiki/John_White_Alexander",
      "John William Godward": "https://en.wikipedia.org/wiki/John_William_Godward",
      "John William Waterhouse": "https://en.wikipedia.org/wiki/John_William_Waterhouse",
      "John Wollaston": "https://en.wikipedia.org/wiki/John_Wollaston",
      "Joseph Blackburn": "https://en.wikipedia.org/wiki/Joseph_Blackburn",
      "Joseph Ducreux": "https://en.wikipedia.org/wiki/Joseph_Ducreux",
      "Joseph Mallord William Turner": "https://en.wikipedia.org/wiki/J._M._W._Turner",
      "Joshua Johnson": "https://en.wikipedia.org/wiki/Joshua_Johnson",
      "Joshua Reynolds": "https://en.wikipedia.org/wiki/Joshua_Reynolds",
      "Juan Gris": "https://en.wikipedia.org/wiki/Juan_Gris",
      "Judith Leyster": "https://en.wikipedia.org/wiki/Judith_Leyster",
      "Jules Bastien Lepage": "https://en.wikipedia.org/wiki/Jules_Bastien-Lepage",
      "Jules Breton": "https://en.wikipedia.org/wiki/Jules_Breton",
      "Jules Pascin": "https://en.wikipedia.org/wiki/Jules_Pascin",
      "Julian Alden Weir": "https://en.wikipedia.org/wiki/J._Alden_Weir",
      "Julien Dupre": "https://en.wikipedia.org/wiki/Julien_Dupr%C3%A9",
      "Karel Dujardin": "https://en.wikipedia.org/wiki/Karel_Dujardin",
      "Kasimir Malevich": "https://en.wikipedia.org/wiki/Kazimir_Malevich",
      "Katsushika Hokusai": "https://en.wikipedia.org/wiki/Hokusai",
      "Kees Van Dongen": "https://en.wikipedia.org/wiki/Kees_van_Dongen",
      "Kitagawa Utamaro": "https://en.wikipedia.org/wiki/Utamaro",
      "Konstantin A Korovin": "https://en.wikipedia.org/wiki/Konstantin_Korovin",
      "Konstantin Gorbatov": "https://en.wikipedia.org/wiki/Konstantin_Gorbatov",
      "Laurent De La Hyre": "https://en.wikipedia.org/wiki/Laurent_de_La_Hyre",
      "Lawrence Alma Tadema": "https://en.wikipedia.org/wiki/Lawrence_Alma-Tadema",
      "Lemuel Francis Abbott": "https://en.wikipedia.org/wiki/Lemuel_Francis_Abbott",
      "Leon Augustin Lhermitte": "https://en.wikipedia.org/wiki/L%C3%A9on_Lhermitte",
      "Leonardo Da Vinci": "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
      "Lev Feliksovich Lagorio": "https://en.wikipedia.org/wiki/Lev_Lagorio",
      "Liubov Popova": "https://en.wikipedia.org/wiki/Lyubov_Popova",
      "Lord Frederic Leighton": "https://en.wikipedia.org/wiki/Frederic_Leighton",
      "Lorenzo Lotto": "https://en.wikipedia.org/wiki/Lorenzo_Lotto",
      "Louis Apol": "https://en.wikipedia.org/wiki/Louis_Apol",
      "Louis Comfort Tiffany": "https://en.wikipedia.org/wiki/Louis_Comfort_Tiffany",
      "Louis Valtat": "https://en.wikipedia.org/wiki/Louis_Valtat",
      "Louis Vivin": "https://en.wikipedia.org/wiki/Louis_Vivin",
      "Lovis Corinth": "https://en.wikipedia.org/wiki/Lovis_Corinth",
      "Lucas Cranach": "https://en.wikipedia.org/wiki/Lucas_Cranach_the_Elder",
      "Ludolf Backhuysen": "https://en.wikipedia.org/wiki/Ludolf_Bakhuizen",
      "Ludwig Deutsch": "https://en.wikipedia.org/wiki/Ludwig_Deutsch",
      "Lyonel Feininger": "https://en.wikipedia.org/wiki/Lyonel_Feininger",
      "Marie Guillemine Benoist": "https://en.wikipedia.org/wiki/Marie-Guillemine_Benoist",
      "Mark Rotho": "https://en.wikipedia.org/wiki/Ratha_Yatra_%28Puri%29",
      "Martin Johnson Heade": "https://en.wikipedia.org/wiki/Martin_Johnson_Heade",
      "Mary Cassatt": "https://en.wikipedia.org/wiki/Mary_Cassatt",
      "Matthew Pratt": "https://en.wikipedia.org/wiki/Matthew_Pratt",
      "Maurice De Vlaminck": "https://en.wikipedia.org/wiki/Maurice_de_Vlaminck",
      "Maurice Denis": "https://en.wikipedia.org/wiki/Maurice_Denis",
      "Maurice Prendergast": "https://en.wikipedia.org/wiki/Maurice_Prendergast",
      "Maurice Utrillo": "https://en.wikipedia.org/wiki/Maurice_Utrillo",
      "Max Pechstein": "https://en.wikipedia.org/wiki/Max_Pechstein",
      "Maxime Maufra": "https://en.wikipedia.org/wiki/Maxime_Maufra",
      "Maximilien Luce": "https://en.wikipedia.org/wiki/Maximilien_Luce",
      "Michelangelo Merisi Da Caravaggio": "https://en.wikipedia.org/wiki/Caravaggio",
      "Nicholas Pocock": "https://en.wikipedia.org/wiki/Nicholas_Pocock",
      "Nicolaes Berchem": "https://en.wikipedia.org/wiki/Nicolaes_Pieterszoon_Berchem",
      "Nicolas Poussin": "https://en.wikipedia.org/wiki/Nicolas_Poussin",
      "Odilon Redon": "https://en.wikipedia.org/wiki/Odilon_Redon",
      "Orazio Gentileschi": "https://en.wikipedia.org/wiki/Orazio_Gentileschi",
      "Oswald Achenbach": "https://en.wikipedia.org/wiki/Oswald_Achenbach",
      "Otto Mueller": "https://en.wikipedia.org/wiki/Otto_Mueller",
      "Paul Cezanne": "https://en.wikipedia.org/wiki/Paul_C%C3%A9zanne",
      "Paul Gabriel": "https://en.wikipedia.org/wiki/Paul_Gabri%C3%ABl",
      "Paul Gauguin": "https://en.wikipedia.org/wiki/Paul_Gauguin",
      "Paul Kane": "https://en.wikipedia.org/wiki/Paul_Kane",
      "Paul Klee": "https://en.wikipedia.org/wiki/Paul_Klee",
      "Paul Ranson": "https://en.wikipedia.org/wiki/Paul_Ranson",
      "Paul Serusier": "https://en.wikipedia.org/wiki/Paul_S%C3%A9rusier",
      "Paul Signac": "https://en.wikipedia.org/wiki/Paul_Signac",
      "Paulus Potter": "https://en.wikipedia.org/wiki/Paulus_Potter",
      "Peder Severin Kroyer": "https://en.wikipedia.org/wiki/Peder_Severin_Kr%C3%B8yer",
      "Peter Monamy": "https://en.wikipedia.org/wiki/Peter_Monamy",
      "Peter Paul Rubens": "https://en.wikipedia.org/wiki/Peter_Paul_Rubens",
      "Philippe De Champaigne": "https://en.wikipedia.org/wiki/Philippe_de_Champaigne",
      "Pierre Auguste Cot": "https://en.wikipedia.org/wiki/Pierre_Auguste_Cot",
      "Pierre Auguste Renoir": "https://en.wikipedia.org/wiki/Pierre-Auguste_Renoir",
      "Pierre Bonnard": "https://en.wikipedia.org/wiki/Pierre_Bonnard",
      "Pierre Henri De Valenciennes": "https://en.wikipedia.org/wiki/Pierre-Henri_de_Valenciennes",
      "Pierre Puvis De Chavannes": "https://en.wikipedia.org/wiki/Pierre_Puvis_de_Chavannes",
      "Piet Mondrian": "https://en.wikipedia.org/wiki/Piet_Mondrian",
      "Pieter Bruegel": "https://en.wikipedia.org/wiki/Pieter_Bruegel_the_Elder",
      "Pieter Claesz": "https://en.wikipedia.org/wiki/Pieter_Claesz",
      "Pieter De Hooch": "https://en.wikipedia.org/wiki/Pieter_de_Hooch",
      "Pieter Jansz Saenredam": "https://en.wikipedia.org/wiki/Pieter_Jansz._Saenredam",
      "Pieter Quast": "https://en.wikipedia.org/wiki/Pieter_Quast",
      "Pietro Longhi": "https://en.wikipedia.org/wiki/Pietro_Longhi",
      "Pompeo Girolamo Batoni": "https://en.wikipedia.org/wiki/Pompeo_Batoni",
      "Rachel Ruysch": "https://en.wikipedia.org/wiki/Rachel_Ruysch",
      "Raoul Dufy": "https://en.wikipedia.org/wiki/Raoul_Dufy",
      "Reinier Nooms": "https://en.wikipedia.org/wiki/Reinier_Nooms",
      "Rembrandt Peale": "https://en.wikipedia.org/wiki/Rembrandt_Peale",
      "Rembrandt Van Rijn": "https://en.wikipedia.org/wiki/Rembrandt",
      "Richard Ansdell": "https://en.wikipedia.org/wiki/Richard_Ansdell",
      "Robert Delaunay": "https://en.wikipedia.org/wiki/Robert_Delaunay",
      "Robert Henri": "https://en.wikipedia.org/wiki/Robert_Henri",
      "Robert William Vonnoh": "https://en.wikipedia.org/wiki/Robert_Vonnoh",
      "Roger De La Fresnaye": "https://en.wikipedia.org/wiki/Roger_de_La_Fresnaye",
      "Rogier Van der Weyden": "https://en.wikipedia.org/wiki/Rogier_van_der_Weyden",
      "Rosa Bonheur": "https://en.wikipedia.org/wiki/Rosa_Bonheur",
      "Salvador Dali": "https://en.wikipedia.org/wiki/Salvador_Dal%C3%AD",
      "Sandro Botticelli": "https://en.wikipedia.org/wiki/Sandro_Botticelli",
      "Sansio Raphael": null,
      "Santiago Rusinol": "https://en.wikipedia.org/wiki/Santiago_Rusi%C3%B1ol",
      "Sawrey Gilpin": "https://en.wikipedia.org/wiki/Sawrey_Gilpin",
      "Sergei Vinogradov": "https://en.wikipedia.org/wiki/Sergei_Vinogradov",
      "Simon De Vlieger": "https://en.wikipedia.org/wiki/Simon_de_Vlieger",
      "Simon Vouet": "https://en.wikipedia.org/wiki/Simon_Vouet",
      "Sir Edwin Landseer": "https://en.wikipedia.org/wiki/Edwin_Landseer",
      "Sir George Clausen": "https://en.wikipedia.org/wiki/George_Clausen",
      "Sir Peter Lely": "https://en.wikipedia.org/wiki/Peter_Lely",
      "Spencer Frederick Gore": "https://en.wikipedia.org/wiki/Spencer_Gore_%28artist%29",
      "Suzanne Valadon": "https://en.wikipedia.org/wiki/Suzanne_Valadon",
      "Theo Van Doesburg": "https://en.wikipedia.org/wiki/Theo_van_Doesburg",
      "Theo Van Rysselberghe": "https://en.wikipedia.org/wiki/Th%C3%A9o_van_Rysselberghe",
      "Theodor Von Hormann": "https://en.wikipedia.org/wiki/Theodor_von_H%C3%B6rmann",
      "Theodore C Steele": "https://en.wikipedia.org/wiki/T._C._Steele",
      "Theodore Gericault": "https://en.wikipedia.org/wiki/Th%C3%A9odore_G%C3%A9ricault",
      "Theophile Alexandre Steinlen": "https://en.wikipedia.org/wiki/Th%C3%A9ophile_Steinlen",
      "Thomas Cole": "https://en.wikipedia.org/wiki/Thomas_Cole",
      "Thomas Eakins": "https://en.wikipedia.org/wiki/Thomas_Eakins",
      "Thomas Gainsborough": "https://en.wikipedia.org/wiki/Thomas_Gainsborough",
      "Thomas Hovenden": "https://en.wikipedia.org/wiki/Thomas_Hovenden",
      "Thomas Jacques Somerscales": "https://en.wikipedia.org/wiki/Thomas_Somerscales",
      "Thomas Luny": "https://en.wikipedia.org/wiki/Thomas_Luny",
      "Thomas Lyde Hornbrook": "https://en.wikipedia.org/wiki/Thomas_Lyde_Hornbrook",
      "Thomas Moran": "https://en.wikipedia.org/wiki/Thomas_Moran",
      "Thomas Sully": "https://en.wikipedia.org/wiki/Thomas_Sully",
      "Thomas Waterman Wood": "https://en.wikipedia.org/wiki/Thomas_Waterman_Wood",
      "Tiziano Vecellio": "https://en.wikipedia.org/wiki/Titian",
      "Umberto Boccioni": "https://en.wikipedia.org/wiki/Umberto_Boccioni",
      "Vasiliy Polenov": "https://en.wikipedia.org/wiki/Vasily_Polenov",
      "Vilhelm Hammershoi": "https://en.wikipedia.org/wiki/Vilhelm_Hammersh%C3%B8i",
      "Vincent Van Gogh": "https://en.wikipedia.org/wiki/Vincent_van_Gogh",
      "Wassily Kandinsky": "https://en.wikipedia.org/wiki/Wassily_Kandinsky",
      "Willem Bartel Van der Kooi": "https://en.wikipedia.org/wiki/Kooi",
      "Willem Claesz Heda": "https://en.wikipedia.org/wiki/Willem_Claesz._Heda",
      "Willem Duyster": "https://en.wikipedia.org/wiki/Willem_Cornelisz_Duyster",
      "Willem Maris": "https://en.wikipedia.org/wiki/Willem_Maris",
      "Willem Van De Velde": "https://en.wikipedia.org/wiki/Willem_van_de_Velde_the_Elder",
      "William Adolphe Bouguereau": "https://en.wikipedia.org/wiki/William-Adolphe_Bouguereau",
      "William Bradford": "https://en.wikipedia.org/wiki/William_Bradford_%28governor%29",
      "William Glackens": "https://en.wikipedia.org/wiki/William_Glackens",
      "William Hodges": "https://en.wikipedia.org/wiki/William_Hodges",
      "William Merritt Chase": "https://en.wikipedia.org/wiki/William_Merritt_Chase",
      "William Michael Harnett": "https://en.wikipedia.org/wiki/William_Harnett",
      "William P Chappel": "https://en.wikipedia.org/wiki/William_Haighton_Chappel",
      "William Redmore Bigg": "https://en.wikipedia.org/wiki/William_Redmore_Bigg",
      "William Sidney Mount": "https://en.wikipedia.org/wiki/William_Sidney_Mount",
      "William Stanley Haseltine": "https://en.wikipedia.org/wiki/William_Stanley_Haseltine",
      "William Trost Richards": "https://en.wikipedia.org/wiki/William_Trost_Richards",
      "Winslow Homer": "https://en.wikipedia.org/wiki/Winslow_Homer",
      "Yves Tanguy": "https://en.wikipedia.org/wiki/Yves_Tanguy"
  },
      
  nationalities: [
    "American", "Austrian", "Belgian", "Canadian", "Dutch", "English", "Flemish",
    "French", "German", "Irish", "Italian", "Mexican", "Norwegian", "Russian",
    "Spanish", "Swiss"
  ],
  styles: [
    "American Art", "American Landscape", "Art Nouveau", "Avant-Garde", "Baroque",
    "Classicism", "Cubism", "Expressionism", "Fauvism", "Impressionism", "Nabi",
    "Naturalism", "Neo-Classicism", "Orientalism", "Pointillism", 
    "Post-Impressionism", "Realism", "Renaissance", "Rococo", "Romanticism",
    "Surrealism", "Symbolism"
  ],
  subjects: [
    "Abstract/Modern Art", "Architectures", "Autumn/Fall", "Bridges", 
    "Cafes/Bars", "Christianity", "Churches/Temples/Mosques", "Dancers", "Deers",
    "Dogs", "Flowers", "Gardens", "Horses", "Jesus Christ", "Landscape Art",
    "Lovers", "Marine Art/Maritime", "Musics", "Nude", "Portraits",
    "Rivers/Lakes", "Seascapes", "Spring", "Still-Life", "Summer", "Tigers",
    "U.S. Presidents", "Water Lilies", "Winter"
  ],
  countries: [
    "Brazil", "France", "Germany", "Hungary", "Israel", "Netherlands", "Russia",
    "Spain", "Switzerland", "UK", "USA", "United Kingdom"
  ],
  museums: [
    "Cleveland Museum Of Art", "Fine Arts Museums of San Francisco Legion of Honor",
    "Hungarian National Gallery", "Indianapolis Museum of Art", "Israel Museum",
    "Kunsthaus Zürich", "Los Angeles County Museum of Art", "Mauritshuis Museum",
    "Museum Folkwang", "Museum of Fine Arts of Nancy", "Museum of Fine Arts, Houston",
    "Musée d'Orsay", "Musée des Beaux-Arts de Quimper", "Musée du Louvre",
    "National Gallery", "National Gallery of Art", "National Maritime Museum",
    "Nelson-Atkins Museum of Art", "Philadelphia Museum of Art",
    "Pushkin State Museum of Fine Arts", "Rijksmuseum", "Saint Louis Art Museum",
    "Smithsonian American Art Museum", "Solomon R. Guggenheim Museum",
    "São Paulo Museum of Art", "The Art Institute of Chicago",
    "The Barnes Foundation", "The J. Paul Getty Museum",
    "The Metropolitan Museum of Art", "The Museum of Modern Art",
    "The Phillips Collection", "The Prado Museum", "The State Hermitage Museum",
    "The Tate Gallery", "Thussen-Bornemisza Museum", "Toledo Museum of Art"
  ]
};

// Initialize global artwork data
let globalartworkData;
let startDate = new Date("01/01/2025");
let currentDate = new Date();
let totalScore = 0;
let questionStep = 0;

// Quiz state
let currentQuestion = 0;
let timeLeft = 99;
let score = 0;
let timerInterval;
let log = "▶";

// prettier-ignore
const nationalityInput = document.querySelector('input[id="nationality-select"]');
const yearInput = document.querySelector('input[id="year-select"]');
const artistInput = document.querySelector('input[id="artist-select"]');

const toastContainer = document.getElementById("toast-container");

// Function to generate toasts based on the autocomplete suggestions
function generateToasts(filteredNationalities, isNationality = true) {
  toastContainer.innerHTML = ""; // Clear previous toasts

  // Generate toasts with nationalities or artists from the autocomplete suggestions
  filteredNationalities.forEach((suggestion, index) => {
    if (index < 5) {
      createToast(suggestion, "neutral", isNationality);
    }
  });
}

function createToast(suggestion, type, isNationality) {
  // Create the toast element
  const toast = document.createElement("div");
  toast.classList.add("toast");

  // Customize based on toast type (e.g., success, error, neutral)
  if (type === "success") {
    toast.classList.add("toast-success");
  } else if (type === "error") {
    toast.classList.add("toast-error");
  }

  toast.textContent = suggestion;

  // Add click event to toast
  toast.addEventListener("click", function () {
    // Update the input field based on whether it's nationality or artist
    if (isNationality) {
      nationalityInput.value = suggestion;
    } else {
      artistInput.value = suggestion;
    }
  });

  // Append toast to the container
  if (!toastContainer) {
    // If the container doesn't exist, create it
    const container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  toastContainer.appendChild(toast);
}

// 2. Autocomplete Logic
nationalityInput.addEventListener("input", function () {
  const query = nationalityInput.value.toLowerCase();

  if (query.length > 0) {
    const filteredNationalities = ARTWORK_VALUES.nationalities.filter(
      (nationality) => nationality.toLowerCase().includes(query)
    );

    // Generate toasts with the filtered nationalities
    generateToasts(filteredNationalities, true);
  }
});

artistInput.addEventListener("input", function () {
  const query = artistInput.value.toLowerCase();

  if (query.length > 0) {
    // Filter the artist names based on the input query
    const filteredArtists = Object.keys(ARTWORK_VALUES.artists).filter(
      (artist) => artist.toLowerCase().includes(query)
    );

    // Generate toasts with the filtered artists
    generateToasts(filteredArtists, false);
  }
});

// Async function to fetch the artwork data
async function fetchArtworkData() {
  // Only fetching cleaned_artwork_data.json since unique values are included in ARTWORK_VALUES
  const response = await fetch("./art_data/cleaned_artwork_data2.json");
  const artworkData = await response.json();

  globalartworkData = artworkData;
}

// prettier-ignore
function displayArtwork(artwork) {
  function openArtist() {
    const link = ARTWORK_VALUES.artists[artwork.artist.normalize("NFD").replace(/[\u0300-\u036f]/g, "")];
    window.open(link);
  }

  /* Update artwork display */
  document.getElementById("artwork-image").src = artwork.image_url || "";
  document.getElementById("artwork-image-result").src = artwork.image_url || "";
  document.getElementById("artwork-artist").textContent = `${artwork.artist || "Unknown Artist"}`;
  document.getElementById("artwork-title").textContent = `${artwork.worktitle || "Untitled"}`;

  // Manage the artwork link
  const artworkLink = document.getElementById("artwork-link");
  const newArtworkLink = artwork.wikipedia_url || "#";

  // Remove any existing event listeners by cloning the element
  const newLinkElement = artworkLink.cloneNode(true);
  newLinkElement.addEventListener("click", openArtist);
  newLinkElement.href = newArtworkLink;

  artworkLink.parentNode.replaceChild(newLinkElement, artworkLink);

  // Update additional details if present
  if (artwork.subject) {
    document.getElementById("subject").textContent = artwork.subject;
    document.getElementById("subject").style.display = "inline";
  } else {
    document.getElementById("subject").style.display = "none";
  }

  if (artwork.style) {
    document.getElementById("style").textContent = artwork.style;
    document.getElementById("style").style.display = "inline";
  } else {
    document.getElementById("style").style.display = "none";
  }
}

// Format date and wait for artwork data
async function formatDate(date) {
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yyyy = date.getFullYear();

  let Difference_In_Time = Math.round(
    (currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
  );

  // Wait for artwork data to load before displaying the artwork
  await fetchArtworkData();

  // Ensure artwork data is loaded before calling displayArtwork
  displayArtwork(globalartworkData[Difference_In_Time]);

  return `${mm}/${dd}/${yyyy}`;
}

// Update the date display
async function updateDateDisplay() {
  hideLoadingOverlays();
  document.getElementById("result").style.display = "none";
  totalScore = 0;
  questionStep = 1;
  document.getElementById("currentDate").textContent = await formatDate(
    currentDate
  );
}

// Initialize date display
updateDateDisplay();

// Event listeners for navigation buttons
document.getElementById("prevDate").addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() - 1);
  updateDateDisplay();
  startTimer();
});

document.getElementById("nextDate").addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() + 1);
  updateDateDisplay();
  startTimer();
});

document.getElementById("randomizer").addEventListener("click", () => {
  currentDate.setDate(
    currentDate.getDate() + 200 + Math.floor(Math.random() * 2000)
  );
  document.getElementById("date-nav").style.display = "none";
  updateDateDisplay();
  startTimer();
});

// Function to populate a select element with options
function populateSelect(selectId, options) {
  const select = document.getElementById(selectId);
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    select.appendChild(optionElement);
  });
}

// DOM elements
const timerProgress = document.getElementById("timer-progress");
const timerText = document.getElementById("timer-text");

// Timer circle calculations
const radius = 20;
const circumference = 2 * Math.PI * radius;
timerProgress.style.strokeDasharray = circumference;

function updateTimer() {
  const offset = circumference * (1 - timeLeft / 99);
  timerProgress.style.strokeDashoffset = offset;
  timerText.textContent = timeLeft;
}

// Function to move to next question
function showNextQuestion() {
  questionStep++;
  nationalityInput.style.display = "none";
  nationalityInput.value = "";
  yearInput.style.display = "none";
  yearInput.value = "";
  artistInput.style.display = "none";
  artistInput.value = "";
  if (questionStep === 1) {
    nationalityInput.style.display = "block";
    nationalityInput.focus();
  } else if (questionStep === 2) {
    yearInput.style.display = "block";
    yearInput.focus();
  } else if (questionStep === 3) {
    artistInput.style.display = "block";
    artistInput.focus();
  }
}

// Function to show final score
function showFinalScore() {
  toastContainer.innerHTML = ""; // Clear previous toasts
  const status = document.getElementById("status");
  if (totalScore == 3 && timeLeft >=30) {
    log += "✨"
    status.classList.add("yellow");
    status.innerHTML = `Conoseur &nbsp;
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 600" x="0px" y="0px" width="20" height="20">
                    <path fill="rgb(90, 93, 0)"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                `;
  }
  if (totalScore >= 2 && timeLeft <=30) {
    log += "👑"
    status.classList.add("green");
    status.innerHTML = `Expert &nbsp;
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 600" x="0px" y="0px" width="20" height="20">
                    <path fill="rgb(0, 93, 26)"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                `;
  }
  if (totalScore == 1) {
    log += "😀"
    status.classList.add("blue");
    status.innerHTML = `Novice &nbsp;
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 600" x="0px" y="0px" width="20" height="20">
                    <path fill="rgb(0, 87, 93)"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                `;
  }else {
    log += "😭"
  }
  document.getElementById("result").style.display = "flex";
}

function similarity(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (
    (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
  );
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0) costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

document.getElementById("popup").addEventListener("click", function () {
  this.style.display = "none"; // Hides the popup
});

// Function to handle answer submission
function handleAnswer() {
  const artwork =
    globalartworkData[
      Math.round(
        (currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
      )
    ];

  toastContainer.innerHTML = "";

  switch (questionStep) {
    case 1:
      input = nationalityInput.value.toLowerCase();
      if (!input) {
        createToast("You didn't type in anything", "error", false);
        return;
      }
      correct = similarity(input, artwork.nationality.toLowerCase()) > 0.6;
      if (correct) {
        totalScore++;
        log += "🌐"
      }else{
        log += "❌"
      }
      createToast(artwork.nationality, correct ? "success" : "error", false);
      break;
    case 2:
      input = parseInt(yearInput.value);
      if (!input) {
        createToast("You didn't type in anything", "error", false);
        return;
      }
      correct = input >= artwork.artist_born && input <= artwork.artist_dead;
      if (correct) {
        totalScore++;
        log += "🔢"
      }else {
        log += "❌"
      }
      createToast(input, correct ? "success" : "error", false);
      break;
    case 3:
      input = artistInput.value.toLowerCase();
      if (!input) {
        createToast("You didn't type in anything", "error", false);
        return;
      }
      correct = similarity(input, artwork.artist.toLowerCase()) > 0.6;
      if (correct) {
        totalScore++;
        log += "🎨"
      }else {
        log += "❌"
      }
      break;
  }

  if (questionStep < 3) {
    showNextQuestion();
  } else {
    clearInterval(timerInterval);
    showFinalScore();
  }
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 99;
  updateTimer();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      showFinalScore();
    }
  }, 1000);

  timeLeft = 99;
  score = 0;
  questionStep = 0;
  log = "▶";
  showNextQuestion();
}

function hideLoadingOverlays() {
  document.getElementById("loading-text").style.display = "block";
  document.getElementById("loading-overlay").style.display = "flex";
  document.getElementById("loading-overlay2").style.display = "flex";
  document.getElementById("loading-text").style.opacity = "1";
  document.getElementById("loading-overlay").style.opacity = "1";
  document.getElementById("loading-overlay2").style.opacity = "1";

  setTimeout(() => {
    const overlay = document.getElementById("loading-overlay");
    overlay.style.transition = "opacity 1s ease-out";
    overlay.style.opacity = "0";
  }, 2000);

  setTimeout(() => {
    const overlay = document.getElementById("loading-overlay2");
    overlay.style.transition = "opacity 1s ease-out";
    overlay.style.opacity = "0";
  }, 3000);

  setTimeout(() => {
    const overlay = document.getElementById("loading-overlay");
    const overlay2 = document.getElementById("loading-overlay2");
    overlay.style.display = "none";
    overlay2.style.display = "none";
  }, 4000);
}

// Add at the beginning of your script.js
document.addEventListener("DOMContentLoaded", () => {
  const tutorialModal = document.getElementById("tutorial-modal");
  const startGameBtn = document.getElementById("start-game");

  clearInterval(timerInterval);
  updateTimer();

  // Start game button click handler
  startGameBtn.addEventListener("click", () => {
    tutorialModal.classList.add("opacity-0");
    setTimeout(() => {
      tutorialModal.style.display = "none";
    }, 300);

    // Reset and start the timer
    startTimer();
  });
});

// Fetch data on load
fetchArtworkData()
  .then(() => {
    hideLoadingOverlays();
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    document.getElementById("loading-text").textContent =
      "Failed to load data.";
  });

const shareData = {
  title: "Do you know this famous piece?",
  text: "See if you can figure out the artist faster than I did",
  url: "https://conoseur.github.io",
};

const sharebtn = document.getElementById("shareBTN");

sharebtn.addEventListener("click", async () => {
  try {
    shareData.text = log;
    await navigator.share(shareData);
  } catch (err) {
    console.log(err);
  }
});
