#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install nodejs
apt-get install libwebp
apt-get install ffmpeg
apt-get install wget
apt-get install tesseract
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"

npm install

echo "[*] Sexy quien lea estoUwU \"npm start ó node index.js\" Use uno de los 2 para ejecutar al bot :3"
echo "NeKosmic-Bot : Matt M."
