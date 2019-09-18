# Gwpress.js
A 3D slide presentation tool 

## Usage - Creating your slides
Within the `js/expo_data.js` file edit your slides and its contents. Each element of the `slides` var represents one slide. The template file used must be a HTML file located in the `templates` folder.

The template may have "sub-templates", which will iterate over a set of items and should be enclosed in a `<for></for>` XML tag.

Some slides might come with an image, and should be placed in the `images` folder.

## Usage - Running your presentation
Once the slides are properly defined, just copy your files or run a server in the folder, and load `index.html`.

During your presentation, you can control the presentation by using the following keys:
* Press `i` to start the intro
* Press `n` to show and go forward
* Press `b` to go back and show the previous slide
* Press `f` to go the end
