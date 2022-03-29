## use-draggable-scroll

NOTE: So far, this solely facilitates horizontal scrolling. If anyone would like to add vertical functionality by all means feel free to add a PR

### Install

yarn add @lxm7/use-draggable-scroll

### Usage
Uses the base layer styling from this article <a href='https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585'>https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585</a>

Can use defaults along with base layer styles and refs encapsulated in the lib to allow for minimal implementation effort in the UI.

```
import React from "react";
import { useDraggableScroll, Config } from "@lxm7/use-draggable-scroll";

const ScrollRow: React.FC<{ config: Config }> = ({ config }) => {
  const { hsProps, HsScroller, Item } = useDraggableScroll(config);

  return (
    <HsScroller {...hsProps} {...config}>
      <div>
        {Array.from({ length: config.noOfItems }, (_, i) => i + 1).map(item => (
          <Item
            key={item}
            // optional base styles
            height={config.height}
            itemWidth={config.itemWidth}
            gutter={config.gutter}
            // custom styles on top of base Item
            style={{
              background: "red",
              justifyContent: "center",
              alignItems: "center",
              color: "white"
            }}
          >
            {item}
          </Item>
        ))}
      </div>
    </HsScroller>
  );
};

export default ScrollRow;

```
