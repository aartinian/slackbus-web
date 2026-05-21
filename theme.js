// Persisted theme toggle, shared across pages.
(function () {
  const KEY = "slackbus.theme";
  const saved = localStorage.getItem(KEY);
  const initial = saved || "light";
  document.documentElement.setAttribute("data-theme", initial);

  window.__toggleTheme = function () {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(KEY, next);
  };
})();
