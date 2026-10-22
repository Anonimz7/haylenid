/* ====== COACH ====== */
/* ====== DAFTAR KOLAM ====== */
selectOne("#kolamGrid").innerHTML = KOLAM.filter(pool=>pool.isActive!==false).map(pool => `
  <article class="card listcard">
    <div class="kphoto"><div class="pool" aria-hidden="true"><i style="top:25%"></i><i style="top:50%"></i><i style="top:75%"></i></div>${pool.photo?`<img src="${pool.photo}" alt="Foto ${pool.name}" loading="lazy" onerror="this.remove()">`:""}</div>
    <h3>${pool.name}</h3>
    <div class="meta"><span><b>Kolam</b> · ${pool.sizeAndDepth}</span><span><b>Jam</b> · ${pool.openingHours}</span><span><b>Alamat</b> · ${pool.address}</span></div>
  </article>`).join("");

