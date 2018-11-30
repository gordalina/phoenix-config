function setFrame({x, y, width, height, window = Window.focused(), screen = Window.focused().screen()}) {
  const frame = screen.flippedVisibleFrame();

  window.setFrame ({
    x: frame.x + (frame.width * x),
    y: frame.y + (frame.height * y),
    width: frame.width * width,
    height: frame.height * height
  });
}

function moveToScreen({window = Window.focused(), offset = 0}) {
  setFrame({
    x: 0.1,
    y: 0.1,
    width: 0.8,
    height: 0.8,
    window,
    screen: getScreenFromOffset({window, offset})
  });
}
