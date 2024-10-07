// ████████████████████████████████████████████████████████████████

// INSTALE » npm i node-fech, para que esto funcionara

// ████████████████████████████████████████████████████████████████


// import
// ¿Qué es?: import es una palabra clave de JavaScript que se usa para traer o cargar funciones, objetos o variables que han sido exportadas desde otro archivo o módulo.
// // ¿Cómo funciona?: Cuando se utiliza import, se está diciendo que queremos acceder a algo (en este caso, fetch) desde otro archivo o módulo externo para poder usarlo en el archivo actual.

// fetch
// ¿Qué es?: fetch es el nombre de la función que estamos importando. En este caso, viene del módulo node-fetch.
// ¿Qué hace?: La función fetch se utiliza para hacer solicitudes HTTP (como obtener datos de una API). Básicamente, envía una solicitud a una URL y devuelve una promesa que se resuelve con la respuesta.

// from 'node-fetch'
// ¿Qué es?: La parte from 'node-fetch' indica de dónde estamos importando la función fetch.
// node-fetch es un paquete de npm (Node.js Package Manager) que proporciona una implementación de la API de fetch en entornos de Node.js. Esto es necesario porque fetch no está disponible de forma nativa en Node.js, aunque sí lo está en navegadores.

// import es la palabra clave para traer algo de otro lugar.
// fetch es la función específica que estás trayendo.
// from 'node-fetch' te dice de qué módulo o paquete estás trayendo la función fetch.


import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';


// Funcion que va a recibir como argumento la url que queremos llamar y esto me va a retornar el llamado de fetch
// Todo esto es una promesa asi que vamos a poder usar las palabras reservadas .then(), .cash() y .finally()


// (urlApi):
// Lo que está dentro de los paréntesis es un parámetro. En este caso, el parámetro es urlApi, que es una variable que actuará como un "marcador de posición" para cualquier valor que se pase cuando la función sea invocada.

function fetchData(urlApi) {

  // fetch es un método nativo de JavaScript (disponible en navegadores modernos y entornos como Node.js) que se utiliza para realizar solicitudes HTTP. Este método permite obtener recursos (datos) de un servidor. Generalmente, fetch se usa para hacer solicitudes GET (para obtener datos), pero también puede hacer otras como POST, PUT, etc.
  
  // En otras palabras, esta línea de código:
// Realiza una solicitud HTTP a la URL proporcionada.
// Devuelve una promesa para que el código que llame a la función pueda manejar la respuesta o el error de esa solicitud.
  
  return fetch(urlApi);
}

// fetchData:
// Es el nombre de la función que se ha definido previamente en el código. La función fetchData toma como parámetro una URL (urlApi), realiza una solicitud HTTP utilizando fetch, y devuelve una promesa que contiene el resultado de esa solicitud

// ${API}/products:

// Este es el argumento que se le pasa a la función fetchData. Es una plantilla de cadena o template literal en JavaScript. Se usan las comillas invertidas (`) para crear una cadena de texto dinámica.
// ${API} es una interpolación que inserta el valor de la variable API en esa posición dentro de la cadena. En este caso, se asume que API tiene un valor que representa una URL base, como por ejemplo:

// Entonces, ${API}/products construye una URL completa al concatenar la variable API con "/products", lo que resultaría en:
// rust
// Copiar código
// // 'https://api.escuelajs.co/api/v1/products'

// Función invocada:
// Cuando escribes fetchData(${API}/products), estás llamando a la función fetchData y pasándole la URL generada como argumento. La función entonces utilizará esta URL para hacer una solicitud HTTP a la API para obtener datos relacionados con productos.

// Lo que hace:
// La función fetchData enviará una solicitud HTTP GET a la URL 'https://api.escuelajs.co/api/v1/products'. Dado que fetchData devuelve una promesa, el código que llame a esta función (por ejemplo, con .then()) puede manejar la respuesta de la solicitud cuando se complete.

fetchData(`${API}/products`)

// .then()
// En este caso, la promesa anterior es la llamada a la función fetchData, que devuelve una promesa que contiene una respuesta HTTP.

// response:
// Dentro de .then(), el valor que se pasa es el resultado de la promesa resuelta. Aquí, response representa el objeto de respuesta HTTP devuelto por la función fetch() dentro de fetchData. Este objeto contiene información sobre la solicitud HTTP, incluyendo los datos, el estado de la respuesta, encabezados, etc.

// response.json():
// El objeto response tiene varios métodos, uno de los cuales es .json(). Este método se utiliza para convertir la respuesta HTTP (que está en formato JSON, o texto en formato de objeto) en un objeto JavaScript.
// El formato JSON es un estándar para el intercambio de datos que representa objetos y matrices de manera textual, y .json() facilita convertirlo a un formato que JavaScript puede utilizar fácilmente.
// Nota: .json() también devuelve una promesa, porque la conversión de datos podría llevar algún tiempo, especialmente si los datos son grandes o complejos. Eso es porque procesar la respuesta en JSON puede no ser instantáneo.

// Lo que hace en conjunto:
// Cuando la promesa de fetchData se resuelve (es decir, cuando se completa la solicitud HTTP y llega la respuesta), el objeto de la respuesta pasa a través de .then().
// Luego, response.json() convierte esa respuesta en JSON legible por JavaScript (un objeto o arreglo).
// Como .json() devuelve otra promesa, la cadena de promesas continúa. El siguiente .then() manejará el objeto ya convertido.

  .then(response => response.json())
  // products es el argumento que recibe la función. En este caso, será el resultado que devuelve la promesa anterior. Es decir, la promesa anterior devolvió un array de productos (probablemente en formato JSON después de ser procesado con response.json()).

  .then(products => {
    console.log(products);
    // La palabra clave return se utiliza para devolver un valor o una expresión desde una función. En este caso, está devolviendo el resultado de la llamada a fetchData(), que es otra promesa.
    
    // uando llamas a fetchData(), envías una solicitud a una URL de la API y devuelves una promesa con la respuesta.
    // /products/${products[0].id}: Aquí estás accediendo al primer producto de la lista de productos que recibiste en la promesa anterior. products[0] es el primer objeto en el array products, y con .id obtienes el id de ese primer producto.

    // Resumen:
// Objetivo: Realizas una nueva solicitud para obtener detalles específicos del primer producto (products[0]) en la lista de productos que recibiste en la promesa anterior.
// Encadenamiento: Al devolver fetchData, esta promesa se encadena con las promesas anteriores, lo que permite que el flujo de la cadena continúe ejecutándose de manera asíncrona.

    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then(response => response.json())
  .then(product => {
    console.log(product.title);
    // Resumen:
// Objetivo: Realizas una nueva solicitud a la API para obtener detalles de la categoría de un producto específico (product.category.id).
// Encadenamiento: El return permite que la promesa devuelta por fetchData se encadene con las promesas anteriores, manteniendo el flujo asíncrono.
// URL dinámica: Utilizas una template literal para construir una URL dinámica, que incluye el ID de la categoría obtenida del producto anterior.
// Es como si primero obtuvieras información sobre un producto, y luego, con esa información, pidieras detalles sobre la categoría a la que pertenece el producto.

    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then(response => response.json())
  .then(category => {
    console.log(category.name);
  })
  // .catch(err => console.log(err)): Se encarga de capturar y manejar errores, mostrando el error en la consola si ocurre.
  .catch(err => console.log(err))
  // .finally(() => console.log('Finally')): Se ejecuta al final de la cadena de promesas, independientemente de si hubo éxito o error, imprimiendo 'Finally' en la consola.
  .finally(() => console.log('Finally'));
