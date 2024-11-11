 function toCommas(value) {
     

    if (value===undefined) {
        return 0
    } else if(value===null) {
       return 0 
    }else{
          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


}

export default toCommas