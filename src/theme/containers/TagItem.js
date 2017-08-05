import styled from 'styled-components'
import { media } from 'theme/utils/media'

export const TagItem = styled.span`
  opacity: .8;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
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

export const InlineTag = styled.div`
  display: inline-block;
  opacity: .55;
  font-size: .6em;
  margin-left: .5em;
  ${ media.phone`
    display: block;
    margin-top: .3em;
  ` }
`

export const TimeTag = InlineTag.extend`
  cursor:default;
  :after {
    content: '|';
    margin-left: .5em;
  }
`
