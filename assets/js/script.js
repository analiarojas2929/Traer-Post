// Definir una función asincrónica para obtener los posts
async function getPosts() {
    try {
      // Realizar la petición a la API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      // Verificar si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error('Error en la petición a la API');
      }
  
      // Parsear la respuesta a JSON
      const posts = await response.json();
  
      // Obtener el contenedor en el cual se mostrarán los posts
      const postContainer = document.getElementById('post-data');
  
      // Crear una lista desordenada para mostrar los posts
      const ul = document.createElement('ul');
  
      // Iterar sobre cada post y crear un elemento <li> para cada uno
      posts.forEach(post => {
        const li = document.createElement('li');
        // Envolver el título en una etiqueta <b> antes del texto
        li.innerHTML = `<b>${post.title}:</b> ${post.body}`;
        ul.appendChild(li);
      });
  
      // Limpiar el contenedor antes de agregar nuevos datos
      postContainer.innerHTML = '';
      // Agregar la lista al contenedor
      postContainer.appendChild(ul);
  
    } catch (error) {
      // Manejar cualquier error que ocurra durante la petición
      console.error('Ha ocurrido un error:', error);
      document.getElementById('post-data').textContent = 'Error al obtener los posts. Intenta nuevamente.';
    }
  }
  