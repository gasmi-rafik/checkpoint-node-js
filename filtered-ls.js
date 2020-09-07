var fs = require ('fs') ;


fs.readdir(process.argv[2],'utf-8', function (err, data) {
    if (err) 
       console.log(err.stack);
       
     var ext = process.argv[3];
     var list = data.filter(function(element){
       var len= ext.length+1 ; 
            return(element.substr(element.length-len ,element.length )==="."+ ext);
        

     });
     list.forEach(function(e){
        console.log(e) ;
     })

    });
     