export function MakeIndexArray() {
  let outputIndex = [];
  let beforeNode = "";
  let fixingObj = {};
  document.querySelectorAll("h2[id],h3[id]").forEach( node => {
    const nodeId = node.getAttribute("id");
    if (node.nodeName === "H2") {
      outputIndex.push(
        {index2: nodeId}
      );
      beforeNode = node;
    } else if (node.nodeName === "H3") {
      if (beforeNode.nodeName === "H2") {
        fixingObj = Object.assign(outputIndex[outputIndex.length-1], {contents: []});
        fixingObj.contents.push(nodeId);
        beforeNode = node;
      } else if (beforeNode.nodeName === "H3") {
        fixingObj.contents.push(nodeId);
        beforeNode = node;
      }
    }
  })
  return outputIndex;
}
