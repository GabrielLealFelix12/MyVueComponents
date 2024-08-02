const componentPacotes = {data () {
    return {valor: `valor`, showDiv: false, divDisplay: 'none'}
  }, methods: {
    testThisValue(){
      console.log('teste')
    },
   divShowHide(){
         this.showDiv = !this.showDiv
   }, 

   
  },
  watch:{
     showDiv(val){
      if(this.showDiv){
          this.divDisplay = 'flex'
        }else{
          this.divDisplay =  'none'
        }
     }
  },
  template:`
  <div style='display: flex; flex-direction: column'> 
     
     <div>
        <h1> Cadastre o seu pacote </h1>
     </div>
     
     <div style='display:flex; overflow: auto'>
     
     <div @click='divShowHide' style='display:flex; border-style: dotted; border-color: black; border-radius: 15px;
     height: 200px; width: 150px; 
     flex-direction: column; justify-content: center; align-items: center;
     cursor: pointer;'> 
     <img src="vue/Plus_Icon.png" style='height: 100px; width: 100px' alt="Icon">
       Criar pacote
     </div>
     
     <div style='display:flex; margin-left:20px; border-style: solid; border-color: black; border-radius: 15px;
     height: 200px; width: 150px; flex-direction: column; justify-content: center; align-items: center;'>
     </div>
    
    </div>
    
     <div style='margin-top: 15px'>
       <div>
         <h1> Pré-visualização de Pacotes </h1>
       </div>
        Pacotes aqui.
     </div>
  

  <div style='position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;'
  
  
  :style="{'display': divDisplay}">

  <div style='background-color: white; 
  display: flex; 
  flex-direction: column; 
  min-width: 300px;
  min-height: 450px;'>
           
          <div style='display: flex; flex-direction: row; margin-top: 10px; margin-left: 10px'>
          <label style='margin-right: 10px' for='nomePacote'> Pacote: </label>
          <input style='min-width: 75%;' type="text" id='nomePacote'>
          </div>


          <div style='margin-top: 10px; margin-left: 10px'>
          <label style='margin-right: 5px' for="escolherBarco"> Barcos disponíveis: </label>
          <select id='escolherBarco'>
            <option value='barco'> Barco </option>
          </select>        
          </div>
          
          
          <div style='margin-top: 10px; margin-left: 10px'>
          <h4 style='margin-top: 5px; margin-bottom: 5px;' > Serviços disponíveis: </h4>
          <input type="checkbox" id='escolherServicos' value='value'>        
          <label style='margin-right: 5px' for="escolherServicos"> Serviços </label>
          </div>
          

          <div style='margin-left: 10px; margin-top: 10px'>
            <label style='margin-right: 10px' for="qtdAssentos" > Quantidade de Assentos:</label>
            <input type="number" id="qtdAssentos" min="1" max="100">
          </div>

          <div style='margin-left: 10px'>
              <h4> Adicione uma imagem: </h4>
             <label for='mediaForPackag'>
                <img src="vue/Plus_Icon.png" style='height: 50px; width: 50px' alt="Icon"> 
             </label>
             <input style='display: none' type="file" id="mediaForPackag" accept="image/png, image/jpeg">
          </div>
          
          <div style='min-height:35%; min-width: 90%; margin-left: 10px'>
             <h4> Pré-visualização: </h4>
          </div>
          
          <div style='display: flex; justify-content: center;'>
             <button> Adicionar pacote </button>
             <button @click='divShowHide'> Cancelar </button>
          </div>
  </div>

  </div>
  
  </div>

   `
  }

export {componentPacotes}
