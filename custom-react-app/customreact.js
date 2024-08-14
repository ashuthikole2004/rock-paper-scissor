function customRenderElement(reactElement, container) {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerText = reactElement.Children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  //   container.appendChild(domElement);

  const domElement = document.createElement(reactElement.type);
  domElement.innerText = reactElement.Children;
  for (const prop in reactElement.props) {
    if (prop === "Children") {
      continue;
    }
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  //React element which we are going to accesss
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  Children: "Click me to open google",
};

const mainContainer = document.querySelector("#root");

customRenderElement(reactElement, mainContainer);
