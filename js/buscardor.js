const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Event listener para detectar cambios en el input
searchInput.addEventListener('search-input', () => {
  // Obtener el término de búsqueda
  const searchTerm = searchInput.value.toLowerCase().trim();
  
  // Filtrar los resultados según el término de búsqueda
  const filteredResults = getFilteredResults(searchTerm);
  
  // Mostrar los resultados en la lista
  displayResults(filteredResults);
});

// Función para obtener los resultados filtrados
function getFilteredResults(searchTerm) {
  // Aquí iría el código para obtener los resultados de una API o de una base de datos, por ejemplo.
  // En este ejemplo, simplemente se genera un array con algunos resultados de ejemplo.
  const results = [
    { id: 1, name: 'Producto 1' },
    { id: 2, name: 'Producto 2' },
    { id: 3, name: 'Producto 3' },
    { id: 4, name: 'Otro producto' },
    { id: 5, name: 'Producto de prueba' },
    { id: 6, name: 'Último producto' },
  ];
  
  return results.filter(result => {
    return result.name.toLowerCase().includes(searchTerm);
  });
}

// Función para mostrar los resultados en la lista
function displayResults(results) {
  searchResults.innerHTML = '';
  
  if (results.length === 0) {
    // Si no hay resultados, mostrar un mensaje
    searchResults.innerHTML = '<li>No se encontraron resultados</li>';
  } else {
    // Si hay resultados, crear un elemento <li> por cada resultado y añadirlo a la lista
    results.forEach(result => {
      const li = document.createElement('li');
      li.innerText = result.name;
      searchResults.appendChild(li);
});
  }
}