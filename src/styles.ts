import styled, { css } from "styled-components";

export const HSNoScrollbar = styled.div<{
  noOfItems?: number;
  height?: number;
  gutter?: number;
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
`;