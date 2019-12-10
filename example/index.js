import chromeSvg from "./svg/chrome.isvg";
import firefoxSvg from "./svg/firefox.isvg";
import safariSvg from "./svg/safari.isvg";
import edgeSvg from "./svg/edge.isvg";
import operaSvg from "./svg/opera.isvg";
import explorerSvg from "./svg/explorer.isvg";
import dummySvg from "./svg/dummy.isvg";

// const parser = new DOMParser();
// const svgElement = parser.parseFromString(chromeSvg, "image/svg+xml");

const chromeElement = document.createElement("span");
const firefoxElement = document.createElement("span");
const safariElement = document.createElement("span");
const edgeElement = document.createElement("span");
const operaElement = document.createElement("span");
const explorerElement = document.createElement("span");
const dummyEl = document.createElement("span");

chromeElement.innerHTML = chromeSvg;
firefoxElement.innerHTML = firefoxSvg;
safariElement.innerHTML = safariSvg;
edgeElement.innerHTML = edgeSvg;
operaElement.innerHTML = operaSvg;
explorerElement.innerHTML = explorerSvg;
dummyEl.innerHTML = dummySvg;

document.body.appendChild(chromeElement);
document.body.appendChild(firefoxElement);
document.body.appendChild(safariElement);
document.body.appendChild(edgeElement);
document.body.appendChild(operaElement);
document.body.appendChild(explorerElement);
document.body.appendChild(dummyEl);
