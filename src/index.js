import "./styles.css";
const mainEl = document.querySelector("main");
console.log(mainEl);
mainEl.style.backgroundColor = "var(--main-bg)";
const header = document.createElement("h1");
header.innerHTML = "DOM MANIPULATION";
mainEl.append(header);
