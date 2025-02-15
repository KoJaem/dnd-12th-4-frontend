#!/bin/sh
cd ../
mkdir output

cp -R ./dnd-12th-4-frontend/* ./output

cp ./dnd-12th-4-frontend/.gitignore ./output
cp ./dnd-12th-4-frontend/.prettierrc.json ./output

cp -R ./output ./dnd-12th-4-frontend/