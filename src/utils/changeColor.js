export default (color, num) => (
  `${color.slice(0, color.lastIndexOf(','))
  }, ${
    parseFloat(color.slice(color.lastIndexOf(',') + 1, color.lastIndexOf(')')))
   * num
  })`
);
