// Incializando filterizr
// Default options
let filter = $(".filter-container").filterizr();
let options = {
  animationDuration: 0.5, // in seconds
  controlsSelector: '', // Selector for custom controls
  delay: 0, // Transition delay in ms
  delayMode: 'progressive', // 'progressive' or 'alternate'
  easing: 'ease-out',
  filter: 'all', // Initial filter
  filterOutCss: { // Filtering out animation
    opacity: 1,
    transform: 'scale(0.5)'
  },
  filterInCss: { // Filtering in animation
    opacity: 1,
    transform: 'scale(1)'
  },
  gridItemsSelector: '.filter-container',
  gutterPixels: 0, // Items spacing in pixels
  layout: 'sameSize', // See layouts
  multifilterLogicalOperator: 'or',
  searchTerm: '',
  setupControls: true, // Should be false if controlsSelector is set 
  spinner: { // Configuration for built-in spinner
    enabled: false,
    fillColor: '#2184D0',
    styles: {
      height: '75px',
      margin: '0 auto',
      width: '75px',
      'z-index': 2,
    },
  },
}

filter.filterizr('setOptions', options);