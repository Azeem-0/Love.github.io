

function random(){
    var rand = Math.random();
    rand = rand * 100;
    rand = Math.floor(rand)+1;
    // document.querySelector(".submit").classList.add("visibility");
    document.querySelector(".result p").innerHTML = "The ❤️ Percentage between Both of You is : " + rand;
}