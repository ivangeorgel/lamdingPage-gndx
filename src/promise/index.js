
// Aquí estás creando una constante llamada promise para almacenar el valor que devuelve la función Promise.

// Promise » es un constructor en JavaScript que se utiliza para crear promesas.

// new Promise(), estás creando una nueva instancia de una promesa. Una promesa representa una operación asincrónica que eventualmente se completará o fallará, devolviendo un valor o un error.

// El constructor Promise toma una función como argumento, y esa función recibe dos parámetros: resolve y reject.

// resolve y reject son dos funciones que JavaScript proporciona automáticamente a la función anónima. Estas funciones son clave para manejar el éxito o el fracaso de la promesa:
// resolve: Cuando se llama, marca la promesa como "resuelta" (fulfilled) y pasa un valor.
// reject: Cuando se llama, marca la promesa como "rechazada" (rejected) y pasa una razón o error.

// resolve y reject no son palabras clave inventadas por el programador, sino que son parte del funcionamiento de las promesas en JavaScript.

// resolve: Es una función que, cuando se llama, indica que la operación asincrónica ha tenido éxito y "resuelve" la promesa, pasando un valor.

// reject: Es una función que, cuando se llama, indica que la operación ha fallado, "rechaza" la promesa y puede pasar una razón o error.


// Esto significa que la promesa se "resuelve" inmediatamente con el valor 'hey!'. En este caso, la promesa ha sido exitosa y el valor resultante de la promesa será el string 'hey!'.
// No se utiliza reject en este ejemplo, lo que significa que la promesa no falla; se resuelve correctamente.

const promise = new Promise(function (resolve, reject) {
  resolve('hey!')
});

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject("There is no cows on the farm");
  }
});


// Es una promesa. Este objeto countCows

// Función: Como es una promesa, puede estar en uno de estos tres estados:
// Pendiente (pending): Todavía no se ha completado ni rechazado.
// Resuelta (fulfilled): La operación asincrónica se completó con éxito.
// Rechazada (rejected): Hubo un error o fallo en la operación.

// then(...):
// Función: Es un método que se usa con promesas. Sirve para manejar el resultado cuando la promesa se resuelve correctamente.
// Sintaxis: El método .then() recibe una función como argumento que se ejecutará cuando la promesa se resuelva.
// Propósito: Indica lo que debe suceder cuando la promesa countCows se resuelva con éxito (es decir, cuando la operación asincrónica termine y devuelva un valor)

// (result):
// Tipo: Es un parámetro.
// Función: result representa el valor que se obtiene cuando la promesa se resuelve. Este valor es el que devuelve la promesa cuando ha terminado su ejecución satisfactoriamente.

countCows.then((result) => {
  console.log(result);
  // .catch(...):

// Función: El método .catch() es parte de la estructura de promesas en JavaScript. Se utiliza para manejar errores o excepciones cuando la promesa no se resuelve correctamente, es decir, cuando falla o es rechazada.
// Propósito: Este método es especialmente útil cuando quieres capturar lo que sucede si la operación asincrónica falla, como cuando el servidor no responde o ocurre algún error inesperado.
// Sintaxis: .catch() toma una función como argumento, la cual se ejecuta cuando la promesa es rechazada (fallida).

// Resumiendo:
// El método .catch() se encarga de manejar los errores de la promesa. Si la promesa falla o es rechazada, el valor del error se pasa a la función que le pasamos a .catch(), y dentro de esta función puedes decidir qué hacer con ese error.

}).catch((error) => {
  console.log(error);

  // Función: El método .finally() es otro método de las promesas en JavaScript, que se usa para ejecutar código una vez que la promesa ha terminado, sin importar si se resolvió (con éxito) o fue rechazada (con error).
// Propósito: Se ejecuta después de que la promesa haya sido manejada, es decir, después del bloque de .then() o .catch(). Es útil para realizar acciones que deben ocurrir siempre, independientemente del resultado, como limpiar recursos, detener una animación de carga, o registrar algún mensaje.
// Sintaxis: .finally() recibe una función como argumento, que es la que se ejecutará una vez que la promesa haya finalizado.
}).finally(() => console.log('Finally'));

delay(2000, "Vamos Iván, vos podes!")
.then((message) => console.log(message)).catch((error => {
  const error = "Algo salio mal";
  console.log(error)
}))
