## use-draggable-scroll

NOTE: So far, this solely facilitates horizontal scrolling. If anyone would like to add vertical functionality by all means feel free to add a PR

### Install

yarn add @lxm7/use-draggable-scroll

### Usage

Use the recommended scrollable wrapper styling in the rendered part of your component from <a href='https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585'>https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585</a>

```
import styled from 'styled-components';

export const HSContainer = styled.div`
  overflow-x: scroll;
  height: 185px;
  display: grid;
  grid-gap: 5%;
  grid-template-columns: repeat(20, calc(95% - 5%));
  grid-template-rows: minmax(175px, 1fr);
  margin: 30px 0 70px;
  &::after {
    display: none;
  }
  @media only screen and (min-width: 680px) {
    grid-template-columns: repeat(20, calc(50% - 8%));
    &::after {
      display: block;
      content: '';
      box-shadow: inset -60px 0px 0px 0px rgb(232 232 232 / 60%);
      position: absolute;
      right: 0;
      height: 175px;
      width: 60px;
    }
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(20, calc(30% - 3%));
  }
  @media only screen and (min-width: 1600px) {
    grid-template-columns: repeat(20, calc(25% - 5.75%));
  }
  @media only screen and (min-width: 2000px) {
    grid-template-columns: repeat(20, calc(20% - 5%));
  }
`;

// We can hide the scrollbar for the HSContainer as we have made this area draggable
export const HZScroll = styled(HSContainer)`
  scrollbar-width: none;
  padding-bottom: 0;

  &::-webkit-scrollbar {
    display: none;
  }
  /* set height to match container when no visible scroll bar */
  &::after {
    height: 200px;
  }
`;

```

With this in place we now just need to add the handler and ref state to this styled div.

```
import { useDraggableScroll } from '@lxm7/use-draggable-scroll';

import { HZScroll } from './styles'

const Usage = () => {
  const [handleEvent, slideArea] = useDraggableScroll();  

  return (
    <HZScroll
      data-testid="horizontal-scroller"
      ref={slideArea}
      onMouseMove={handleEvent}
      onMouseDown={handleEvent}
      onMouseUp={handleEvent}
      onMouseLeave={handleEvent}>
      <>stuff in here</>
    </HZScroll>
  )
}

```
