/* let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A","B","C"]


shufle(cards)

console.log(cards)

function shufle(array){

    let currentIndex = array.length;

    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * array.length)
        currentIndex-=1

        let temp = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temp 
    }

    return array    

} */
//mapiranje - objekat koji dva para kljuc i vrednost

/* const store  = new Map([

    ["t-shirt", 20 ],
    ["jeans", 30 ],
    ["socks", 20 ],
    ["underwear", 50 ],
   ])

    let shoppingCart = 0

    /* shoppingCart += store.get("t-shirt");
    shoppingCart += store.get("underwear"); */
    //store.set("hat", 40);
    //store.delete("hat");
    //console.log(shoppingCart);
    //console.log(store.has("hat"));
    //console.log(store.size);


    //store.forEach((value, key) => console.log(key + "$" +value)) */

    /* const car = {
        model: "Mustang",
        color: "red",
        year: 2023,

        drive:function(){
            console.log("You drive the car")
        },

        brake : function(){
            console.log("You stop on the brake:" + this.model);
        }
    }
    const car2 = {
        model: "Ford",
        color: "blue",
        year: 2023,

        drive:function(){
            console.log("You drive the car:" + this.model)
        },

        brake : function(){
            console.log("You stop on the brake");
        }
    }

    /*console.log(car.model);
    console.log(car.color);
    console.log(car.year);
    console.log(car2.model);
    console.log(car2.color);
    console.log(car2.year);*/

   /*  car.drive();
    car.brake();

    car2.drive();
    car2.brake();  */

    //klasa

    class Player{

        score=0;

        pause(){
            console.log("You paused the game");
        }
        exit(){
            console.log("You exited the game");
        }
    }

    const player1 = new Player();

    player1.score +=1;
    console.log(player1.score);

    player1.pause();
    player1.exit();