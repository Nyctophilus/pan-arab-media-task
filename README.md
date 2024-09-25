# Run the project locally

1. Clone the project `git clone https://github.com/Nyctophilus/pan-arab-media-task.git`
2. Install the dependencies `npm install` or `yarn install`
3. Run the project `gulp` or `npx gulp` in the terminal
4. Open the browser and navigate to `http://localhost:3000`
5. Make sure you have `gulp-cli` installed globally by running `npm install -g gulp-cli` or `yarn global add gulp-cli`


## Preformance Optimizations part_1
- minification
- debounce throttle
- lazy load assets with defer
- used document fragments to improve performance by deferring the frequent updates of DOM elements and apply them in one-go 
- clear listeners and intervals
- optimize the animations to use GPU instead of CPU

## Pagespeed insights optimizations 
- added PreformanceObserver js file to track lcp and cls (should be removed from production)
- added fixed height for images and containers to preserve place (preventing layout shifts)
- added lazy loading for images that not in the initial view
- preload images in dymanically rendered content
- preload font
- prefetch for the dns-prefetch
- moved scripts from the head to reduce the blocking time

## Accessibility Improvements
- added ARIA roles and attributes to buttons
- fixed the redundant alt text for images
- all children of the ul should be li elements