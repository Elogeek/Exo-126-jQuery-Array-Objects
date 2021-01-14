let arrObj = [
    {"person" : "Mark","age":25, "avatar":"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"},
    {"person" : "Bill", "age":65, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"},
    {"person" : "Spencer", "age" : 34, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"}
];


//Methode js native pour parcourir un tableau d'objets ( avec for...in )
/*for(let i in arrObj) {
    // i est l'index de mon tableau d'objet
    console.log("index = " + i);
    // j'accède à mon tableau d'objet comme n'importe quel tableau
    console.log("arrObj = " + arrObj[i]);
    // J'accéde à une propriété particuliére de mon objet ,ici l'age
    console.log("age = " + arrObj[i].age);
}
//Autre méthode : utilisation de forEach
arrObj.forEach(function(arr) {
    //Afficher la propriété age pour chaque objet contenu dans mon tableau
   console.log("Resultat avec foreach = " + arr.age);
});
//Méthode utilisant jQuery
$.each(arrObj, function(index, value) {
    //Afficher la propriété age pour chaque objet contenu dans mon tableau
   console.log("Affichage age utilisant jQuery = " + value.age);
});*/
let page = $("div");

if(page[0].classList.contains("div1")) {
    $("body").append('<div id="avatar"></div>').append('<div id="name"></div>').append('<button id="left"><</button>').append('<button id="right">></button>');

    perso(0);

    function perso(x) {
        $('#avatar').width("40%").height("500px").css({
            "background-image": "url(" + arrObj[x].avatar + ")",
            "background-size": "cover",
            "margin": "auto"
        });

        $('#name').text(arrObj[x].person + "(" + arrObj[x].age + ")").addClass(x).css({
            "margin": "2% 0 2% 0",
            "width": "100%",
            "text-align": "center"
        });

        $('#left').css("margin-left", "47.5%").click(function () {
            if(x !== 0) {
                perso(x - 1);
            }
        });

        $('#right').click(function () {
            if(x !== (arrObj.length - 1)) {
                perso(x + 1);
            }
        });
    }
}

if(page[0].classList.contains("div2")) {
    let div = $('div');

    for(let x = 0; x < arrObj.length; x++) {
        $("body").append('<div class="'+ x +'"></div>').append('<p id="'+ x +'"></p>');

        $("."+ x +"").width("10%").height("150px").css({
            "background-image": "url(" + arrObj[x].avatar + ")",
            "background-size": "cover",
            "margin": "auto"
        });

        $("#"+ x +"").text(arrObj[x].person + "(" + arrObj[x].age + ")").addClass(x).css({
            "margin": "2% 0 2% 0",
            "width": "100%",
            "text-align": "center"
        });
    }
}


