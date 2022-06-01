
const app = Vue.createApp({

    data(){

        return {
            inputClass : '' ,
            paragraphIsVisible : true ,
            inputBackgroundColor: '',
        }

    },

    computed : {

        paraClasses(){

            return {

                // Check if user input is user1/user2 and apply the classes
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2' ,

                // Toggle Visibility/Hidden
                visible: this.paragraphIsVisible,
                hidden: !this.paragraphIsVisible,

                 }
        } ,
              
    },

    methods:{

        toggleParagraphVisibility(){

           this.paragraphIsVisible = !this.paragraphIsVisible

        }

    }

})

app.mount('#assignment')