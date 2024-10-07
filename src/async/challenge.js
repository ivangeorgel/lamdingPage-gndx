import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

// async: La palabra clave async se utiliza para declarar una función que manejará operaciones asíncronas. Las funciones marcadas con async automáticamente devuelven una promesa, por lo que puedes usar await dentro de ellas para pausar la ejecución hasta que una promesa se resuelva o rechace.

// (urlApi): Entre los paréntesis están los parámetros que la función toma. En este caso, urlApi es el parámetro de la función, lo que significa que cuando llames a la función fetchData, deberás pasarle una URL como argumento. Esta URL probablemente apunta a una API desde la cual se quieren obtener datos.

async function fetchData(urlApi) {
  // await: Esta palabra clave se usa dentro de funciones asíncronas (declaradas con async) para esperar que una promesa se resuelva antes de continuar con la siguiente línea de código. Aquí está "esperando" a que la función fetch() complete su operación y devuelva una respuesta
  
  // El valor devuelto por fetch() es una promesa que se resuelve en una "respuesta" (response), que contiene detalles sobre la solicitud, como el estado HTTP y los datos recibidos.
  
  const response = await fetch(urlApi);
  // const data: Aquí estamos declarando una variable llamada data utilizando const. Esta variable va a almacenar el valor que obtendremos al procesar la respuesta.
// await: La palabra clave await es parte de la sintaxis de las funciones asíncronas en JavaScript. Lo que hace es esperar a que se complete una promesa antes de continuar con el siguiente paso del código. En este caso, espera a que la función response.json() termine de ejecutarse antes de asignar el valor a la variable data.
// response.json(): Esta es una función integrada que pertenece al objeto response, el cual fue obtenido previamente de la llamada a fetch(). La función json() procesa el cuerpo de la respuesta HTTP y lo convierte de texto JSON a un objeto JavaScript para que sea más fácil de usar en el código.

// En resumen:
// Esta línea de código está esperando (gracias a await) que el cuerpo de la respuesta HTTP sea convertido en un objeto JavaScript (utilizando response.json()), y luego almacena ese objeto en la variable data.

  const data =  await response.json();
  // return: La palabra clave return se utiliza en las funciones de JavaScript para devolver un valor como resultado de la ejecución de la función. Cuando la función se llama, el valor que se pasa después de return es lo que obtendrás como resultado.

  // return: La palabra clave return se utiliza en las funciones de JavaScript para devolver un valor como resultado de la ejecución de la función. Cuando la función se llama, el valor que se pasa después de return es lo que obtendrás como resultado.
  
  // data: Esta es la variable que hemos definido previamente en el código. En este contexto, data contiene el objeto JavaScript que fue transformado desde un JSON en la línea anterior (const data = await response.json();).

  return data;
}

// (urlApi):

// Esta es la lista de parámetros de la función. La función recibe un argumento llamado urlApi, que se espera que sea una cadena de texto (string). urlApi contendrá la URL que se utilizará en las solicitudes fetch más adelante.


// try {:

  // La estructura try se utiliza para ejecutar un bloque de código que podría generar un error. Si el código dentro del bloque try lanza un error, este será capturado y manejado en el bloque catch que viene después.
  // Es común usar try...catch cuando se trabaja con funciones asíncronas porque, al manejar promesas, pueden ocurrir errores (como una solicitud HTTP fallida), y el bloque catch manejará esos errores.


const anotherFunction = async (urlApi) => {
  try {

    // await:
// La palabra clave await es utilizada para esperar a que una promesa se resuelva. En este caso, la función fetchData devuelve una promesa porque es asíncrona. Al usar await, el código se "detiene" en esta línea hasta que fetchData termine de ejecutarse y devuelva su valor.
// // Importante: Solo se puede usar await dentro de funciones marcadas con async.

// Resumen:
// Esta línea de código envía una solicitud asíncrona a la API para obtener una lista de productos. Una vez que la solicitud se resuelve, los productos se almacenan en la constante products para su posterior uso.


    const products = await fetchData(`${urlApi}/products`);

    // ${urlApi}/products/${products[0].id}: Esta es una template literal que genera dinámicamente la URL para obtener un producto individual. La URL se compone de:

    // urlApi: La URL base de la API, por ejemplo, https://api.escuelajs.co/api/v1.
// /products/: La ruta de la API para obtener productos específicos.
// products[0].id: Aquí se está accediendo al primer producto (products[0]) de la lista de productos obtenida previamente y se toma su id. Este id se usa para hacer una solicitud para ese producto en particular.
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

    console.log(products);
    console.log(product.title);
    console.log(category.name);

  } catch (error) {
    console.error(error);
  }
}

anotherFunction(API);