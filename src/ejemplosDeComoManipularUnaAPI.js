
//██████████████████████ EJEMPLO 1 ███████████████████████████


// // URL de la API
// const apiURL = 'https://api.agify.io/?name=michael';

// // Hacemos la solicitud a la API
// fetch(apiURL)
//   .then(response => response.json())  // Convertimos la respuesta en un objeto JSON
//   .then(data => console.log(data))    // Mostramos los datos recibidos en la consola
//   .catch(error => console.error('Error:', error)); // Capturamos errores si ocurren



//██████████████████████ EJEMPLO 2 ███████████████████████████


// URL de la API a la que enviamos los datos
const apiURL = 'https://jsonplaceholder.typicode.com/posts';

// Datos que vamos a enviar a la API
const postData = {
  title: 'Mi primer post',
  body: 'Este es el contenido de mi post',
  userId: 1
};

// Hacemos la solicitud POST a la API
fetch(apiURL, {
  method: 'POST',                     // Usamos el método POST
  headers: {
    'Content-Type': 'application/json' // Indicamos que enviamos datos en formato JSON
  },
  body: JSON.stringify(postData)      // Convertimos los datos a formato JSON
})
  .then(response => response.json())   // Convertimos la respuesta en un objeto JSON
  .then(data => console.log(data))     // Mostramos los datos recibidos
  .catch(error => console.error('Error:', error)); // Capturamos errores



//██████████████████████ EJEMPLO 3 ███████████████████████████


// Función para obtener la edad promedio de una persona dado un nombre
function getAgeByName(name) {
    const apiURL = `https://api.agify.io/?name=${name}`;
  
    fetch(apiURL)
      .then(response => response.json()) // Convertimos la respuesta a JSON
      .then(data => console.log(`La edad promedio de ${name} es: ${data.age}`))  // Mostramos los datos
      .catch(error => console.error('Error:', error));  // Capturamos errores
  }
  
  // Llamamos a la función con un nombre
  getAgeByName('John');
  getAgeByName('Laura');
  