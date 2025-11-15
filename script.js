const shareBtn = document.getElementById("sharebtn");
const shareIcon = document.getElementById("shareicon");
const shareTo = document.getElementById("shareto");
const triangle = document.getElementById("triangle");

function addElementVisibility(elements = [], value) {
  elements.forEach((element) => {
    eval(`${element}.style.visibility = "${value}"`);
  });
}

function modifyElementClasses(element, operation, classes = []) {
  const classList = classes.join("','");
  eval(`${element}.classList.${operation}('${classList}')`);
}

// Show social media links
shareBtn.onclick = () => {
  addElementVisibility(["shareTo", "triangle"], "visible");
  modifyElementClasses("shareBtn", "add", ["sharebtn-active"]);
  modifyElementClasses("shareIcon", "add", ["shareicon-active"]);
};

const hideSocialMediaLinks = () => {
  addElementVisibility(["shareTo", "triangle"], "hidden");
  modifyElementClasses("shareBtn", "remove", ["sharebtn-active"]);
  modifyElementClasses("shareIcon", "remove", ["shareicon-active"]);
};

// Close sharing container on Esc button
document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    hideSocialMediaLinks();
  }
});

// When the user clicks anywhere outside of the sharing content, close social media links
document.addEventListener("click", (e) => {
  const sharingVisibility = shareTo.style.visibility;
  if (
    !shareBtn.contains(e.target) &&
    !shareTo.contains(e.target) &&
    sharingVisibility === "visible"
  ) {
    hideSocialMediaLinks();
  }
});
