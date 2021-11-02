// vai rodar uma função após X milisegundos
const timeOut = 3000 //  3 sec

const finished = () => console.log("Done!")

setTimeout(finished, timeOut)
console.log("Mostrar")