(() => {
  const currentYear = document.getElementById('current-year');
  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }

  const menuButton = document.querySelector('.menu-button');
  const navigation = document.getElementById('primary-navigation');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    navigation.addEventListener('click', (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        navigation.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const version = document.querySelector('meta[name="build-version"]')?.content?.trim();
  const buildDate = document.querySelector('meta[name="build-date"]')?.content?.trim();
  const commit = document.querySelector('meta[name="build-commit"]')?.content?.trim();
  const buildId = document.getElementById('build-id');

  if (buildId && version) {
    const parts = [`v${version}`];
    if (buildDate) parts.push(buildDate.replaceAll('-', ''));
    if (commit) parts.push(commit.slice(0, 7));
    if (parts.length === 1) parts.push('TEMPLATE');
    buildId.textContent = parts.join('_');
  }
})();
