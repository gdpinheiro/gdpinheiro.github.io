export async function getCategories() {
  const categories = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  );
  return categories.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!query) {
    const categoriesAndQuery = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}`,
    );
    return categoriesAndQuery.json();
  }

  const categoriesAndQuery = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}&q=$${query}`,
  );
  return categoriesAndQuery.json();
}
