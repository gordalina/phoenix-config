function getPosition(name) {
  switch (name) {
    /* SIDES */
    case 'top': return { x: 0, y: 0, width: 1, height: .5 };
    case 'right': return { x: .5, y: 0, width: .5, height: 1 };
    case 'bottom': return { x: 0, y: .5, width: 1, height: .5 };
    case 'left': return { x: 0, y: 0, width: .5, height: 1 };

    /* CORNERS */
    case 'top-left': return { x: 0, y: 0, width: .5, height: .5 };
    case 'top-right': return { x: .5, y: 0, width: .5, height: .5 };
    case 'bottom-right': return { x: .5, y: .5, width: .5, height: .5 };
    case 'bottom-left': return { x: 0, y: .5, width: .5, height: .5 };
  }
}
