//New game
document.getElementById("run").addEventListener("click", () => {
    //Empty the score
    //Start the new game
    newGame();
})

//Assign them the values

function newGame() {
    let pokemons = ["pikachu", "eevee", "gyarados", "charizard", "mewtwo", "magikarp", "squirtle", "gengar", "charmander", "bulbasaur", "pikachu", "eevee", "gyarados", "charizard", "mewtwo", "magikarp", "squirtle", "gengar", "charmander", "bulbasaur",];

    function shuffle(arr1) {
        let ctr = arr1.length, temp, index;
        while (ctr > 0) {

            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arr1[ctr];
            arr1[ctr] = arr1[index];
            arr1[index] = temp;
        }
        return arr1;
    }

    let list = [];

    let theArr = (shuffle(pokemons));
    for (let i = 0; i < 20; i++) {
        let tab = theArr[i];
        list.push(tab);
    }
    console.log(list);
//Select the buttons
    let table = [];
    document.querySelectorAll("img").forEach((img, index) => {
        img.addEventListener("click", () => {
            //Make them flip
            let check = img.getAttribute("src")
            console.log(check);
            img.src = "img/" + list[index-1] + ".png";
            table.push(img);
            checking();
        });

        function checking(table) {
            if (table.length === 2) {
                if (table[0].src === table[1].src) {
                    table[0].src = "img/backS.png";
                }
            }
        }
    })

}
newGame();


//Check the value of the tho
//Flip again if not equal
//Remove if equal and add points
//Make a new game on click
//Add new player on click
//Add effects on a flip
