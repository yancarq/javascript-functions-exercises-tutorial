 let vocal = ['a','e','i','o','u'];
 const rapid = (stringW) =>{
    let nuevoString ="";
    for(var i =0;i < stringW.length;i++){
        if(vocal.indexOf(stringW[i].toLowerCase())== -1){ //constante
            nuevoString += stringW[i].toUpperCase();
        }
    }
    return nuevoString;
}

   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));