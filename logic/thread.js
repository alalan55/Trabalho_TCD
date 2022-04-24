onmessage = function (data) {

     let obj = {
         msg1: `THREAD: dado recebido do main: ${data.data.numeroAtual}`,
         line: '°°°°°°',
         msg2: `SOMA ATUAL NA TRHEAD: ${data.data.somaAtual} + ${data.data.numeroAtual}`
     }


    var result = 0;
    let completeObj = {}

    if (data.data.somaAtual == 0 || data.data.somaAtual > 0) {
        result = data.data.somaAtual
        result += data.data.numeroAtual

        completeObj = {... obj, result: result}
    }
    self.postMessage(completeObj)
}