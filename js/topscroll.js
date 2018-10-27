 animeScroll=()=>{/*funçao para ser 
    executada toda vez que houver rolagem**/

    var pageTop = $(document).scrollTop(); /*pega a distancia(valor)
    da rolagem*/
   
    var nav = document.getElementsByTagName("img");
    
    if(pageTop > 1000){/**Compara a distancia da rolagem
        com a altura(height) do elemento, no caso eu ja sabia que o
        nav tinha 135px */        
        
        $(".img-div1").addClass("img-zoom");
        $(".row-about").addClass("zoom-about");
    }
    else{
       
        $(".img-div1").removeClass("img-zoom");
        $(".row-about").removeClass("zoom-about");
    }
}

$(document).scroll(()=>{/*Ativa uma funçao
     toda fez que houver a rolagem*/
    animeScroll();
})
