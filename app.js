const app = Vue.createApp({
    data() {
        return{
            message: 'Hello Vue!',
            firstname: 'Mithun',
            lastname: 'S',
            email: 'mithunsrinivasappa@gmail.com',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            gender: 'male',
        }
      
    },
    methods: {
        async getuser(){
            const res = await fetch('https://randomuser.me/api')
            const { results }=await res.json()

            // console.log(results)
            this.message='Hello Vue!'
            this.firstname=results[0].name.first
            this.lastname=results[0].name.last
            this.email=results[0].email
            this.picture=results[0].picture.large
            this.gender=results[0].gender
        },
    },
  })

app.mount('#app')