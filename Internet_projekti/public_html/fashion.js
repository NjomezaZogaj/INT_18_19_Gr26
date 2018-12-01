$(document).ready(function(){
    $("#flip1").click(function(){
        $(".panel1").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip2").click(function(){
        $(".panel1").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#flip3").click(function(){
        $(".panel1").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#flip4").click(function(){
        $(".panel1").slideToggle("slow");
    });
});
function numrimaksimal()
{
    document.getElementById("demo1").innerHTML = Math.max(25000,200000,30000,17000000)+" dollars";
}

function myFunction1() {
    var str = "<i>Giorgio Armani,Ralph Lauren,Miuccia Prada,Dolce&Gabbana,Valentino Garavani</i>";
    var res = str.toString();
    document.getElementById("demo3").innerHTML = res;
}

function myFunction2() {
    var num = 87;
    var n = num.toString();
    document.getElementById("demo4").innerHTML = n;
}
function myFunction3() {
    var str = document.getElementById("demo5").innerHTML; 
    var res = str.replace("England", "Moscow");
    document.getElementById("demo5").innerHTML = res;
}

