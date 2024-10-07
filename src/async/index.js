// async y await no bloquea el funcionamiento del código


const fnAsync = () => {
//  Con resolve y reject vamos a poder manejar el flujo de una promes

// Promise: Aquí estás creando una nueva promesa con el constructor Promise. Una promesa es un objeto en JavaScript que representa una operación asíncrona que puede completarse con éxito o fallar. 

// resolve lo vamos a llamar cuando la operacion sea exitosa y reject cuando falle
    return new Promise((resolve, reject) => {

        // (true) ? ... : ...
// Aquí estamos usando un operador ternario, que es una forma abreviada de escribir un if-else. La sintaxis básica es:
// javascript
// Copiar código
// condición ? resultado_si_verdadero : resultado_si_falso
// En este caso, la condición es (true), que siempre es verdadera, por lo que se ejecuta el lado del "resultado verdadero", es decir, el código que viene después del ?.
      (true)
    //   setTimeout: Es una función nativa de JavaScript que se usa para ejecutar una función después de un período de tiempo específico. Su sintaxis básica es:
    //   javascript
    //   Copiar código
    //   setTimeout(función, tiempo_en_milisegundos);

    // resolve('Async!!'): Dentro de esta función, se llama a resolve con el argumento 'Async!!'. Esto significa que, después de los 2 segundos, la promesa se cumple (se resuelve) y el valor 'Async!!' es pasado como resultado de la promesa.

        ? setTimeout(() => resolve('Async!!'), 2000)

        : reject(new Error('Error!'));
    });
  }

//   async: Es una palabra clave en JavaScript que se utiliza para definir una función asíncrona. Las funciones asíncronas permiten que el código dentro de ellas use await para manejar operaciones que toman tiempo (como las promesas) sin bloquear la ejecución del resto del código.
// ¿Qué hace esta línea?
// Esta línea declara una función asíncrona llamada anotherFn, utilizando la sintaxis de función de flecha.
// El uso de async indica que esta función contendrá código asíncrono, lo que significa que podrá utilizar await para esperar a que se resuelvan promesas dentro de ella.

  const anotherFn = async () => {
    // somethig: Es el nombre de la variable que almacenará el valor resultante de la ejecución de fnAsync().
    
    // await: Es una palabra clave que se utiliza dentro de funciones asíncronas (aquellas definidas con async). Lo que hace await es esperar a que una promesa se resuelva. En lugar de seguir ejecutando el código inmediatamente, JavaScript espera a que la promesa retorne un valor.
    
    
    const somethig = await fnAsync();
    console.log(somethig);
    console.log('Hello!');
  }
  
  console.log('Before');
  anotherFn();
  console.log('After');