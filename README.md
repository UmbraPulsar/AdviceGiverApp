# AdviceGiverApp
## What is it
This is an app that gives weird advice snippets at the press of a button.

## Tech Used
Primarily React-Native with tooling for SVGs

## Known Issues
Long state change delay. I'm pretty sure it's because the API endpoint i'm using isn't reallyd designed for mobile use. 

## Notes
This is my first React-Native application. Mobile app development is strategically different from responsive development. 
A few of the issues i've run into while making this was lack of native support for SVGs which I guess makes some sense.
I had to scower through google and read a few lines of documentation but found an easy solution. I also learned that for many svgs...
it's better to turn them into a font. I didn't know you could turn svgs into fonts and I think that's really neat!

I ran into a few problems with the deployment of react-native applications...decided to make it a pure react web application. The issue with state change still perissts so I am confident now that it is an API limitation instead of something my code is doing. :D yay!
