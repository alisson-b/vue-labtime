new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlert() {
            alert('Pare de colocar o dedo no button')
        },
        daValor(e) {
            this.valor = e.target.value
        }
    }
})