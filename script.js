var button = document.getElementById("search-button-clear")
var searchbar = document.getElementById("search-bar")


function ShowClear(){
if (searchbar.value == "") {

    button.style.display = "none";

}
else{

    button.style.display = "block";
   
}
}

function ClearSearchbar(){

    searchbar.value="";
    ShowClear();
}