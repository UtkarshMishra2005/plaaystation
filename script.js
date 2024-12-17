




let games = document.querySelector(".gamesParent");

let hiddenDIV1 = document.querySelector(".hiddenDIVs");

let currVar =  "true";

games.addEventListener("click" , ()=>{


    if (window.matchMedia("(min-width : 999px )" ).matches) {

    if ( currVar ==="true"){


        hiddenDIV1.style.display ="block";

        currVar="false";
    }




    else {


        
        hiddenDIV1.style.display ="none";

        currVar="true";

    }
}


    if (window.matchMedia("(max-width : 999px )" ).matches) {


        hiddenDIV1.style.display = "none";
    }
 




});



let nav2 = document.querySelector(".nav2");

let gamesclick  = document.querySelector(".gamesclick");

let nav2firstChild = document.querySelector(".nav2firstChild");





        
    
   
// games.addEventListener("click", () => {


//     if (window.matchMedia("(max-width : 999px )" ).matches)  {

//         nav2firstChild.style.height ="150vh";
         


//         gamesclick.style.height ="55vh";

        
//         nav2.style.height ="200vh";
        

//         games.style.height ="60vh";

//     }




// });


let hiddenSearchBar = document.querySelector(".hiddenSearchbar");

let TypeToSearch = docement.querySelector(".TypeToSearch");


let Search2 = document.querySelector(".search2");


let search = document.querySelector(".search");



let currVar2 = "true";
search.addEventListener("click" ,()=> {



    if (window.matchMedia("(min-width : 999px )" ).matches) {

        if ( currVar2 ==="true"){
    
    
            hiddenSearchBar.style.display ="block";
    
            currVar2="false";
        }
    
    
    
    
        else {
    
    
            
            hiddenSearchBar.style.display ="none";
    
            currVar2="true";
    
        }
    }
    
    
        if (window.matchMedia("(max-width : 999px )" ).matches) {
    
    
            hiddenSearchBar.style.display = "none";
        }
     
    
    



});


















