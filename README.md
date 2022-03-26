## use-draggable-scroll

NOTE: So far, this solely facilitates horizontal scrolling. If anyone would like to add vertical functionality by all means feel free to add a PR

### Install

yarn add @lxm7/use-draggable-scroll

### Usage
Uses the base layer styling from this article <a href='https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585'>https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585</a>

Currently uses defaults and encapsulated styles and state from the hook library to allow for minimal implementation effort in the UI. 
TODO: add user config option to hook. Keep multiple refs unique.

```
import { useDraggableScroll } from '@lxm7/use-draggable-scroll';

const Usage = () => {
  const { hsProps, HSNoScrollbar } = useDraggableScroll();

  return (
    <HSNoScrollbar {...hsProps}>
      <div style={{ width: "max-content" }}>
        <div
          style={{
            height: HEIGHT,
            display: "inline-block",
            background: "red",
            width: "300px",
            margin: "10px"
          }}
        />
        <div
          style={{
            height: HEIGHT,
            display: "inline-block",
            background: "red",
            width: "300px",
            margin: "10px"
          }}
        />
        <div
          style={{
            height: HEIGHT,
            display: "inline-block",
            background: "red",
            width: "300px",
            margin: "10px"
          }}
        />
      </div>
    </HSNoScrollbar>
  )
}

```
