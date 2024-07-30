const componentContas = {data () {
    return {nomeConta: '', nomeUsuarios:'', nomeUsuariosLengthArray:[],
    resultsLimit:0, number:0,resultsLimitPages:1, currentPage: 1, pageAsker: 1, offSet: 0, limitQuerry: 10}
  
  },

computed: {
    PagesRenderer_Teste() {
    return this.nomeUsuariosLengthArray.filter(n => n.indexus >= this.currentPage && n.indexus < this.currentPage + 10)
  }

},methods:{
    async getContas(){

      
       const formData = new FormData();
       formData.append("Nome", this.nomeConta);
      

   let x = await fetch('./call/to/api.extension', {
      method: "POST",
      body: formData
   });
   
       let y = await x.json();
       console.log(y);

       this.nomeUsuarios = y;
       console.log(this.nomeUsuarios.length);
       
       if(this.nomeUsuarios.length > 10) {
          this.resultsLimit = 10;
          this.resultsLimitPages = 10;      
       } else {
         this.resultsLimit = this.nomeUsuarios.length;
         this.offSet = 0; 
         this.limitQuerry = this.nomeUsuarios.length;
       }
       


   }, getContasConsole(){
      console.log(this.nomeUsuariosLengthArray.length)
      console.log(this.nomeUsuariosLengthArray[1].offset)

   
   },nextPages(){
      this.currentPage += 10
     
   
   }, backPages(){
      this.currentPage -= 10;
   },  
      askPages(){
         this.offSet = this.nomeUsuariosLengthArray[this.pageAsker - 1].offset;
         this.limitQuerry = this.nomeUsuariosLengthArray[this.pageAsker - 1].lastOf;
      
      console.log('pageAsker:' + this.pageAsker)
           
   
       let response_dados = await request_dados.json();
       console.log(response_dados);

       this.nomeUsuarios = response_dados;
   */
   
   }
   

  
  },

 watch: {
   resultsLimit(val){
      this.currentPage = 1
      this.limitQuerry =+ this.resultsLimit
      this.nomeUsuariosLengthArray = []
      this.pageAsker = 1
      let begin = 0;
      let end = 0; 
      let i;
       for ( i = 1; i <= Math.floor(this.nomeUsuarios.length/this.resultsLimit); i++){
         end = end + this.resultsLimit 
         begin = end - this.resultsLimit      
         this.nomeUsuariosLengthArray.push({indexus: i, offset: begin, lastOf: end})
       }
       console.log('end at end of the loop: ' + end)
       if(end != this.nomeUsuarios.length) {
             begin = end;      
             this.nomeUsuariosLengthArray.push({indexus: i++, offset: begin, lastOf: this.nomeUsuarios.length})
         }

         this.offSet = this.nomeUsuariosLengthArray[this.pageAsker - 1].offset;
         this.limitQuerry = this.nomeUsuariosLengthArray[this.pageAsker - 1].lastOf;  
   },  

   nomeUsuarios(val){
      this.currentPage = 1
      this.limitQuerry =+ this.resultsLimit
      this.nomeUsuariosLengthArray = []
      this.pageAsker = 1
      let begin = 0;
      let end = 0; 
      let i;
       for ( i = 1; i <= Math.floor(this.nomeUsuarios.length/this.resultsLimit); i++){
         end = end + this.resultsLimit 
         begin = end - this.resultsLimit      
         this.nomeUsuariosLengthArray.push({indexus: i, offset: begin, lastOf: end})
       }
       console.log('end at end of the loop: ' + end)
       if(end != this.nomeUsuarios.length) {
             begin = end;      
             this.nomeUsuariosLengthArray.push({indexus: i++, offset: begin, lastOf: this.nomeUsuarios.length})
         }

         this.offSet = this.nomeUsuariosLengthArray[this.pageAsker - 1].offset;
         this.limitQuerry = this.nomeUsuariosLengthArray[this.pageAsker - 1].lastOf;  
   }
 }
  ,
  
  template:`
  <div style='display: flex; flex-direction: column'>
    <h3 style='margin-bottom: -3px;'> Meus usuários </h3>
    <div style='margin-top: 15px;'> 
       <div style='display: flex; flex-direction: row; min-width: 25vw'>
          <input type="text" v-model="nomeConta">
          <button @click='getContas'> Pesquisar </button>
          
          <div style='margin-left: 5px' v-if='nomeUsuarios.length'>

            <label style='margin-right: 5px' for="limitePage"> Limite de resultado por página:</label>

             <select name="limitePage" id="limitePage" v-model.number="resultsLimit">
               <option v-if='nomeUsuarios.length > 10' value="10"> 10 </option>
               <option v-if='nomeUsuarios.length > 20' value="20"> 20 </option>
               <option v-if='nomeUsuarios.length > 30' value="30"> 30 </option>
               <option v-if='nomeUsuarios.length > 40' value="40"> 40 </option>
               <option v-if='nomeUsuarios.length > 50' value="50"> 50 </option>
               <option :value="nomeUsuarios.length" v-else> {{nomeUsuarios.length}} </option>
             </select>
  
          </div>
       
       </div> 
    </div> 
    
    <div style='margin-top: 15px;'>
        <table v-if='nomeUsuarios.length'>
        <tr>
           <th> Nome </th>
           <th> Email </th>
           <th> Gênero </th>
        </tr>
        
        
          <tr v-for="usuario in nomeUsuarios.slice(offSet, limitQuerry)">
    <td>
        {{ usuario.first_name }}
        {{ usuario.last_name }}
    </td>
    <td>
        {{ usuario.email }}
    </td>
    <td>
        {{ usuario.gender }}
    </td>
</tr>
         </table>
        

        <table v-else>
         <h3 style='margin-top: 0px'> Nenhum resultado encontrado </h3>
        </table>
        
        <div v-if='nomeUsuarios.length > 10' style='margin-top: 15px; max-width: 50vw'>
        <div style='overflow: auto; max-width: 100%'>
         
         <a style='cursor: pointer' v-if='currentPage > 10 ' @click='backPages'>  &#11144 </a>
         <a v-else> </a>
         <a style='margin-left: 3px; margin-right: 3px; cursor: pointer' v-for='n in PagesRenderer_Teste'  @click='pageAsker = n.indexus; askPages()'>
            {{n.indexus}} 
          </a>
          <a style='cursor: pointer' v-if='currentPage <= nomeUsuariosLengthArray.length - 10' @click='nextPages'> &#11146 </a>
          <a v-else> </a>
        </div>
        
        </div>
        
        <div v-else>
        </div>
    

    </div>

   </div>`
  }


export {componentContas}
