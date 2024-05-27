# Screen Capture Chrome Extension

This Chrome extension allows you to capture a specific area of a webpage and save the screenshot to a local directory. It uses `html2canvas` for rendering the webpage content to a canvas element, and then sends the captured image to a local Flask server for saving.

## Features
- Capture a specific area of a webpage by drawing a selection box.
- Save the captured screenshot to a specified local directory.
- Easy to install and use.

## Prerequisites
- [Google Chrome](https://www.google.com/chrome/) browser
- [Python](https://www.python.org/downloads/) installed
- [Flask](https://flask.palletsprojects.com/en/2.0.x/installation/) installed (`pip install flask`)

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/screen-capture-extension.git
cd screen-capture-extension

# Screen Capture Chrome Extension

This Chrome extension allows you to capture a specific area of a webpage and save the screenshot to a local directory. It uses `html2canvas` for rendering the webpage content to a canvas element, and then sends the captured image to a local Flask server for saving.

## Features
- Capture a specific area of a webpage by drawing a selection box.
- Save the captured screenshot to a specified local directory.
- Easy to install and use.

## Prerequisites
- [Google Chrome](https://www.google.com/chrome/) browser
- [Python](https://www.python.org/downloads/) installed
- [Flask](https://flask.palletsprojects.com/en/2.0.x/installation/) installed (`pip install flask`)

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/screen-capture-extension.git
cd screen-capture-extension



cd ./PriceVIX/
cd ./SQZMom/
cd ./ADX/


./release_and_restart.sh

Make sure to adjust the file paths and URLs as needed to fit your specific setup. This README provides step-by-step instructions for setting up and using the Chrome extension and the Flask server.
create image with S label

Make the images
A bar chart with green bars on the left and red bars on the right, overlayed with a large white capital letter 'V' in the center.
A bar chart with green bars on the left and red bars on the right, overlayed with a large white capital letter 'V' in the center.
Make black square image with white capital V

copy images to right size per chrome extension manifest.json
Requires imageMagic to resize images
brew install imagemagick

   "default_icon": {
      "16": "images/icon16.png",
      "48": "images/icon48.png",
      "128": "images/icon128.png"
    }
    
cd ./../../PriceVIX/images
cd ./../../SQZMom/images
cd ./../../ADX/images

convert default.png -resize 16x16 icon16.png
convert default.png -resize 48x48 icon48.png
convert default.png -resize 128x128 icon128.png

