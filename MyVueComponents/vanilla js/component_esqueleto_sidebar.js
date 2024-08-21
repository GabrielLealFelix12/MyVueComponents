
const Content1 =  {data () {
    return {valor: `valor`}
  }, methods:{
   testevue(){
    return this.valor;
   }
  },
  template:`
  <div> este é o basic content 1 </div>`
  }


  const Content2 =  {data () {
    return {valor: `valor`}
  }, methods:{
   testevue(){
    return this.valor;
   }
  },
  template:`
  <div> este é o basic content 2 </div>`
  }




const esqueleto_sidebar = {components:{
    Content1, Content2

}, data () {
    return {valor: `valor`, opcoes:['Content1', 'Content2'], PageContent:'Content1'}
  }, methods:{
   testevue(){
    return this.valor;
   }
  },
  template:`
  <div style='display: flex;
    flex-direction: column;
    min-width: 25vw;
    min-height: 95vh;
    background-color: white;' 
    > 
  <div v-for="n in opcoes">
    <h4 style='text-align: center' @click='PageContent = n'> {{ n }} </h4>
  </div>
</div>
  
  <div style='margin-left: 15px; min-width: 70%;'> 
           <component :is='PageContent'> content </component>
  </div>

  `
  }


export {esqueleto_sidebar}