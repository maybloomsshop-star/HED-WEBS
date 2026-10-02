document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});

document.addEventListener("dragstart", function (e) {
  e.preventDefault();
});

document.addEventListener("copy", function (e) {
  e.preventDefault();
});

document.addEventListener("cut", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  // Ctrl+C / Cmd+C
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c") {
    e.preventDefault();
  }

  // Ctrl+X / Cmd+X
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "x") {
    e.preventDefault();
  }

  // Ctrl+A / Cmd+A
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "a") {
    e.preventDefault();
  }
});
