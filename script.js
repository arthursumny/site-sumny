(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".mobile-nav-toggle");
  var navPanel = document.getElementById("mobile-nav-panel");
  var sidebarLinks = Array.prototype.slice.call(document.querySelectorAll(".index-link[href^='#']"));
  var mobileLinks = Array.prototype.slice.call(document.querySelectorAll(".mobile-nav-link[href^='#']"));
  var reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  function closeMobileNav() {
    if (!navToggle || !navPanel) return;
    navToggle.setAttribute("aria-expanded", "false");
    navPanel.classList.remove("is-open");
  }

  if (navToggle && navPanel) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      var nextState = !expanded;
      navToggle.setAttribute("aria-expanded", String(nextState));
      navPanel.classList.toggle("is-open", nextState);
    });

    // Fecha o menu ao clicar em qualquer link interno, externo ou de download dentro do painel
    navPanel.addEventListener("click", function (event) {
      var link = event.target.closest("a");
      if (link) {
        closeMobileNav();
      }
    });

    // Fecha com tecla Escape e devolve foco ao botão do menu
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        closeMobileNav();
        navToggle.focus();
      }
    });

    // Fecha ao clicar fora do cabeçalho
    document.addEventListener("click", function (event) {
      if (
        navToggle.getAttribute("aria-expanded") === "true" &&
        header &&
        !header.contains(event.target)
      ) {
        closeMobileNav();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 720) {
        closeMobileNav();
      }
    });
  }

  function getScrollOffset() {
    var headerHeight = header ? header.getBoundingClientRect().height : 64;
    return headerHeight + 24;
  }

  function scrollToHash(hash, updateHistory) {
    if (!hash || hash === "#") return;
    var targetId = hash.slice(1);
    var target = document.getElementById(targetId);
    if (!target) return;

    var top = target.getBoundingClientRect().top + window.pageYOffset - getScrollOffset();
    var behavior = reducedMotionQuery.matches ? "auto" : "smooth";

    window.scrollTo({
      top: Math.max(0, top),
      behavior: behavior
    });

    if (updateHistory && history.pushState) {
      history.pushState(null, "", hash);
    }
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a[href^='#']");
    if (!link) return;

    var hash = link.getAttribute("href");
    if (!hash || hash === "#" || link.classList.contains("skip-link")) return;

    var target = document.getElementById(hash.slice(1));
    if (!target) return;

    event.preventDefault();
    closeMobileNav();
    scrollToHash(hash, true);
  });

  // Compensa a altura do cabeçalho fixo ao abrir a página já com #âncora na URL
  window.addEventListener("load", function () {
    if (window.location.hash) {
      setTimeout(function () {
        scrollToHash(window.location.hash, false);
      }, 20);
    }
  });

  function setActiveSection(sectionId) {
    var targetHash = "#" + sectionId;

    sidebarLinks.forEach(function (link) {
      if (link.getAttribute("href") === targetHash) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    mobileLinks.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === targetHash);
    });
  }

  var trackedSections = sidebarLinks
    .map(function (link) {
      var id = link.getAttribute("href").slice(1);
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (trackedSections.length > 0) {
    var ticking = false;

    function updateCurrentSection() {
      var threshold = window.pageYOffset + getScrollOffset() + 48;
      var activeId = trackedSections[0].id;

      for (var i = 0; i < trackedSections.length; i++) {
        if (trackedSections[i].offsetTop <= threshold) {
          activeId = trackedSections[i].id;
        }
      }

      // Se chegou ao fim da página, marca a última seção
      if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 16) {
        activeId = trackedSections[trackedSections.length - 1].id;
      }

      setActiveSection(activeId);
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(updateCurrentSection);
          ticking = true;
        }
      },
      { passive: true }
    );

    updateCurrentSection();
  }
})();
