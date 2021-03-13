document.querySelector("#addnew").addEventListener('click',function(){
    document.querySelector(".clickbox").style.display="flex";
    
});

document.querySelector("#close").addEventListener('click',function(){
    document.querySelector(".clickbox").style.display="none";
});




var myArr=[];
    document.querySelector("#addurl").addEventListener('click',function(){
        
        
        
        var pastedurl = document.getElementById("linkk").value;
        
        
        
        myArr.push(pastedurl);
        
        
        var pval="";

        for(let i=0;i< myArr.length;i++){
            pval=pval + myArr[i]+ "<br/>";

            document.querySelector(".row").style.display="flex";
            
            document.querySelector(".row").innerHTML= pval;
            
            
            //document.querySelector(".row").style.overflow= "";
            document.querySelector(".clickbox").style.display="none";

            
        }

        

        
       

       


    });

    



    document.getElementById("row").addEventListener('click',function(){
      document.execCommand("copy");

      document.querySelector(".copied").style.display="flex";

       setTimeout(function(){
       document.querySelector(".copied").style.display="";
        }, 1500);
        


    });



    document.getElementById("row").addEventListener('dblclick',function(){
        
        document.querySelector(".row").classList.remove("row")
        
          
  
  
      });

   



