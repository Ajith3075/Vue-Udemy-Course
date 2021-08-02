const app = Vue.createApp({
    //data , functions
    data () {
        return {
            showBooks: true,
            title: 'The final Empire',
            author: 'Ajith V saju',
            age: '24'
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks=!this.showBooks
        }
    }
})

app.mount('#app')