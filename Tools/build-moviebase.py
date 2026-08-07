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
# Hilfsfunktion
# ----------------------------------------------------------

def read_movie(folder: Path):

    nfo = folder / "movie.nfo"
    poster = folder / "poster.jpg"

    if not nfo.exists():
        print(f"❌ {folder.name}: movie.nfo fehlt")
        return None

    try:
        root = ET.parse(nfo).getroot()

    except Exception as e:
        print(f"❌ {folder.name}: XML-Fehler ({e})")
        return None

    movie = {}

    # Alle XML-Tags übernehmen
    for child in root:

        tag = child.tag

        # mehrere gleiche Tags (genre, actor, ...)
        if tag in movie:

            if not isinstance(movie[tag], list):
                movie[tag] = [movie[tag]]

            movie[tag].append(child.text or "")

        else:
            movie[tag] = child.text or ""

    # Zusätzliche Informationen

    movie["folder"] = folder.name
    movie["poster"] = f"Movies/{folder.name}/poster.jpg"
    movie["hasPoster"] = poster.exists()

    return movie


# ----------------------------------------------------------
# Filme einlesen
# ----------------------------------------------------------

movies = []

folders = sorted(
    [f for f in MOVIES.iterdir() if f.is_dir()],
    key=lambda x: int(x.name)
)

for folder in folders:

    movie = read_movie(folder)

    if movie is not None:
        movies.append(movie)

print(f"{len(movies)} Filme gefunden.")

# ----------------------------------------------------------
# JSON speichern
# ----------------------------------------------------------

with open(OUTPUT, "w", encoding="utf-8") as f:

    json.dump(
        movies,
        f,
        ensure_ascii=False,
        indent=4
    )

print("movies.json geschrieben.")