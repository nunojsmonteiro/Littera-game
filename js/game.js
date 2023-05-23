//Game//

const height = 6; // guesses
const width = 4; // length

let row = 0; // current guess
let col = 0; // current letter

let gameOver = false;

//Words | Littera
const dictionary = [
  "able",
  "acid",
  "aged",
  "aims",
  "also",
  "alto",
  "amen",
  "amid",
  "ammo",
  "ante",
  "anti",
  "apex",
  "arch",
  "area",
  "army",
  "aunt",
  "auto",
  "away",
  "axis",
  "baby",
  "back",
  "bail",
  "bake",
  "bald",
  "band",
  "bank",
  "base",
  "bath",
  "bean",
  "bear",
  "beat",
  "been",
  "beer",
  "bell",
  "belt",
  "bend",
  "bent",
  "best",
  "beta",
  "bias",
  "bike",
  "bill",
  "bind",
  "bird",
  "bite",
  "black",
  "blank",
  "blast",
  "bleed",
  "blend",
  "bless",
  "blew",
  "blink",
  "bloc",
  "blow",
  "blue",
  "blur",
  "boat",
  "body",
  "boil",
  "bold",
  "bolt",
  "bomb",
  "bond",
  "bone",
  "book",
  "boom",
  "born",
  "boss",
  "both",
  "bout",
  "bowl",
  "boys",
  "brat",
  "brew",
  "brick",
  "bride",
  "brief",
  "bring",
  "brink",
  "bros",
  "bulb",
  "bulk",
  "bull",
  "bump",
  "burn",
  "bust",
  "busy",
  "buzz",
  "cake",
  "calm",
  "came",
  "camp",
  "card",
  "care",
  "carp",
  "cars",
  "cart",
  "case",
  "cash",
  "cast",
  "cats",
  "cave",
  "cell",
  "cent",
  "chat",
  "chef",
  "chew",
  "chic",
  "chin",
  "chip",
  "chow",
  "city",
  "clap",
];

const magicalWord =
  dictionary[Math.floor(Math.random() * dictionary.length)].toUpperCase();
console.log(magicalWord);

//const magicalWord = "FEAR";

/*/let myAudio = document.querySelector('#audio')
myAudio.play()

<audio id="audio" autoplay loop  controls src="music/my_music.mp3"></audio> */

//when the window loads
window.onload = () => {
  createSquares();
};

//Board//

function createSquares() {
  for (let i = 0; i < height; i++) {
    for (let v = 0; v < width; v++) {
      let lbox = document.createElement("span");
      lbox.id = i.toString() + "-" + v.toString();
      lbox.classList.add("lbox");
      lbox.innerText = " ";
      document.getElementById("bbox").appendChild(lbox);
    }
  }
}

//Keyes dinamic - not let the user puts a lot of letter//

document.addEventListener("keyup", (event) => {
  if (gameOver) return;

  if ("KeyA" <= event.code && event.code <= "KeyZ") {
    if (col < width) {
      let currLbox = document.getElementById(
        row.toString() + "-" + col.toString()
      );

      if (currLbox.innerText == "") {
        currLbox.innerText = event.code[3]; //index 3 from all keyes - ex. keyA
        col += 1;
      }
    }
  } else if (event.code === "Backspace") {
    if (0 < col && col <= width) {
      //you cannot backspace when you're in i0
      col -= 1;
    }
    let currLbox = document.getElementById(
      row.toString() + "-" + col.toString()
    );
    currLbox.innerText = "";
  } else if (event.code === "Enter") {
    update();
    row += 1;
    col = 0; //position starts
  }

  //magicalWord to win the game
  if (!gameOver && row === height) {
    gameOver = true;
    document.getElementById("answer").innerText = magicalWord;
  }
});

function update() {
  let correct = 0;

  //check if letter is correct or present
  for (let c = 0; c < width; c++) {
    let currLbox = document.getElementById(row.toString() + "-" + c.toString());
    let littera = currLbox.innerText;

    //is correct?
    if (magicalWord[c] === littera) {
      currLbox.classList.add("correct");
      correct += 1;
    }
    //is present?
    else if (magicalWord.includes(littera)) {
      currLbox.classList.add("present");
    }
    //is incorrect?
    else {
      currLbox.classList.add("incorrect");
    }
  }

  //if all letters are correct, game is over
  if (correct === width) {
    gameOver = true;
  }

  //check if letter is correct or present
  for (let c = 0; c < width; c++) {
    let currLbox = document.getElementById(row.toString() + "-" + c.toString());
    let littera = currLbox.innerText;

    //is correct?
    if (magicalWord[c] === littera) {
      currLbox.classList.add("correct");
      correct += 1;
    }
    //is present?
    else if (magicalWord.includes(littera)) {
      currLbox.classList.add("present");
    }
    //is incorrect?
    else {
      currLbox.classList.add("incorrect");
    }
  }

  //if all letters are correct, game is over
  if (correct === width) {
    gameOver = true;
  }

  //check if letter is correct or present
  for (let c = 0; c < width; c++) {
    let currLbox = document.getElementById(row.toString() + "-" + c.toString());
    let littera = currLbox.innerText;

    //is correct?
    if (magicalWord[c] === littera) {
      currLbox.classList.add("correct");
      correct += 1; // it will color green
    }
    //is present?
    else if (magicalWord.includes(littera)) {
      currLbox.classList.add("present");
      //it will color yellow
    }
    //is incorrect?
    else {
      currLbox.classList.add("incorrect");
      //   //it will color red
      // }
    }
    //if all letters are correct, gameOver!
    if (correct === width) {
      gameOver = true;
    }
  }
}
