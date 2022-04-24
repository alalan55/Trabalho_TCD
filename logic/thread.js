onmessage = function (data) {
     console.log(`THREAD: dado recebido do main ${data.data.numeroAtual}`)
     console.log('------------------------------------------------------')
     console.log(`SOMA ATUAL NA TRHEAD: ${data.data.somaAtual}`)

    var result = 0;

    if (data.data.somaAtual == 0 || data.data.somaAtual > 0) {
        result = data.data.somaAtual
        result += data.data.numeroAtual
    }
    self.postMessage(result)
}