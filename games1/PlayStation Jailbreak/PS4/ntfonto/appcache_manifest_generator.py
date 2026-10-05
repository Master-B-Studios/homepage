import os
import hashlib
import argparse


def calculate_file_hash(file_path):
    sha256_hash = hashlib.sha256()

    with open(file_path, "rb") as f:
        for data in iter(lambda: f.read(65536), b""):
            sha256_hash.update(data)

    return sha256_hash.hexdigest()


def generate_cache_manifest(directory_path):
    manifest = ["CACHE MANIFEST"]

    for root, _, files in os.walk(directory_path):
        for file in files:

            # Das Manifest selbst nicht in seine eigene Hash-Liste aufnehmen
            if file == "cache.manifest":
                continue

            file_path = os.path.join(root, file)

            file_hash = calculate_file_hash(file_path)

            # Pfad relativ zum ntfonto-Ordner
            manifest_path = os.path.relpath(
                file_path,
                directory_path
            )

            manifest_path = manifest_path.replace("\\", "/")

            manifest.append(
                manifest_path + " #" + file_hash
            )

    return manifest


parser = argparse.ArgumentParser(
    description="Generate an appcache manifest."
)

parser.add_argument(
    "directory_path",
    nargs="?",
    default="./",
    help="Directory to generate the manifest for."
)

args = parser.parse_args()


cache_manifest = generate_cache_manifest(
    args.directory_path
)

output_path = os.path.join(
    args.directory_path,
    "cache.manifest"
)

with open(output_path, "w") as manifest_file:
    manifest_file.write("\n".join(cache_manifest))

print(
    f"Cache manifest generated in path: '{output_path}'"
)