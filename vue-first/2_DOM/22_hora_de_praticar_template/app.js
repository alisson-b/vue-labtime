new Vue ({
    el: '#desafio',
    data: {
        SEU_NOME: 'Alisson Braz Domingues',
        IDADE: 25,
        imagem: 'https://i0.wp.com/abglt.org.br/wp-content/uploads/2020/10/wallpaper-pc1-scaled-1.jpg?fit=2560%2C1440&ssl=1',
    },
    methods: {
        multiplicaIdade() {
            return this.IDADE * 3;
        },
        emString(){
            return Math.random().toString();
        }
    }
})