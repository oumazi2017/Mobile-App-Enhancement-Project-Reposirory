document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const navList = document.querySelector('.nav-list');
  const foodDropdown = document.getElementById('foodDropdown');
  const dropbtn = foodDropdown && foodDropdown.querySelector('.dropbtn');
  const dropmenu = foodDropdown && foodDropdown.querySelector('.dropmenu');

  if(navToggle){
    navToggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('show');
    });
  }

  if(dropbtn){
    dropbtn.addEventListener('click', function(e){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      dropmenu.style.display = expanded ? 'none' : 'block';
      e.stopPropagation();
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', function(){
    if(dropmenu) dropmenu.style.display = 'none';
    if(dropbtn) dropbtn.setAttribute('aria-expanded','false');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // collapse mobile nav
        if(navList.classList.contains('show')) navList.classList.remove('show');
        if(navToggle) navToggle.setAttribute('aria-expanded','false');
      }
    });
  });
});
