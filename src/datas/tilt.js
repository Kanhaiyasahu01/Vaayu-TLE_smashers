export const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            15,     // reduce the max tilt rotation for a gentler effect
    perspective:    1200,   // increase perspective for a more subtle tilt depth
    scale:          1.0,   // slight scaling to add smooth zooming effect
    speed:          400,    // slower speed for a more gradual transition
    transition:     true,   // enable smooth transition on enter/exit
    axis:           null,   // no axis is disabled, tilt on both X and Y
    reset:          true,   // reset tilt on exit
    easing:         "cubic-bezier(.02,.90,.50,.95)", 
  };
  