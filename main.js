Vue.createApp({
    data() {
        return {
            h1: 'Lance G. Del Rosario',
            h2: 'BS in Computer Engineering'
        };
    },
    methods:{
        changeTitle(){
            this.h1 = 'Lance G. Del Rosario Jr.'
            this.h2 = ''

        }
    }
}).mount('#body');
