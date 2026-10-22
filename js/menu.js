/* ====== MENU & ROUTER ====== */
const mobileMenu = selectOne("#menu"), menuToggleButton = selectOne("#burger");
menuToggleButton.onclick = () => { const o = mobileMenu.classList.toggle("open"); menuToggleButton.setAttribute("aria-expanded",o); };
selectAll(".has-sub > button").forEach(b => b.addEventListener("click", e => {
  const li = b.parentElement, was = li.classList.contains("open");
  selectAll(".has-sub").forEach(x=>x.classList.remove("open")); if(!was) li.classList.add("open");
  b.setAttribute("aria-expanded", !was); e.stopPropagation();
}));
document.addEventListener("click", () => selectAll(".has-sub").forEach(x=>x.classList.remove("open")));
document.addEventListener("keydown", e => { if(e.key==="Escape"){ selectAll(".has-sub").forEach(x=>x.classList.remove("open")); mobileMenu.classList.remove("open"); } });

