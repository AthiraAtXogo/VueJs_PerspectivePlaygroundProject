Vue.createApp({
    data(){
        return{
            perspective:100,
            rotateX:0,
            rotateY:0,
            rotateZ:0,
            color:''
        }
    },
    computed:{
        box(){
            return{
                transform:`perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateX(${this.rotateY}deg)
                rotateX(${this.rotateZ}deg)
                `,
                backgroundColor:this.color
            }
        }
    },methods:{
        reset(){
            
                this.perspective=100,
                this.rotateX=0,
                this.rotateY=0,
                this.rotateZ=0
             
        },
    async copy(){
            let text =`transform:${this.box.transform}`
            await navigator.clipboard.writeText(text)

            alert("CSS copied to clipboard")
        }
    }
}).mount('#app')