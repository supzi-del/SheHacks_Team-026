

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
        }

        



        
        document.querySelector(".row").style.display="flex";
        document.querySelector(".row").innerHTML= pval;
        
        //document.querySelector(".row").style.overflow= "";
        document.querySelector(".clickbox").style.display="none";




    });

    document.getElementsByTagName("span").addEventListener('click',function(){
        document.execCommand("copy");
        

    });



