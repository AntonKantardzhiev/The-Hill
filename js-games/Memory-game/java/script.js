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
    let list =[];

    let theArr = (shuffle(pokemons));
    for (let i = 0; i < 20; i++) {
        let id = (i + 1);
        let tab =  theArr[i];

        list.push(tab);


    }
//Select the buttons
    Array.from(document.querySelectorAll("button")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            let images = document.querySelectorAll("img");
            switch ($btn.id){
                case 1:
                    images[0].src= list[0]+"png";
            }
        });



    })

}



//Make them flip
//Check the value of the tho
//Flip again if not equal
//Remove if equal and add points
//Make a new game on click
//Add new player on click
//Add effects on a flip
