const {createApp} = Vue
createApp({
    data(){
        return{
            task:'',
            tasks:['task1','task2'],
            listStatus:true
          }
    },
    methods:{
        toggleVisibility(){
            this.listStatus = !this.listStatus;
            console.log(this.listStatus);
          },
        addTask(){
            this.task == '' || this.tasks.push(this.task);
            this.task = '';
        }
    }
}).mount('#assignment');