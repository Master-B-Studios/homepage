from pathlib import Path
import json
import xml.etree.ElementTree as ET

# ----------------------------------------------------------
# Ordner
# ----------------------------------------------------------

BASE = Path(__file__).resolve().parent.parent

MOVIES = BASE / "Web-Tools" / "MB Movie-Base" / "Movies"
OUTPUT = BASE / "Web-Tools" / "MB Movie-Base" / "movies.json"

# ----------------------------------------------------------
# Film einlesen
# ----------------------------------------------------------

def read_movie(folder: Path):

    # -------------------------
    # NFO suchen
    # -------------------------

    nfo_files = list(folder.glob("*.nfo"))

    if len(nfo_files) == 0:
        print(f"❌ {folder.name}: keine NFO gefunden")
        return None

    if len(nfo_files) > 1:
        print(f"❌ {folder.name}: mehrere NFO-Dateien gefunden")
        return None

    nfo = nfo_files[0]

    # -------------------------
    # Poster suchen
    # -------------------------

    poster_files = list(folder.glob("*-poster.jpg"))

    if len(poster_files) > 1:
        print(f"⚠ {folder.name}: mehrere Poster gefunden")

    poster = poster_files[0] if poster_files else None

    # -------------------------
    # XML lesen
    # -------------------------

    try:
        root = ET.parse(nfo).getroot()

    except Exception as e:
        print(f"❌ {folder.name}: XML-Fehler ({e})")
        return None

    movie = {}

    # -------------------------
    # Alle XML-Tags übernehmen
    # -------------------------

    for child in root:

        tag = child.tag
        value = (child.text or "").strip()

        if tag in movie:

            if not isinstance(movie[tag], list):
                movie[tag] = [movie[tag]]

            movie[tag].append(value)

        else:

            movie[tag] = value

    # -------------------------
    # Zusätzliche Daten
    # -------------------------

    movie["folder"] = folder.name

    movie["filename"] = nfo.stem

    if poster:
        movie["poster"] = f"Movies/{folder.name}/{poster.name}"
        movie["hasPoster"] = True
    else:
        movie["poster"] = ""
        movie["hasPoster"] = False

    return movie


# ----------------------------------------------------------
# Filme sammeln
# ----------------------------------------------------------

movies = []

folders = sorted(
    [f for f in MOVIES.iterdir() if f.is_dir()],
    key=lambda p: int(p.name)
)

for folder in folders:

    movie = read_movie(folder)

    if movie:
        movies.append(movie)

# ----------------------------------------------------------
# Nach ID sortieren
# ----------------------------------------------------------

movies.sort(
    key=lambda m: int(m.get("id", 0))
)

# ----------------------------------------------------------
# JSON schreiben
# ----------------------------------------------------------

with open(OUTPUT, "w", encoding="utf-8") as f:

    json.dump(
        movies,
        f,
        ensure_ascii=False,
        indent=4
    )

print()
print(f"✅ {len(movies)} Filme verarbeitet.")
print(f"💾 {OUTPUT}")