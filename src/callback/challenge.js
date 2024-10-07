
/*
█████████████████████████████████████████████████████████████████████████

Aqui para usar esto instalamos » npm i XMLHTTPRequest (pero en minuscula)

█████████████████████████████████████████████████████████████████████████

*/
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

// fetchData » Es sollo el nombre de la funcion

// Se crea fetchData y se le pasan dos parametros
// urlApi » Este valor es la URL o dirección a la que la función fetchData realizará una solicitud para obtener datos.
// Se utiliza como una variable dentro de la función, que contendrá la URL del API que se va a llamar. Es decir, será el enlace donde se encuentran los datos.

// callback » Es una función que se pasa como argumento y que se ejecutará cuando la solicitud a la API se haya completado (ya sea con éxito o con error).
// Este es un ejemplo de callback o función de retorno, lo que significa que, una vez que fetchData termina su tarea, ejecutará esta función para notificar o manejar el resultado.
// se ejecutará cuando los datos sean recibidos o si hay un error.

function fetchData(urlApi, callback) {
  // xhttp » es una variable creada por el profe
  // como una abreviatura de "XMLHttpRequest", el objeto que va a contener, y sugiere que esta variable manejará una solicitud HTTP.
  
  // = Asigna un valor a la variable que está a su izquierda. En este caso, se le está asignando el valor de una nueva instancia del objeto XMLHttpRequest.

  // new » La palabra clave new se usa para crear una nueva instancia de un objeto en JavaScript

// Cuando llamamos a new XMLHttpRequest(), estamos creando una nueva solicitud HTTP que podemos usar para conectarnos a un servidor.
// Esto significa que cada vez que quieras hacer una solicitud HTTP para obtener datos de una API, necesitas crear una nueva instancia de XMLHttpRequest. 
  
// XMLHttpRequest » es un objeto incorporado en JavaScript que permite hacer solicitudes HTTP para obtener datos de un servidor. 
// XMLHttpRequest » permite que tu código interactúe con APIs o servidores, enviando solicitudes GET, POST, u otros métodos, y recibiendo respuestas. 

// (): Los paréntesis indican que estamos llamando a un constructor. En este caso, estamos creando una nueva instancia del objeto XMLHttpRequest.

let xhttp = new XMLHttpRequest();

// xhttp es la variable que declaraste anteriormente y que contiene la instancia de un objeto XMLHttpRequest
// .open() es un método que pertenece al objeto XMLHttpRequest.
// Este método se usa para inicializar o configurar la solicitud HTTP que deseas realizar. En otras palabras, le estás diciendo a tu "vehículo" qué hacer (como a dónde debe ir y qué tipo de paquete debe llevar).


// Aquí, los tres argumentos importantes son:

// ■ method: El tipo de solicitud HTTP que deseas realizar (GET, POST, etc.).
// ■ url: La URL o API a la que deseas conectarte.
// ■ async: Un valor booleano (true o false) que indica si la solicitud debe ser asíncrona o no.

// GET: Se utiliza cuando quieres recuperar información del servidor. Es como decirle al servidor: "Envíame estos datos, pero no los cambiaré".

// Esta variable urlApi fue pasada como argumento a la función fetchData, lo que significa que cuando se llame a fetchData, deberás proporcionar la URL de la API con la que quieres interactuar. Por ejemplo, podría ser algo como 'https://api.escuelajs.co/api/v1/products'.

// true » es el tercer argumento que pasas al método .open(). Este valor indica si la solicitud debe ser asíncrona o no.

// Asíncrono (true) significa que el código seguirá ejecutándose mientras se espera la respuesta del servidor. Es decir, tu código no se "detiene" esperando a que el servidor responda; la respuesta llegará cuando esté lista, pero mientras tanto, el programa sigue haciendo otras cosas.
// Si hubieras pasado false, la solicitud sería síncrona, lo que significa que el código se detendría hasta que obtenga la respuesta del servidor (lo cual no es recomendable en la mayoría de los casos, ya que podría hacer que tu aplicación se quede congelada).
  

  xhttp.open('GET', urlApi, true);

  // Esta línea asigna una función al evento onreadystatechange del objeto xhttp, que es el encargado de manejar los cambios de estado de la solicitud HTTP. Vamos a analizar cada parte.

  // .onreadystatechange » Es una propiedad del objeto XMLHttpRequest que guarda una función que se ejecutará cada vez que el estado de la solicitud cambie.
  
//   Cada vez que el estado de la solicitud HTTP cambia, desde que se abre hasta que se completa, esta función se ejecuta.
// Los posibles estados de una solicitud HTTP se identifican con valores numéricos que van del 0 al 4. Por ejemplo:
// 0: UNSENT (No se ha iniciado la solicitud).
// 1: OPENED (Se ha abierto la solicitud con .open()).
// 2: HEADERS_RECEIVED (Se ha recibido la respuesta del servidor).
// 3: LOADING (El cuerpo de la respuesta se está descargando).
// 4: DONE (La solicitud está completa y la respuesta está lista).

// = function (event) » Aquí asignas una función anónima a la propiedad onreadystatechange.
// Es decir, le estás diciendo al objeto xhttp: "Cada vez que cambie el estado de la solicitud, ejecuta esta función".
  
// function » Estás declarando una función anónima, lo que significa que la función no tiene un nombre, y simplemente se ejecuta cuando el estado de la solicitud cambie.

// (event) » Es el parámetro de la función. En este caso, event es un objeto que representa el evento que está ocurriendo. Este evento contiene información sobre la solicitud, como el estado en el que se encuentra o si ocurrió un error.


// Básicamente, esta línea está diciendo »
// "Cada vez que el estado de la solicitud HTTP cambie, ejecuta la función que sigue."
// Esta función se encargará de verificar en qué estado se encuentra la solicitud y actuar en consecuencia (como por ejemplo, ver si la solicitud ya está completa o si hubo un error).

xhttp.onreadystatechange = function (event) {

  // Esta línea es una condicional que verifica si el estado de la solicitud HTTP ha llegado al valor 4, lo que significa que la solicitud está completamente finalizada.
  // En resumen, esta línea verifica si la solicitud HTTP ya está lista.
  // Si el valor de xhttp.readyState es exactamente 4, significa que la solicitud ha sido completada y la respuesta del servidor está disponible.

    if (xhttp.readyState === 4) {

      // verifica si el estado de la respuesta HTTP (es decir, el código de estado que el servidor devuelve) es 200, lo cual significa que la solicitud se completó correctamente.

      // .status: Es una propiedad del objeto XMLHttpRequest que contiene el código de estado HTTP que devuelve el servidor como respuesta a la solicitud.
      // En este caso, verifica si el estado de la solicitud HTTP (xhttp.status) es exactamente igual a 200, lo cual indica que la solicitud fue exitosa.
      // Si el servidor devuelve este código, significa que ha procesado correctamente la solicitud y la respuesta está lista para ser utilizada.


      if(xhttp.status === 200) {

        // Esta línea está llamando a la función callback y pasándole dos argumentos.
        // En este caso, cuando la solicitud HTTP se completa correctamente, se llama a callback para manejar la respuesta.
        
        // El callback toma dos argumentos: el primero es el error (si lo hubiera) y el segundo es el resultado (en este caso, la respuesta de la API).
        
        // responseText es una propiedad del objeto XMLHttpRequest (que es xhttp)
        // Contiene la respuesta en formato de texto que envía el servidor después de que la solicitud HTTP ha sido completada.

        // El método JSON.parse() es una función de JavaScript que se utiliza para convertir una cadena de texto JSON en un objeto de JavaScript.
        // es decir »
        // { id: 1, name: "John Doe", email: "john@example.com" }

        // JSON.parse(xhttp.responseText): El segundo argumento es el resultado de convertir la respuesta en texto (xhttp.responseText) a un objeto JavaScript usando JSON.parse.

        callback(null, JSON.parse(xhttp.responseText));
      }
    } else {

      // Aquí estamos usando la clase Error de JavaScript.
      // Error es un constructor integrado en JavaScript que se usa para crear objetos de error.
      // new crea una nueva instancia de la clase Error. Esto significa que está creando un nuevo objeto de tipo Error.

      // urlApi es el argumento que fue pasado a la función fetchData. Contiene la URL de la API a la que estamos intentando hacer la solicitud.
      
      // 'Error' es una cadena de texto (string) que se utiliza como parte del mensaje de error.
      // urlApi es el argumento que fue pasado a la función fetchData. Contiene la URL de la API a la que estamos intentando hacer la solicitud.
      // 'Error' + urlApi concatena la cadena 'Error' con el valor de urlApi, creando un mensaje de error más descriptivo.
      
      const error = new Error('Error' + urlApi);

      // La palabra clave return se utiliza para devolver un valor desde una función.
      // En este caso, la función detiene su ejecución y devuelve el resultado de llamar al callback con dos argumentos: error y null. 

      // Este es el llamado al callback que fue pasado como argumento a la función fetchData.
      // callback es una función pasada como parámetro cuando se llama a fetchData. Esta función se ejecuta una vez que se completa la solicitud HTTP.

      // ¿Qué hace callback(error, null); en resumen?
      // Llama a la función que se pasó como callback.
      // Pasa dos valores:
      // error: El objeto de error que indica que hubo un problema.
      // null: Para indicar que no se recibieron datos correctos debido al error.

      // return callback(error, null);: Llama al callback con dos argumentos, un error y null, lo que indica que la solicitud falló y no se recibieron datos.
      return callback(error, null);
    }
  }

  // Este método envía la solicitud HTTP que hemos configurado previamente con xhttp.open().
  // send() inicia la comunicación entre el cliente (el navegador o entorno de JavaScript) y el servidor.

  // Al llamar a xhttp.send();, el navegador o entorno JavaScript comienza a esperar una respuesta del servidor.
  
  //   Envía la solicitud HTTP que previamente hemos configurado con open().
  // Después de esto, el navegador o el entorno de JavaScript espera una respuesta del servidor.
  
  // xhttp.send();: Envía la solicitud HTTP al servidor, iniciando el proceso de comunicación.
  xhttp.send();
}



// ████████████████████████████  CLASE 9 » fetchData  █████████████████████████████████


// La función fetchData espera recibir dos argumentos:
// La URL de la API a la que se va a hacer la solicitud.
// Un callback, que es una función que se ejecutará cuando la solicitud termine, ya sea con éxito o con error.

// ${API}/products »
// Esta es la URL a la que se va a hacer la solicitud.
// El valor de API es una variable que contiene el dominio base de la API ('https://api.escuelajs.co/api/v1'), y con el template literal ${API}/products, se forma la ruta completa: 'https://api.escuelajs.co/api/v1/products'.

// function(error1, data1) »
// Este es el callback que se pasa como segundo argumento a fetchData.

// Esta función tiene dos parámetros:
// error1: Es el primer argumento que recibirá el callback. Si hay un error durante la solicitud, este valor contendrá información sobre el error. Si no hay error, será null.
// data1: Es el segundo argumento que recibirá el callback. Si la solicitud fue exitosa, contendrá los datos que la API devolvió (normalmente en formato JSON).

fetchData(`${API}/products`, function(error1, data1) {

  // Si error1 contiene un valor (es decir, si ocurrió un error), esta condición será verdadera, y el código dentro del if se ejecutará. Si no hay error (si error1 es null o undefined), entonces la condición es falsa, y el código dentro del if no se ejecutará

  // return:
  // La palabra clave return se utiliza para detener la ejecución de la función en la que se encuentra y devolver un valor (aunque en este caso, no devuelve ningún valor específico, simplemente detiene la ejecución).
  // Cuando hay un error, no queremos que el código siga ejecutándose, porque si lo hiciera, intentaría trabajar con datos que no se recibieron correctamente. Por eso, usamos return para detener todo.

  // Este método es similar a console.log(), pero está diseñado específicamente para manejar errores. Los errores se muestran en la consola en un formato destacado, para que sea más fácil ver qué salió mal.

  if (error1) return console.error(error1);

  // Esta es una llamada a la función fetchData que fue definida anteriormente en el código. fetchData es una función que hace una solicitud HTTP utilizando la API de XMLHttpRequest.
  // Su propósito es recuperar datos desde una URL (en este caso, desde una API) y luego procesarlos en el callback que le pases como segundo argumento.
  
  //API es la constante que define la URL base de la API (por ejemplo, 'https://api.escuelajs.co/api/v1').
  // /products/ es la parte de la URL que especifica que estamos pidiendo información sobre productos en la API.

  //   data1 es el resultado que obtuviste de la primera llamada a fetchData (es decir, los productos devueltos por la API).
  // data1[0] significa que estamos accediendo al primer elemento de la lista de productos.
  // .id significa que estamos accediendo al ID del primer producto.

  fetchData(`${API}/products/${data1[0].id}`, function(error2, data2) {
    if (error2) return console.error(error2);
    // /categories/: Esta es la parte de la URL que especifica que queremos información sobre las categorías en la API.

    // ?. es el operador de encadenamiento opcional. Su función es evitar errores si alguna parte de la cadena es undefined o null. En este caso, si data2 o category no existen, el código no lanzará un error; en lugar de eso, el valor será undefined.
    
    // Resumen: Estamos construyendo una URL que solicita más información sobre la categoría asociada con el producto obtenido en la solicitud anterior. Si el producto no tiene categoría, no se lanzará un error gracias al encadenamiento opcional. La URL generada será algo como: 'https://api.escuelajs.co/api/v1/categories/1', donde 1 es el ID de la categoría.
    
    fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3) {
      if (error3) return console.error(error3);

      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    });
  });
});

