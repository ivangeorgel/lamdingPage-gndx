

// function*: El asterisco (*) justo después de la palabra clave function indica que esta es una función generadora. Las funciones generadoras permiten pausar su ejecución y luego reanudarla en el futuro, lo que las diferencia de las funciones normales. Esto se logra a través del uso de la palabra clave yield.

// gen(): El nombre de la función generadora es gen. Puedes llamarla como cualquier otra función, pero en lugar de devolver un resultado directamente, devuelve un iterador (una especie de controlador de la función) que puedes usar para controlar cómo y cuándo se ejecuta la función.

function* gen() {
    // Dentro del bloque { ... }
// yield: La palabra clave yield es similar a un return, pero en lugar de terminar la ejecución de la función por completo, pausa la función y devuelve el valor especificado (en este caso 1, 2, y 3) al llamador.
// Cada vez que la función se "reanuda", continúa desde el punto donde se había pausado anteriormente, devolviendo el siguiente valor de yield.
   
    yield 1;
    yield 2;
    yield 3;
  }
  
  const g = gen();
//   Resumen del comportamiento
// // La función comienza en la primera instrucción yield 1 y se detiene.
// Cuando llamas al método next() del iterador que devuelve esta función, la función generadora avanza hasta la siguiente instrucción yield, devolviendo su valor.
// En este caso, yield 2 devuelve 2, y yield 3 devolverá 3.
  console.log(g.next().value);
  console.log(g.next().value);
  console.log(g.next().value);
  
  
//   ¿Qué hace esta función generadora?
// Esta función generadora está diseñada para iterar sobre los elementos del arreglo que se le pasa como argumento y, en cada paso, "pausar" su ejecución mientras devuelve el siguiente valor del arreglo.
// Por ejemplo, si llamas a iterate(['oscar', 'omar', 'ana']), la función generadora pausará su ejecución en cada elemento del arreglo, devolviendo cada valor cuando llames a next().
// En resumen, esta línea de código define una función generadora que recorrerá (iterará) un arreglo y devolverá los elementos uno por uno cuando se le llame. Cada vez que se use el método next() del iterador, se obtendrá el siguiente elemento del arreglo.

  function* iterate(array) {
    // En cada paso del bucle:

// Tomas la primera pelota (por ejemplo, "Oscar").
// La variable value es ahora igual a "Oscar".
// Haces algo con ese nombre (por ejemplo, mostrarlo en la consola).
// Luego sacas otra pelota (ahora "Omar").
// value es ahora igual a "Omar", y repites el proceso.

    for (let value of array) {

      // yield: Pausa la función generadora y retorna el valor especificado. Se puede pensar como un "retorno temporal". La función no termina cuando se encuentra un yield; simplemente "entrega" un valor y espera la siguiente llamada a .next().
      // value: Es el valor actual que está siendo recorrido en el bucle for...of dentro de la función generadora iterate. En este contexto, representa un valor del array que estamos iterando.

      yield value
    }
  }
  
  // Esta línea crea una variable llamada it y le asigna el resultado de llamar a la función generadora iterate con el array ['oscar', 'omar', 'ana', 'lucia', 'juan'] como argumento. Cuando llamamos a iterate(['oscar', 'omar', 'ana', 'lucia', 'juan']), la función generadora no se ejecuta de inmediato. En su lugar, devuelve un iterador, que es un objeto especial que sabe cómo recorrer los valores dentro del array de uno en uno, utilizando el método .next().

  const it = iterate(['oscar', 'omar', 'ana', 'lucia', 'juan']);

  // console.log(it.next().value);
  // Este código llama al método .next() sobre el iterador it. Lo que hace .next() es reanudar la ejecución de la función generadora iterate hasta el primer yield, devolviendo un objeto que tiene dos propiedades:
  // value: El valor que ha sido "producido" por la función generadora en ese punto.
  // done: Un booleano que indica si la función generadora ha terminado (true) o si aún tiene más valores que producir (false).
  
  // En resumen:
// Este código crea un iterador que recorre el array ['oscar', 'omar', 'ana', 'lucia', 'juan'] y, al llamar a it.next().value, se obtiene el primer valor del array, que es 'oscar'.
// ¿Te ha quedado claro cómo funciona este código?

  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);