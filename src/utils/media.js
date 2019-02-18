import { css } from 'styled-components';


const sizes = {
  monitor: 1600,
  desktop: 992,
  tablet: 700,
  phone: 425,
  tiny: 340,
  none: 320,
};

// Iterate through the sizes and create a media template
export default
Object
  .keys(sizes)
  .reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
    return acc;
  }, {});
