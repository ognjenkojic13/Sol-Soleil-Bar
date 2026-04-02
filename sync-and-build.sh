#!/bin/bash
SOURCE="/Users/ognjenkojic/Desktop/untitled folder"
TARGET="/Users/ognjenkojic/Desktop/Sol-Soleil-Bar"

cp -r "$SOURCE/src/." "$TARGET/src/"
cp -r "$SOURCE/public/." "$TARGET/public/"
cp "$SOURCE/index.html" "$TARGET/index.html"
cp "$SOURCE/vite.config.js" "$TARGET/vite.config.js"

cd "$TARGET"
npm run build
cp "$TARGET/dist/index.html" "$TARGET/index.html"

echo "Done! Now run: git add . && git commit -m 'update' && git push origin main"
