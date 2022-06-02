function myFunction(){
    document.getElementById("body").className="class";
    document.getElementById("para").className="hide"
}
 
function myFunction2(){
    document.getElementById("body").className="";
    document.getElementById("para").className="show"

    }

    var div = document.getElementsByTagName("div");
    for(i=0; i < div.length; i++){
div[i].className="div finished";
if (i ==4){
    break;
}
    }