const componentDashboard = {data () {
    return {valor: `valor`}
  }, methods:{
   testevue(){
    return this.valor;
   }
  },
  template:`
  <div style='margin-top: 15px; margin-left: 10px; border-bottom: 2px solid black;'>
    <h1> Dashboard </h1>
  </div>
  
  <div style='display:flex; wrap: flex-wrap; justify-content: center; margin-top: 30px'> 
  
  <div style='min-width: 200px; min-height: 100px; background-color: white; margin-right: 30px; margin-left: 30px'>
   <h4 style='margin-left: 15px'> Usuários </h4>
   <h1 style='margin-left: 15px'> No </h1>
  </div>

  <div style='min-width: 200px; min-height: 100px; background-color: white; margin-right: 30px; margin-left: 30px'>
   <h4 style='margin-left: 15px'> Pacotes ativos </h4>
   <h1 style='margin-left: 15px'> No </h1>
  </div>

  <div style='min-width: 200px; min-height: 100px; background-color: white; margin-right: 30px; margin-left: 30px'>
   <h4 style='margin-left: 15px'> Pagamentos </h4>
   <h1 style='margin-left: 15px'> No </h1>
  </div>

  <div style='min-width: 200px; min-height: 100px; background-color: white; margin-right: 30px; margin-left: 30px'>
   <h4 style='margin-left: 15px'> Suporte </h4>
   <h1 style='margin-left: 15px'> No </h1>
  </div>


   </div>

  <div style='margin-top: 75px; margin-left: 10px; border-bottom: 2px solid black;'>
    <h1> Pagamentos & Pacotes </h1>
  </div>


  <div style='display:flex; wrap: flex-wrap; justify-content: center; margin-top: 30px'> 

  <div style='min-width: 495px; min-height: 200px; background-color: white; margin-right: 10px; display: flex'>
    
    <div style='display: flex; flex-direction: column; min-width: 40%; margin-left: 15px'>
      <div>
         <h2> Dinheiro total </h2>
         <h1> no </h1>
      </div>
      
      <div>
         <h2> Reembolsos </h2>
         <h1> no </h1>
      </div>
    </div>

    <div style='display: flex; flex-direction: column; min-width: 40%; margin-left: 15px'>
      <div>
         <h2> Pendentes </h2>
         <h1> no </h1>
      </div>
      
       <div>
         <h2> Rendimento </h2>
         <h1> no </h1>
       </div>
    </div>
  
   </div>

  <div style='min-width: 495px; min-height: 200px; background-color: white; margin-left: 10px; display: flex'>
   
   <div style='display: flex; flex-direction: column; min-width: 40%; margin-left: 15px'>
      <div>
         <h2> Pacotes </h2>
         <h1> no </h1>
      </div>
      
      <div>
         <h2> Pacotes contratados </h2>
         <h1> no </h1>
      </div>
    </div>

    <div style='display: flex; flex-direction: column; min-width: 40%; margin-left: 15px'>
      <div>
         <h2> Pacotes pré-aprovados </h2>
         <h1> no </h1>
      </div>
      
    </div>

  </div>

  
 </div>


  <div style='margin-top: 75px; margin-left: 10px; border-bottom: 2px solid black;'>
    <h1> Métricas </h1>
  </div>


<div style='min-width: 900px; min-height: 300px; background-color: white; margin-left: 10px; margin-top: 15px; display: flex'> 

</div>


   `
  }


export {componentDashboard}