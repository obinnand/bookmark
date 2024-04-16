const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("meun-btn");
const meun = document.getElementById("menu");
const logo = document.getElementById("logo");

// tabs menu event listener

tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  //  deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });
  //   hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  //   Activate a new tab and panel based on the target
  e.target.classList.add("border-softRed", "border-b-4", "md:border-b-0");
  const clessString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(clessString)[0]
    .classList.remove("hidden");
}

// Hamburger button listener
btn.addEventListener("click", navToggle);
function navToggle() {
  btn.classList.toggle("open");
  meun.classList.toggle("flex");
  meun.classList.toggle("hidden");
}
