/* ====== RINGKAS DI HP: ketuk untuk buka detail ====== */
document.addEventListener("click", e => {
  const t = e.target.closest(".x-tog");
  if(t){ const o = t.closest(".xp").classList.toggle("open"); t.textContent = o ? "Tutup" : t.dataset.l; return; }
  const lv = e.target.closest(".lv"); if(lv) lv.classList.toggle("open");
});

