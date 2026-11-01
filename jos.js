(function () {
  var courses = [
    { title: "Health and Medicine", text: "Medicine, Dentistry, Pharmacy, Nursing Sciences, and Public and Environmental Health.", meta: "5 faculties" },
    { title: "Science and Engineering", text: "Science, Mathematical Sciences, Engineering, Architecture, Geographical and Environmental Sciences, and Technological and Developmental Studies.", meta: "6 faculties" },
    { title: "Arts, Law and Society", text: "Arts, Law, Education, Economic and Social Studies, and Management Studies.", meta: "4 faculties and 1 school" },
    { title: "Agriculture and Animal Sciences", text: "Agriculture, Forestry, Animal Production, and Veterinary Medicine.", meta: "4 faculties" }
  ];

  var facilities = [
    { title: "Library", text: "Add opening hours, collection size and study spaces here.",
      art: '<svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Shelves of books"><rect width="320" height="240" fill="var(--surface-2)"/><g class="il-4"><rect x="30" y="62" width="260" height="6"/><rect x="30" y="122" width="260" height="6"/><rect x="30" y="182" width="260" height="6"/></g><g class="il-1"><rect x="40" y="30" width="14" height="32"/><rect x="58" y="36" width="12" height="26"/><rect x="92" y="28" width="16" height="34"/><rect x="128" y="34" width="12" height="28"/><rect x="236" y="32" width="14" height="30"/><rect x="58" y="86" width="22" height="36"/><rect x="102" y="82" width="14" height="40"/><rect x="120" y="78" width="16" height="44"/><rect x="210" y="86" width="14" height="36"/><rect x="50" y="146" width="14" height="36"/><rect x="134" y="142" width="16" height="40"/><rect x="204" y="148" width="14" height="34"/></g><g class="il-2"><rect x="74" y="32" width="14" height="30"/><rect x="112" y="38" width="12" height="24"/><rect x="144" y="28" width="16" height="34"/><rect x="254" y="36" width="14" height="26"/><rect x="40" y="90" width="14" height="32"/><rect x="84" y="84" width="14" height="38"/><rect x="190" y="88" width="16" height="34"/><rect x="262" y="92" width="14" height="30"/><rect x="68" y="140" width="16" height="42"/><rect x="88" y="150" width="14" height="32"/><rect x="154" y="146" width="14" height="36"/><rect x="222" y="140" width="16" height="42"/></g></svg>' },
    { title: "Sports grounds", text: "Add the sports and recreation facilities students can use here.",
      art: '<svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Basketball hoop and ball"><rect width="320" height="240" fill="var(--surface-2)"/><rect class="il-4" x="0" y="196" width="320" height="44"/><rect class="il-1" x="196" y="44" width="8" height="152"/><rect class="il-3" x="150" y="40" width="100" height="62" stroke="var(--ill-1)" stroke-width="3"/><rect class="il-3" x="184" y="68" width="32" height="26" stroke="var(--ill-1)" stroke-width="3"/><path class="il-line" d="M170 106h60l-8 28h-44Z M176 116l12 18M190 106l8 28M210 106l-8 28M224 116l-12 18"/><circle class="il-2" cx="96" cy="140" r="28"/><path class="il-line" d="M68 140h56M96 112v56M78 120c10 10 10 30 0 40M114 120c-10 10-10 30 0 40"/></svg>' },
    { title: "Canteen", text: "Add details about food options and opening hours here.",
      art: '<svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Pendant lamps over a table with bowls"><rect width="320" height="240" fill="var(--surface-2)"/><path class="il-line" d="M90 0v58M160 0v46M230 0v58"/><path class="il-1" d="M68 82a22 24 0 0 1 44 0Z"/><path class="il-2" d="M136 70a24 24 0 0 1 48 0Z"/><path class="il-1" d="M208 82a22 24 0 0 1 44 0Z"/><rect class="il-1" x="40" y="156" width="240" height="10" rx="3"/><rect class="il-1" x="70" y="166" width="8" height="60"/><rect class="il-1" x="242" y="166" width="8" height="60"/><path class="il-2" d="M96 156c0-24 16-32 32-32s32 8 32 32Z"/><path class="il-3" d="M178 156c0-20 12-26 26-26s26 6 26 26Z" stroke="var(--ill-1)" stroke-width="3"/></svg>' }
  ];

  function renderCourses(id) {
    document.getElementById(id).innerHTML = courses.map(function (c) {
      return '<article class="course-card"><h3>' + c.title + '</h3><p>' + c.text + '</p><span class="meta">' + c.meta + '</span></article>';
    }).join("");
  }
  function renderFacilities(id) {
    document.getElementById(id).innerHTML = facilities.map(function (f) {
      return '<article class="tile wide"><div class="art">' + f.art + '</div><h3>' + f.title + '</h3><p>' + f.text + '</p></article>';
    }).join("");
  }
  renderCourses("courses-home");
  renderCourses("courses-page");
  renderFacilities("fac-home");
  renderFacilities("fac-page");

  var routes = ["home", "about", "courses", "blog", "contact"];
  var links = document.querySelectorAll("[data-route]");
  var first = true;
  function route() { 
    var h = (location.hash || "").replace("#", "");
    if (routes.indexOf(h) === -1) h = "home";
    routes.forEach(function (r) {
      document.getElementById("page-" + r).hidden = (r !== h);
    });
    links.forEach(function (a) {
      if (a.getAttribute("data-route") === h) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    if (!first) window.scrollTo(0, 0);
    first = false;
  }
  window.addEventListener("hashchange", route);
  route();

  function wireForm(formId, noteId, msg) {
    var form = document.getElementById(formId);
    var note = document.getElementById(noteId);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { note.textContent = "Please fill in every field with a valid email address."; return; }
      note.textContent = msg;
      form.reset();
    });
  }
  wireForm("contact-form", "contact-note", "This sample form does not send messages yet, so nothing was delivered.");
  wireForm("comment-form", "comment-note", "This sample page does not store comments yet, so nothing was posted.");
})();
 
