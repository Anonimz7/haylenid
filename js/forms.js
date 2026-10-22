/* ====== FORMS → WA ====== */
function showWhatsAppMessagePreview(formId, text){
  const f = selectOne("#"+formId);
  let box = selectOne(".sendbox", f);
  if(!box){ box = document.createElement("div"); box.className = "sendbox"; f.appendChild(box); }
  box.innerHTML = `<b>Pesan siap dikirim</b><textarea readonly rows="7">${text.replace(/&/g,"&amp;").replace(/</g,"&lt;")}</textarea>
    <div class="row"><a class="cta" target="_blank" rel="noopener" href="${buildWhatsAppUrl(text)}">Buka WhatsApp</a><button class="cta ghost" type="button" data-copy>Salin pesan</button></div>
    <small>WhatsApp tidak terbuka? Salin pesan, kirim manual ke admin.</small>`;
  selectOne("[data-copy]",box).onclick = async ev => {
    const btn = ev.currentTarget, ta = selectOne("textarea",box);
    try{ await navigator.clipboard.writeText(text); btn.textContent = "Tersalin"; }
    catch(_){ ta.select(); try{ document.execCommand("copy"); btn.textContent = "Tersalin"; }catch(__){ btn.textContent = "Pilih teks lalu salin"; } }
    setTimeout(()=>btn.textContent="Salin pesan",2000);
  };
  box.scrollIntoView({block:"nearest"});
}
const submitCoachApplication = () => {
  const v = id => selectOne("#"+id).value.trim();
  showWhatsAppMessagePreview("formCoach", [`Halo ${CLUB_NAME}, saya ingin melamar sebagai coach.`,"",
    `Nama: ${v("rc-nama")}`,`Pengalaman mengajar: ${v("rc-exp")} tahun`,
    `Domisili: ${v("rc-kota")||"-"}`,`Sertifikasi: ${v("rc-sert")||"-"}`,
    `Catatan: ${v("rc-note")||"-"}`,"","Mohon info tahap seleksi selanjutnya. Terima kasih."].join("\n"));
};
const submitPartnershipRequest = () => {
  const v = id => selectOne("#"+id).value.trim();
  showWhatsAppMessagePreview("formKerja", [`Halo ${CLUB_NAME}, kami ingin mengajukan kerja sama.`,"",
    `Instansi/komunitas: ${v("kj-inst")}`,`Kontak: ${v("kj-nama")}`,
    `Perkiraan peserta: ${v("kj-jml")}`,`Jenis kerja sama: ${selectOne("#kj-jenis").value}`,
    `Kebutuhan: ${v("kj-note")||"-"}`,"","Mohon info proposal dan langkah selanjutnya. Terima kasih."].join("\n"));
};
/* Tombol biasa (bukan submit) agar tetap jalan di pratinjau yang memblokir pengiriman formulir */
const FORM_SUBMIT_HANDLERS = {formCoach:submitCoachApplication, formKerja:submitPartnershipRequest};
function validateAndSubmitForm(id){
  const f = selectOne("#"+id), bad = selectAll("[required]",f).find(i=>!i.value.trim());
  if(bad){ bad.focus(); bad.style.borderColor = "#E5484D"; setTimeout(()=>bad.style.borderColor="",1800); return; }
  FORM_SUBMIT_HANDLERS[id]();
}
selectAll("[data-send]").forEach(b => b.addEventListener("click", () => validateAndSubmitForm(b.dataset.send)));
selectAll("form").forEach(f => {
  f.addEventListener("submit", e => e.preventDefault());
  f.addEventListener("keydown", e => { if(e.key==="Enter" && e.target.tagName==="INPUT"){ e.preventDefault(); validateAndSubmitForm(f.id); } });
});

