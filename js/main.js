renderProgramAgeTabs(); renderProgramCards();
let initialPageHash = ""; try{ initialPageHash = location.hash.slice(1); }catch(_){}
navigateToPage(initialPageHash);
