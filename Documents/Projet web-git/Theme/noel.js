const dossierScript = document.currentScript.src;

function activerNoel() {
  if (document.getElementById("noel-css")) return;
  const link = document.createElement("link");
  link.id = "noel-css";
  link.rel = "stylesheet";
  link.href = new URL("css_noel.css", dossierScript).href;
  document.head.appendChild(link);
}

function desactiverNoel() {
  const link = document.getElementById("noel-css");
  if (link) link.remove();
}

function toggleNoel() {
  if (document.getElementById("noel-css")) {
    desactiverNoel();
    localStorage.setItem("noel", "off");
  } else {
    activerNoel();
    localStorage.setItem("noel", "on");
  }
}

if (localStorage.getItem("noel") === "on") {
  activerNoel();
}