// cancela um timeOut

const timeOut = 3000; //milisegundos / 3sec

const finished = () => console.log("Done!")

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)