import styled from 'styled-components';
import { Colors } from 'theme/variables';


export default styled.form`
  display: flex;
  color: ${Colors.h};
  align-items: left;
  justify-content: left;
  flex-direction: column;
  margin-top: 3em;

  input {
    font-size: 3em;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 3px solid ${Colors.border};

    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      ${Colors.code};
      opacity: .3;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      ${Colors.code};
      opacity: .3;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
      ${Colors.code};
      opacity: .3;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      ${Colors.code};
      opacity: .3;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
      ${Colors.code};
      opacity: .3;
    }
    ::placeholder { /* Most modern browsers support this now. */
      ${Colors.code};
      opacity: .3;
    }
  }
`;
