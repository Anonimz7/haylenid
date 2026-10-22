/* header: tambah efek blur saat di-scroll */
(function(){
  const hd = document.querySelector("header.top"); if(!hd) return;
  let tick = false;
  const upd = () => { hd.classList.toggle("scrolled", (window.scrollY||document.documentElement.scrollTop) > 8); tick = false; };
  addEventListener("scroll", () => { if(!tick){ tick = true; requestAnimationFrame(upd); } }, {passive:true});
  upd();
})();
