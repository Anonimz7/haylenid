/* ====== PROGRAM ====== */
const selectedOptionIndexByProgram = {}; PROGRAMS.forEach(p => selectedOptionIndexByProgram[p.id] = 0);
let activeProgramCategory = "toddler";
const getSelectedOption = p => p.options[selectedOptionIndexByProgram[p.id]];
const formatPricePerSession = o => { const n = parseInt(o.label,10); return n>1 ? `Setara ${formatRupiah(Math.round(o.price/n))} per pertemuan` : ""; };

function renderProgramAgeTabs(){
  selectOne("#tabs").innerHTML = AGE_CATEGORIES.map(([id,l,age]) => `<button class="tab" role="tab" aria-selected="${id===activeProgramCategory}" data-cat="${id}">${l} <small>${age}</small></button>`).join("");
  const c = AGE_CATEGORIES.find(x=>x[0]===activeProgramCategory);
  selectOne("#ageNote").textContent = `${c[1]} · usia ${c[2].replace(" th"," tahun")}`;
}
function renderProgramCards(){
  selectOne("#progGrid").innerHTML = PROGRAMS.filter(p=>p.category===activeProgramCategory).map(p => `
    <article class="card prog" data-id="${p.id}">
      <span class="tag t-${p.tone}">${p.format} · ${p.ageRange}</span>
      <h3>${p.name}</h3>
      <p class="desc">${p.description||""}</p>
      ${p.options.length>1
        ? `<div class="opts" role="group" aria-label="Pilih paket">${p.options.map((o,i)=>`<button type="button" class="opt" data-opt="${i}" aria-pressed="${i===selectedOptionIndexByProgram[p.id]}">${o.label.replace(" Pertemuan","").replace(" / 1 Bulan"," / bulan")}</button>`).join("")}</div>`
        : ``}
      <div class="total"><span class="term">${getSelectedOption(p).label}</span><strong>${formatRupiah(getSelectedOption(p).price)}</strong></div>
      <p class="per">${formatPricePerSession(getSelectedOption(p))}</p>
      <button class="cta" data-pick="${p.id}">Daftar Paket Ini</button>
    </article>`).join("");
}
selectOne("#tabs").addEventListener("click", e => {
  const b = e.target.closest("[data-cat]"); if(!b) return;
  navigateToPage("program-" + b.dataset.cat);
  try{ history.replaceState(null,"","#program-"+b.dataset.cat); }catch(_){}
});
selectOne("#progGrid").addEventListener("click", e => {
  const card = e.target.closest(".prog"); if(!card) return;
  const p = PROGRAMS.find(x=>x.id===card.dataset.id);
  const ob = e.target.closest("[data-opt]");
  if(ob){
    selectedOptionIndexByProgram[p.id] = +ob.dataset.opt;
    selectAll("[data-opt]",card).forEach(x=>x.setAttribute("aria-pressed", x===ob));
    selectOne(".term",card).textContent = getSelectedOption(p).label;
    selectOne(".total strong",card).textContent = formatRupiah(getSelectedOption(p).price);
    selectOne(".per",card).textContent = formatPricePerSession(getSelectedOption(p));
    return;
  }
  if(e.target.closest("[data-pick]")) openRegistrationDialog(p);
});

