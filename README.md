# Hello!

This is the front-end project for my portfolio site [oldpoems.ink](http://www.oldpoems.ink).
The project started with the created-react-app generator to make the outline. For anyone wondering, the boilerplate is a good place to start and get a feel for react and it's front-end production scheme. It's very useful in taking care of some of the common build tools such as Babel, Web Pack, Sass, compilation to make sure the production code is slim and efficient. There's a bit of neurotic pixel counting and a bunch of nuance but I hope you enjoy and perhaps get something from looking at the codebase.

## Tech Notes
This project leveraged a React front-end compiled via node. The app itself is a *single-page* application which uses React routing to manage the links/separate pages. Styling wise, it was used using SCSS syntax and compiled inside of the build tools. I wanted more nuanced control of the DOM elements so opted to use CSS flexbox and CSS grid to create the lines which run around the pages. I realized that there was an efficiency of using HTML5 layout tags in a heirarchy, have desktop displays use CSS grid, and mobile view switch from grid to flex.

Inside of the photography page was made with a slick CSS table layout with a specific wrap which allowed the images to maintain their dimensions and give a lightweight photo collage look. The images are randomized at each refresh and populated based on a component function. I am aware that photos are cut off at the bottom :P.

The embedded mp4 videos were added to showcase the user interfaces of each project. mp4s are supported with HTML5 and are more light weight than animated GIFs. Just be aware that to autoplay the mp4, you have to set the video to mute.

## ToDos
- Create a back-end to mangage an API (mostly to replace the mailto link with a contact form)
- Integrate a small database to contain all project information and meta-data
- Create a more sustainable and reusable class/template/layout for displaying projects 
- Develop and deploy writing page
- *ADD MORE CONTENT!*
