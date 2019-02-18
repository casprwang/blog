import styled from 'styled-components';
import media from 'utils/media';
import { Colors } from 'theme/variables';


export const TagItem = styled.span`
  opacity: 0.8;
  border-left: 1px solid ${Colors.border};
  border-right: 1px solid ${Colors.border};
  margin: 1em;
  padding: 0 1em;
`;

export const SearchTagItem = styled(TagItem)`
  border: 1px solid ${Colors.code};
  position: relative;
  padding: 0 1.4em;
  margin: 0 1.8em;
  padding-right: 0;
  :first-child {
    margin-left: -.4em;
  }
  :hover {
    filter: invert(0.9);
    :after {
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: ${Colors.background};
      filter: invert(0.1);
      position: absolute;
      z-index: -11;
      border-radius: 0.1em;
    }
  }
`;

export const TagIndex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 0.8em;
  span:first-child {
    padding-left: 0;
  }
  text-align: center;
`;
export const TagWrapper = styled.div``;

export const NoteTag = styled.div`
  color: ${Colors.h};
  line-height: 1.3;
  font-weight: light;
  display: block;
  opacity: 0.6;
  font-size: 0.6em;
  margin-left: 0;
  a {
    position: relative;
    padding: 0 0.4em;
    :first-child {
      margin-left: -.4em;
    }
    :hover {
      filter: invert(0.9);
      :after {
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: ${Colors.background};
        filter: invert(0.1);
        position: absolute;
        z-index: -11;
        border-radius: 0.1em;
      }
    }
  }
  ${media.phone`
    // display: block;
    margin-top: .3em;
    line-height 1.2;
  `};
`;

export const InlineTag = styled.div`
  display: inline-block;
  opacity: 0.6;
  font-size: 0.6em;
  margin-left: 0.5em;
  ${media.phone`
    // display: block;
    margin-top: .3em;
  `};
`;
export const BlogInlineTag = styled(InlineTag)`
  line-height: 1.7;
  color: ${Colors.h};
  font-weight: 600;
  a {
    padding: 0 0.3em;
    position: relative;
    :first-child {
    }

    :hover {
      filter: invert(0.9);
      :after {
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: ${Colors.background};
        filter: invert(0.1);
        position: absolute;
        z-index: -11;
        border-radius: 0.1em;
      }
    }
  }
`;

export const TimeTag = styled(InlineTag)`
  color: ${Colors.h};
  margin-left: 0;
  cursor: default;
  :after {
    content: "|";
    margin-left: 0.7em;
  }
`;
