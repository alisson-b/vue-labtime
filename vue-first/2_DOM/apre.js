new Vue ({
    el:  "#aprendendo",
    data: {
        queijo: '',
        goiaba: '',

    },
    methods: {
        clicar() {
            this.queijo = "Banana"
        },
        alertar(e) {
            alert(e.target.value);
        }

    }
    
})