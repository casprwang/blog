import changeColor from 'utils/changeColor';


const h = 'hsla(0, 0%, 0%, 1)';
const background = 'hsla(0, 0%, 100%, 1)';
const linkHover = 'hsla(192, 100%, 50%, 1)';


export const Colors = {
  h,
  p: changeColor(h, 0.8),
  border: changeColor(h, 0.15),
  code: changeColor(h, 0.1),
  background,
  linkHover,
  link: changeColor(h, 0.35),
  subNav: changeColor(h, 0.20),
};

export const Fonts = {
  basic: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif, Georgia, serif, sans-serif',
  code: '\'Source Code Pro\', monospace',
};
