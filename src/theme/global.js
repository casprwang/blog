import { createGlobalStyle } from 'styled-components';
import resets from 'theme/reset';
import typography from 'theme/typography';
import prism from 'theme/prism';
import background from 'theme/background';


export default createGlobalStyle`
  ${resets}
  ${typography}
  ${prism}
  ${background}
`;
