var searchItems = [
    ["./assets/slider images/Crowne Plaza Main Entrance.jpg","Crowne Plaza Main Entrance"],
    ["./assets/slider images/Main Porch.jpg","Main Porch"],
    ["./assets/slider images/Reception.jpg","Reception"],
    ["./assets/slider images/Pre Function Area.jpg","Pre Function Area"],
    ["./assets/slider images/Inspire.jpg","Inspire"],
    ["./assets/slider images/Inspire 1.jpg","Inspire 1"],
    ["./assets/slider images/Inspire 2.jpg","Inspire 2"],
    ["./assets/slider images/Inspire 3.jpg","Inspire 3"],
    ["./assets/slider images/Lobby.jpg","Lobby"],
    ["./assets/slider images/Aroma.jpg","Aroma"],
    ["./assets/slider images/Essence.jpg","Essence"],
    ["./assets/slider images/Buffet Area.jpg","Buffet Area"],
    ["./assets/slider images/Spa and Gym.jpg","Spa and Gym"],
    ["./assets/slider images/Treatment Room.jpg","Treatment Room"],
    ["./assets/slider images/Gym.jpg","Gym"],
    ["./assets/slider images/Pool.jpg","Pool"],
    ["./assets/slider images/Rang and Business Center.jpg","Rang and Business Center"],
    ["./assets/slider images/Rang.jpg","Rang"],
    ["./assets/slider images/Board Room.jpg","Board Room"],
    ["./assets/slider images/Business Centre.jpg","Business Centre"],
    ["./assets/slider images/Towards Room Corridor.jpg","Towards Room Corridor"],
    ["./assets/slider images/Executive Suite - Living Room.jpg","Executive Suite - Living Room"],
    ["./assets/slider images/Executive Room.jpg","Executive Suite Bedroom"],
    ["./assets/slider images/Executive Suite Bathroom.jpg","Executive Suite Bathroom"],
    ["./assets/slider images/Deluxe Twin Room.jpg","Deluxe Twin Room"],
    ["./assets/slider images/Twin Room Bathroom.jpg","Twin Room Bathroom"],
    ["./assets/slider images/Deluxe King Room.jpg","Deluxe King Room"],
    ["./assets/slider images/Junior Suite.jpg","Junior Suite"],
]

function searchPano(){
    let txt= document.getElementById("search_text").value;
    txt=capitalizeTheFirstLetterOfEachWord(txt)
    var arr = [];
    // for(let obj of searchItems){
    let myres = obj => obj[1].includes(txt);
    let myres1=searchItems.findIndex(myres);
    
    // if (myres1 || myres1 === 0)
    //     arr.push(myres1);
    // }

    // console.log(myres1);
    // console.log(searchItems[myres1])
    let pop_up_list = document.getElementById("pop_li")
    if (pop_up_list){
        pop_up_list.remove();
    }
    let search_ul = document.getElementById("search_ul");
    let myli = document.createElement("li");
    myli.id="pop_li";
    let img_div = document.createElement("div")
    img_div.classList.add("search_poup_li_img");
    let img = document.createElement("img");
    img.style.width="100px";
    img.src = searchItems[myres1][0];
    img_div.appendChild(img);

    let txt_div = document.createElement("div")
    txt_div.classList.add("search_poup_li_txt");
    txt_div.innerText = searchItems[myres1][1];
    myli.appendChild(img_div);
    myli.appendChild(txt_div);
    myli.addEventListener("click",function(){
        document.getElementById("search_box").style.display = "none";
        changePanoramaFromNextandPrevious(myres1);
    })
    search_ul.appendChild(myli);
}
// searchPano(searchItems,"c");

//var res = searchItems.findIndex(element => element[1].includes("y"))
//console.log(res);
function capitalizeTheFirstLetterOfEachWord(words) {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
    return separateWord.join(' ');
 }