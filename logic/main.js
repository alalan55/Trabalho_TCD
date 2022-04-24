
if (window.Worker) {
    const App = {
        created() {
            console.log('Matriz de dados com os valores:', this.dados)
            this.somarDadosThread()
        },
        data() {
            return {
                dados: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                total: 0,
                state: 0,
                dadosParaThread: {}
            }
        },
        watch: {
            total(nv, ov) {
                if (nv != ov) {
                    this.somarDadosThread()
                }
            }
        },
        methods: {
            somarDadosThread() {
                if (this.state < this.dados.length) {

                    this.dadosParaThread = { numeroAtual: this.dados[this.state], somaAtual: this.total }
                    const worker = new Worker("/logic/thread.js");
                    worker.postMessage(JSON.parse(JSON.stringify(this.dadosParaThread)))
                    worker.onmessage = (result) => {
                        this.total = result.data
                    }
                    this.state++
                }
            }
        }
    }
    Vue.createApp(App).mount('#container')
}