async renderPage() {
  const routeName = getActiveRoute();
  const route = routes[routeName];
 
  // Get page instance
  const page = route();
 
  this.#content.innerHTML = await page.render();
  await page.afterRender();
}