// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p=document.createElement("p");
p.textContent="Hey I'm red!";
p.style.color="red";

container.appendChild(p);

const h3=document.createElement("h3");
h3.textContent="I'm a blue h3";
h3.style.color="blue";
container.appendChild(h3);

const div1=document.createElement("div");
div1.classList.add("div1");
div1.style.border="2px solid black";
div1.style.backgroundColor="pink";

const h1=document.createElement("h1");
h1.textContent="I'm in a div";
div1.appendChild(h1);
const p1=document.createElement("p");
p1.textContent="ME TOO!";
div1.appendChild(p1);
container.appendChild(div1);
