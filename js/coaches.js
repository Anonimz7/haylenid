/* ====== DAFTAR COACH ====== */
let activeCoachCategory = "semua";
function renderCoachSection(){
  selectOne("#coachTabs").innerHTML = COACH_FILTER_CATEGORIES.filter(([id])=>id==="semua"||COACHES.some(c=>c.isActive!==false&&c.category===id)).map(([id,l]) => `<button class="tab" aria-selected="${id===activeCoachCategory}" data-cc="${id}">${l}</button>`).join("");
  selectOne("#coachGrid").innerHTML = COACHES.filter(c=>c.isActive!==false&&(activeCoachCategory==="semua"||c.category===activeCoachCategory)).map(c => `
    <article class="coach-card">
      <div class="cphoto t-${c.tone||COLOR_TONES[COACHES.indexOf(c)%COLOR_TONES.length]}"><span aria-hidden="true">${c.initialsOverride||getInitials(c.name)}</span>${c.photo?`<img src="${c.photo}" alt="Foto ${c.name}" loading="lazy" onerror="this.remove()">`:""}</div>
      <h3>${c.name}</h3>
      <p class="clok"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#f91675" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>${c.poolName}</p>
    </article>`).join("");
}
selectOne("#coachTabs").addEventListener("click", e => {
  const b = e.target.closest("[data-cc]"); if(!b) return;
  activeCoachCategory = b.dataset.cc; renderCoachSection();
});
renderCoachSection();

