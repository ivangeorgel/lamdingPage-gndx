// const promise = new Promise(function (resolve, reject) {
//     resolve('hey!')
//   });
  
//   const cows = 15;
  
//   const countCows = new Promise(function (resolve, reject) {
//     if (cows > 10) {
//       resolve(`We have ${cows} cows on the farm`);
//     } else {
//       reject("There is no cows on the farm");
//     }
//   });


const message = "Completado con exito";
  
  export function delay( message) {
    return new Promise((resolve) => {
        window.setTimeout(() =>{
            resolve(message)
    },2000);
});
}
