const handles = {
  // window position in screen
  left: new Key('left', [ 'ctrl', 'alt' ], () => setFrame(getPosition('left'))),
  right: new Key('right', [ 'ctrl', 'alt' ], () => setFrame(getPosition('right'))),
  top: new Key('up', [ 'ctrl', 'alt' ], () => setFrame(getPosition('top'))),
  bottom: new Key('down', [ 'ctrl', 'alt' ], () => setFrame(getPosition('bottom'))),
  maximize: new Key('m', [ 'ctrl', 'alt' ], () => Window.focused().maximize()),

  // move window between screens
  leftScreen: new Key('left', [ 'ctrl', 'alt', 'cmd' ], () => moveToScreen({offset: -1})),
  rightScreen: new Key('right', [ 'ctrl', 'alt', 'cmd' ], () => moveToScreen({offset: 1})),
};
