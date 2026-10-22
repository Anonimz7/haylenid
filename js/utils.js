/* ====== UTIL ====== */
const selectOne = (s,r=document)=>r.querySelector(s);
const selectAll = (s,r=document)=>[...r.querySelectorAll(s)];
const formatRupiah = n => "Rp" + n.toLocaleString("id-ID");
const buildWhatsAppUrl = text => "https://wa.me/" + ADMIN_WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
const generalInquiryMessage = `Halo ${CLUB_NAME}, saya ingin bertanya tentang program renang.`;
["waFloat","waFoot"].forEach(id => selectOne("#"+id).href = buildWhatsAppUrl(generalInquiryMessage));

