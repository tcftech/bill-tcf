import jsonGen from "vjson-gen";


const json = new jsonGen;


function excellCreate(data) {
    
    
    json.toExcell([
      {name:"vicky",ph:"3493439"}
      ,
      {name:"vignesh",ph:"349343955"}
      , 
      {name:"vinoth",ph:"349343999"}
      ,
    ])
    

}



export default excellCreate