(async function () {
  const style = document.createElement("style");
  style.textContent = `
  *{margin:0;padding:0;box-sizing:border-box;font-family:"Satoshi",system-ui,sans-serif}
  body{height:100vh;display:flex;justify-content:center;align-items:flex-end}
  .mobile-nav{position:fixed;bottom:28px;left:50%;transform:translateX(-50%);width:92%;max-width:400px;background:rgba(255,255,255,0.75);backdrop-filter:blur(22px)saturate(180%);border-radius:28px;display:flex;justify-content:space-around;align-items:center;padding:14px 14px;border:1px solid rgba(255,255,255,0.5);box-shadow:0 12px 35px rgba(0,0,0,0.12);transition:all 0.4s ease;animation:fadeInUp 0.8s ease-out}
  @keyframes fadeInUp{0%{transform:translate(-50%,40px);opacity:0}100%{transform:translate(-50%,0);opacity:1}}
  .nav-item{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;color:rgba(0,0,0,0.6);text-decoration:none;font-size:13px;font-weight:500;gap:6px;border-radius:16px;position:relative;transition:all 0.3s ease;padding:10px 0}
  .nav-item i{font-size:1.6rem;transition:all 0.3s ease}
  .nav-item span{letter-spacing:0.03em;transition:all 0.3s ease}
  .nav-item.active{transform:translateY(-3px);color:#333;font-weight:600}
  .nav-item.active i{background:linear-gradient(135deg,#7dc242,#4dc4e0);-webkit-background-clip:text;-webkit-text-fill-color:transparent;filter:drop-shadow(0 3px 8px rgba(77,196,224,0.4));transform:scale(1.1)}
  .nav-item.active::after{content:"";position:absolute;bottom:-6px;width:36px;height:4px;border-radius:2px;background:linear-gradient(135deg,#7dc242,#4dc4e0);box-shadow:0 0 10px rgba(77,196,224,0.5);animation:glow 2s infinite}
  @keyframes glow{0%{opacity:0.8;transform:scaleX(0.9)}50%{opacity:1;transform:scaleX(1)}100%{opacity:0.8;transform:scaleX(0.9)}}
  .nav-item:hover{transform:translateY(-2px);color:rgba(0,0,0,0.85)}
  .nav-item:hover i{transform:scale(1.1)}
  .nav-item:active{transform:scale(0.96);opacity:0.9}
  @media(max-width:400px){.nav-item span{font-size:0.75rem}.nav-item i{font-size:1.5rem}}
  @media(max-width:340px){.nav-item span{display:none}}
  `;
  document.head.appendChild(style);

  const nav = document.createElement("nav");
  nav.className = "mobile-nav";
  nav.innerHTML = `
    <a href="#" class="nav-item active">
      <i class="bx bx-map-alt"></i>
      <span>State Profile</span>
    </a>
    <a href="#" class="nav-item">
      <i class="bx bx-map"></i>
      <span>Districts</span>
    </a>
    <a href="#" class="nav-item">
      <i class="bx bx-trophy"></i>
      <span>Top Destinations</span>
    </a>
  `;
  document.body.appendChild(nav);

  const link1 = document.createElement("link");
  link1.rel = "stylesheet";
  link1.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
  document.head.appendChild(link1);

  const link2 = document.createElement("link");
  link2.href = "https://fonts.cdnfonts.com/css/satoshi";
  link2.rel = "stylesheet";
  document.head.appendChild(link2);

  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      navItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
})();
