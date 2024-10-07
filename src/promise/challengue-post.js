import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

// (urlApi, data):

// Estas son las entradas o parámetros de la función. Una función puede recibir uno o más parámetros que actúan como variables dentro de la función.
// urlApi: Es el primer parámetro, que representa la URL a la que se quiere enviar la solicitud. Al llamar a la función, el valor de esta variable será una URL, por ejemplo, https://api.escuelajs.co/api/v1/products.
// data: Es el segundo parámetro, que representa los datos que se van a enviar. Estos datos serán transformados en JSON antes de enviarse a la API

function postData(urlApi, data) {
    // response:
// Este es el nombre de la variable. Se usa para almacenar el valor devuelto por la función fetch(). Es decir, response contendrá el resultado de la solicitud HTTP que se está realizando.
  const response = fetch(urlApi, {
    // Esta es una propiedad del objeto de configuración que le dice a fetch() qué tipo de solicitud HTTP debe hacer.
    method: 'POST',
// Esta propiedad indica cómo se gestionan las solicitudes a diferentes dominios (cross-origin).
// 'cors' (Cross-Origin Resource Sharing) es una configuración que permite que un sitio web solicite recursos desde un dominio diferente al que sirvió la página web. Esta opción es común cuando se trabaja con APIs públicas o de terceros.
    mode: 'cors',
    // Esta propiedad controla si se deben enviar las cookies o credenciales de autenticación junto con la solicitud.
    // 'same-origin' significa que las credenciales solo se enviarán si la solicitud es al mismo dominio de donde proviene la página. Es una medida de seguridad que protege las credenciales cuando se hacen solicitudes a diferentes orígenes.
    credentials: 'same-origin',
// headers son metadatos que se envían con la solicitud HTTP para proporcionar información adicional al servidor.
// 'Content-Type': 'application/json' especifica que el cuerpo de la solicitud estará en formato JSON (JavaScript Object Notation). Es importante cuando se están enviando datos al servidor, ya que este necesita saber en qué formato están los datos para procesarlos correctamente.
    headers: {
      'Content-Type': 'application/json'
    },
    // body:
// body es una propiedad del objeto de configuración que le dice a la función fetch() qué datos se deben enviar en el cuerpo de la solicitud HTTP.
// En una solicitud POST (como es el caso), el cuerpo contiene los datos que estás enviando al servidor. Es como el "contenido" que quieres enviar, similar a llenar un formulario y enviarlo

// JSON.stringify(data):
// JSON.stringify() es un método en JavaScript que convierte un objeto JavaScript (en este caso, el objeto data) en una cadena de texto en formato JSON.
// JSON (JavaScript Object Notation) es un formato de datos que se usa comúnmente para enviar y recibir datos en aplicaciones web. Los servidores suelen entender los datos en formato JSON, por lo que, antes de enviar el objeto data, es necesario convertirlo en una cadena de texto en este formato.

// Imagina que estás enviando una carta por correo:

// La dirección es el URL (el servidor donde estás enviando los datos).
// El cuerpo de la carta es la información que estás enviando (en este caso, los datos del producto).
// El body es el contenido real que estás enviando al servidor. En este caso, el contenido que estás enviando es el objeto data, que tiene información sobre un producto


    body: JSON.stringify(data)
  });
  return response;
}

// data: Es el nombre de la variable que contiene un objeto.
// {}: Indica que el valor de la variable data es un objeto literal, que es simplemente una estructura que organiza la información en pares clave-valor.
const data = {
  "title": "212",
  "price": 212,
  "description": "A description",
  "categoryId": 1,
  "images": [
    "https://placeimg.com/640/480/any"
  ]
}

// La función postData se encarga de hacer una solicitud HTTP POST al servidor, enviando ciertos datos que especificas.

// Resumen
// La línea postData(${API}/products, data) llama a la función postData y le pasa dos argumentos:
// La URL donde enviar los datos (https://api.escuelajs.co/api/v1/products).
// El objeto data, que contiene la información del nuevo producto a enviar.
// En resumen, esta línea inicia el proceso de enviar los datos del producto al servidor mediante una solicitud HTTP POST.

postData(`${API}/products`, data)
// response:
// El parámetro response dentro de la función flecha (response => ...) representa la respuesta que el servidor envía después de que la solicitud POST se completa.
// Este response es un objeto que contiene información sobre la respuesta, como el estado (status), los encabezados, y el cuerpo (que en este caso es un JSON).
  
// response.json():
// La propiedad json() es un método del objeto response.
// Lo que hace es convertir el cuerpo de la respuesta (response body) de la solicitud HTTP en un objeto JavaScript, ya que el cuerpo de la respuesta viene en formato JSON.
// Cuando llamas a response.json(), estás extrayendo los datos en formato JSON y transformándolos en un objeto para poder trabajar con ellos fácilmente en tu código.

// Resumen
// La línea then(response => response.json()) hace lo siguiente:

// Cuando se resuelve la promesa de postData, recibe la respuesta del servidor (response).
// Luego, convierte el cuerpo de esa respuesta de formato JSON a un objeto JavaScript usando response.json(), para que puedas acceder a sus propiedades en los siguientes pasos.
// Así, el JSON que contiene los datos del servidor se transforma en un formato que puedes utilizar en tu aplicación.


  .then(response => response.json())
  // data:
// data es el nombre del parámetro que recibe los datos que han sido convertidos a un objeto JavaScript por la llamada a response.json() en el .then anterior.
// Este objeto data contiene los detalles de la respuesta enviada por el servidor, que puede incluir la información del producto que acabas de crear.
  

  .then(data => console.log(data));