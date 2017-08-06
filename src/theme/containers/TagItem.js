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
    margin-left: 0;
  }
  text-align: center;
`
export const TagWrapper = styled.div`
`

export const InlineTag = styled.div`
  display: inline-block;
  opacity: .60;
  font-size: .6em;
  margin-left: .5em;
  ${ media.phone`
    display: block;
    margin-top: .3em;
  ` }
`
export const BlogInlineTag = InlineTag.extend`
  color: ${Colors.p};
  a {
    padding: 0 .3em;
    :first-child {
      padding-left: 0;
    }
  }
`

export const TimeTag = InlineTag.extend`
  color: ${Colors.p};
  margin-left: 0;
  cursor:default;
  :after {
    content: '|';
    margin-left: .5em;
  }
`
