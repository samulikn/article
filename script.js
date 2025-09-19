const shareBtn = document.getElementById("sharebtn");
const shareIcon = document.getElementById("shareicon");
const shareTo = document.getElementById("shareto");
const triangle = document.getElementById("triangle");

// Show social media links
shareBtn.onclick = () => {
  shareTo.style.visibility = "visible";
  triangle.style.visibility = "visible";

  shareBtn.classList.add("sharebtn-active");
  shareIcon.classList.add("shareicon-active");
};

const removeActiveState = () => {
  shareTo.style.visibility = "hidden";
  triangle.style.visibility = "hidden";

  shareBtn.classList.remove("sharebtn-active");
  shareIcon.classList.remove("shareicon-active");
};

// Close sharing container on Esc button
document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    removeActiveState();
  }
});

// When the user clicks anywhere outside of the sharing content, close it
document.addEventListener("click", (e) => {
  const sharingVisibility = shareTo.style.visibility;
  if (
    !shareBtn.contains(e.target) &&
    !shareTo.contains(e.target) &&
    sharingVisibility === "visible"
  ) {
    removeActiveState();
  }
});
