import styled, { css } from "styled-components";

export const HsScroller = styled.div<{
  hideScrollbar?: boolean;
}>`
  overflow-x: scroll;
  cursor: grab;
  ${({ hideScrollbar }) => hideScrollbar &&
    css`
      scrollbar-width: none;
      padding-bottom: 0;
      &::-webkit-scrollbar {
        display: none;
      }
    `
  }}
  > div {
    width: max-content;
  }
`;

export const Item = styled.div<{
  itemWidth?: number;
  height?: number;
  gutter?: number;
}>`
  width:  ${({ itemWidth }) => `${itemWidth || 200}px`};
  height:  ${({ height }) => `${height || 100}px`};
  margin:  ${({ gutter }) => `${gutter || 10}px`};
  display: inline-flex;
`;