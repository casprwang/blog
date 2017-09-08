import styled from 'styled-components'
import { media } from 'theme/utils/media'
import { Colors } from 'theme/variables.js'

export const TagItem = styled.span`
  opacity: .8;
  border-left: 1px solid ${Colors.border};
  border-right: 1px solid ${Colors.border};
  margin: 1em;
  padding: 0 1em;
`

export const TagIndex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: .8em;
  span:first-child {
    padding-left: 0;
  }
  text-align: center;
`
export const TagWrapper = styled.div``

export const NoteTag = styled.div`
  color: ${Colors.h};
  line-height: 1.7;
  font-weight: light;
  display: block;
  opacity: .60;
  font-size: .6em;
  margin-left: 0;
  a {
    position: relative;
    padding: 0 .4em;
    :first-child {
      margin-left: -.4em;
    }
    :hover {
      filter: invert(.9);
      :after {
        content: '';
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: ${Colors.background};
        filter: invert(.1);
        position: absolute;
        z-index: -11;
        border-radius: .1em;
      }
    }
  }
  ${media.phone`
    // display: block;
    margin-top: .3em;
    line-height 1.2;
  `};
`

export const InlineTag = styled.div`
  display: inline-block;
  opacity: .60;
  font-size: .6em;
  margin-left: .5em;
  ${media.phone`
    // display: block;
    margin-top: .3em;
  `};
`
export const BlogInlineTag = InlineTag.extend`
  line-height: 1.7;
  color: ${Colors.h};
  a {
    padding: 0 .3em;
    position: relative;
    :first-child {
    }

    :hover {
      filter: invert(.9);
      :after {
        content: '';
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: ${Colors.background};
        filter: invert(.1);
        position: absolute;
        z-index: -11;
        border-radius: .1em;
      }
    }
  }
`

export const TimeTag = InlineTag.extend`
  color: ${Colors.h};
  margin-left: 0;
  cursor: default;
  :after {
    content: '|';
    margin-left: .7em;
  }
`
