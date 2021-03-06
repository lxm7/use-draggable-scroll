import { useRef, useReducer, RefObject, MouseEvent } from "react";

import { HsScroller, Item } from "./styles";

const HEIGHT = 200;
const GUTTER = 10;
const ITEMS = 10;

/**
 * Document Wrapper draggable state
 */
export type State = {
  isDown: boolean;
  startX: number;
  scrollLeft: number;
};

/** initial state for the draggable area
 * @type {State}
 */
const initialState: State = {
  isDown: false,
  startX: 0,
  scrollLeft: 0
};

export type Config = {
  noOfItems?: number;
  height?: number;
  itemWidth?: number;
  gutter?: number;
  hideScrollbar?: boolean;
}

/** This reducer will fire each time a mouseevent is passed in from the
 * ArticlWrapper to create a horizontally draggable area. We split
 * out the event into {type, pageX} along with a ref to our {element}
 *
 * @param {State} state
 * @param { type: string, pageX: number, element: RefObject<HTMLDivElement> }
 * @returns {State}
 */
const dragReducer = (
  state: State,
  {
    type,
    pageX,
    element
  }: { type: string; pageX: number; element: RefObject<HTMLDivElement> }
) => {
  const sliderArea = element.current as HTMLDivElement;

  switch (type) {
    case "mousedown":
      return {
        ...state,
        isDown: true,
        startX: pageX - sliderArea.offsetLeft,
        scrollLeft: sliderArea.scrollLeft
      };
    case "mouseleave":
    case "mouseup":
      return { ...state, isDown: false };
    case "mousemove": {
      if (!state.isDown) return state;
      const x = pageX - sliderArea.offsetLeft;
      const walk = x - state.startX;
      sliderArea.scrollLeft = state.scrollLeft - walk;
      return state;
    }
    default:
      return state;
  }
};

export const useDraggableScroll = (config: Config) => {
  const slideAreaRef = useRef<HTMLDivElement>(null);
  const [, dispatch] = useReducer(dragReducer, initialState);

  /** The same event is passed to multipe mouseevents for the draggable
   * area and we handover these events to our dragReducer
   *
   * @param {MouseEvent} e
   */
  const handleEvent = (e: MouseEvent) => {
    // We need to persist the event when using mouseevents in React
    e.persist();
    const { type, pageX } = e;
    // We dispatch the reducer with some event attributes and
    // our Dom ref `slideAreaRef`
    dispatch({ type, pageX, element: slideAreaRef });
  };

  const hsProps = {
    height: config.height || HEIGHT,
    gutter: config.gutter || GUTTER,
    noOfItems: config.noOfItems || ITEMS,
    hideScrollbar: config.hideScrollbar || true,
    ref: slideAreaRef,
    onMouseMove: handleEvent,
    onMouseDown: handleEvent,
    onMouseUp: handleEvent,
    onMouseLeave: handleEvent
  };

  return {
    slideAreaRef,
    handleEvent,
    hsProps,
    HsScroller,
    Item,
  };
};
