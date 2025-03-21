//@ts-ignore
/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "@mui/material";
import { phylotree as Phylotree } from "phylotree";
import $ from "jquery";
import { useRef, useLayoutEffect } from "react";
import "./style.css";
import saveTree from "../../scripts/saveTree";

export default function Tree({ newick, printMode }) {
  const treeContainer = useRef();
  let tree;
  try {
    tree = new Phylotree(newick);
  } catch (error) {
    // eslint-disable-next-line no-void
    void 0;
  }

  useLayoutEffect(() => {
    try {
      tree.render({
        container: treeContainer.current,
        height: 500,
        width: 500,
        "left-right-spacing": "fit-to-size",
        "top-bottom-spacing": "fit-to-size",
        zoom: false,
      });
    } catch (error) {
      return;
    }

    $(tree.display.container).empty();
    $(tree.display.container).append(tree.display.show());
  });

  if (!printMode) {
    return (
      <div>
        <div className="tree" id="tree" ref={treeContainer} />
        <Button
          type="button"
          id="saveImageButton"
          onClick={() => saveTree("svg", "#tree")}
          variant="outlined"
        >
          baixar
        </Button>
      </div>
    );
  } else if (printMode) {
    return (
      <div>
        <div className="tree" id="tree" ref={treeContainer} />
      </div>
    );
  }
}
