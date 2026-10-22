const STANDALONE_PAGES = ["rekrutmen","kerjasama","daftar-kolam","daftar-coach"];
let currentPageHash = "";
function navigateToPage(h){
  h = h || "beranda";
  const solo = STANDALONE_PAGES.includes(h);
  let nav = "beranda", target = null;
  if(h.startsWith("program")){
    const c = h.split("-")[1];
    if(AGE_CATEGORIES.some(x=>x[0]===c)){ activeProgramCategory = c; renderProgramAgeTabs(); renderProgramCards(); }
    nav = "program"; target = "program";
  } else if(["penjelasan","coach","faq"].includes(h)){ nav = "info"; target = h; }
  else if(h==="daftar-coach"){ nav = "daftar-coach"; }
  else if(solo){ nav = "tentang"; }
  selectAll(".page").forEach(p => p.classList.toggle("on", p.id === (solo ? "p-"+h : "p-beranda")));
  selectAll("nav [data-p]").forEach(a => a.classList.toggle("on", a.dataset.p === nav));
  selectAll(".has-sub").forEach(x=>{x.classList.remove("open"); selectOne("button",x).setAttribute("aria-expanded","false");});
  mobileMenu.classList.remove("open"); menuToggleButton.setAttribute("aria-expanded","false");
  const el = target && document.getElementById(target);
  if(el) el.scrollIntoView(); else window.scrollTo(0,0);
  currentPageHash = h;
}
/* Semua tautan internal ditangani di sini, jadi tetap jalan di pratinjau, iframe, atau file lokal */
document.addEventListener("click", e => {
  const a = e.target.closest('a[href^="#"]'); if(!a) return;
  const h = a.getAttribute("href").slice(1);
  e.preventDefault();
  if(!h) return;
  navigateToPage(h);
  try{ history.replaceState(null,"","#"+h); }catch(_){}
});
addEventListener("hashchange", () => { const h = location.hash.slice(1); if(h && h!==currentPageHash) navigateToPage(h); });
