/* ====== DIALOG ====== */
let selectedProgram = null;
const registrationDialog = selectOne("#dlg");
function updateWhatsAppLink(){
  const nama = selectOne("#d-nama").value.trim(), usia = selectOne("#d-usia").value.trim(), o = getSelectedOption(selectedProgram);
  const lines = [`Halo ${CLUB_NAME}, saya ingin mendaftar program berikut:`,"",
    `Program: ${selectedProgram.name}`,
    `Usia program: ${selectedProgram.ageRange}`,
    `Paket: ${o.label}`,
    `Harga: ${formatRupiah(o.price)}`];
  if(nama) lines.push(`Nama peserta: ${nama}`);
  if(usia) lines.push(`Usia peserta: ${usia} tahun`);
  lines.push("","Mohon info jadwal yang tersedia dan langkah pendaftaran selanjutnya. Terima kasih.");
  selectOne("#dGo").href = buildWhatsAppUrl(lines.join("\n"));
}
function openRegistrationDialog(p){
  selectedProgram = p;
  const o = getSelectedOption(p);
  selectOne("#dSum").innerHTML = `<b>${p.name}</b><span>${p.format} · usia ${p.ageRange}</span><span>${o.label}</span><span>Harga <b>${formatRupiah(o.price)}</b></span>`;
  updateWhatsAppLink();
  if(registrationDialog.showModal) registrationDialog.showModal(); else registrationDialog.setAttribute("open","");
}
["d-nama","d-usia"].forEach(id => selectOne("#"+id).addEventListener("input", updateWhatsAppLink));
const closeRegistrationDialog = () => { if(registrationDialog.close) registrationDialog.close(); else registrationDialog.removeAttribute("open"); };
selectOne("#dClose").onclick = closeRegistrationDialog;
selectOne("#dCopy").onclick = async () => {
  const t = decodeURIComponent(selectOne("#dGo").href.split("?text=")[1]||""), b = selectOne("#dCopy");
  try{ await navigator.clipboard.writeText(t); b.textContent = "Tersalin"; }catch(_){ b.textContent = "Salin manual dari WhatsApp"; }
  setTimeout(()=>b.textContent="Salin pesan",2000);
};
registrationDialog.addEventListener("click", e => { if(e.target===registrationDialog) closeRegistrationDialog(); });
selectOne("#dGo").addEventListener("click", () => setTimeout(closeRegistrationDialog,150));

