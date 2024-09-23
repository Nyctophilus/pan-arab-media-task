# Run the project locally

1. Clone the project `git clone https://github.com/Nyctophilus/pan-arab-media-task.git`
2. Install the dependencies `npm install` or `yarn install`
3. Run the project `gulp` or `npx gulp` in the terminal
4. Open the browser and navigate to `http://localhost:3000`
5. Make sure you have `gulp-cli` installed globally by running `npm install -g gulp-cli` or `yarn global add gulp-cli`


## Preformance Features
- minification
- debounce throttle
- lazy load assets with defer
- used document fragments to improve performance by deferring the frequent updates of DOM elements and apply them in one-go 
- clear listeners and intervals
- optimize the animations to use GPU instead of CPU