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
$(document).ready(function(){
 $("#icon1").click(function(){
        $("#test1").text("Twiggy");
    });
    $("#icon2").click(function(){
        $("#test2").text("Madonna");
    });
	
	$("#icon3").click(function(){
        $("#test3").text("Audrey Hepburn");
    });
	$("#icon4").click(function(){
        $("#test4").text("Michael Jackson");
    });
	
	$("#icon5").click(function(){
        $("#test5").text("Naomi Campell");
    });
	
$("#icon6").click(function(){
        $("#test6").text("Princess Diana");
    });
	
});
$(document).ready(function(){

 $("#but1").click(function(){
        $("#p11").hide(1000);
        alert("Her real name is Lesley Lawson.");
    });
	 $("#but2").click(function(){
        $("#p22").hide(1000);
        alert("Her father is Italian, her mother was French-Canadian.");
    });
    
    $("#but3").click(function(){
        $("#p33").hide(1000);
        alert("She spoke five languages.");
    });
     $("#but4").click(function(){
        $("#p44").hide(1000);
        alert("Michael Jackson is The Most-Awarded Artist Of All Time. ");
    });
    $("#but5").click(function(){
        $("#p55").hide(1000);
        alert("She began modeeling at age 15, becoming the first black woman on the cover of French Vogue at 18.");
    }); 
