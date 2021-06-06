const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");
const $winTitle = createElement("div", "loseTitle");

const player1 = {
    player: 1,
    name: "Sonya",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ["whip", "sword"],
    attack: function () {
        console.log(player1.name + " " + `Fight...`)
    }
}

const player2 = {
    player: 2,
    name: "Sub-Zero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["fire", "ice"],
    attack: function () {
        console.log(player2.name + " " + `Fight...`)
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);

    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(hero) {

    const $player = createElement("div", "player" + hero.player),
        $progressbar = createElement("div", "progressbar"),
        $character = createElement("div", "character"),
        $life = createElement("div", "life"),
        $name = createElement("div", "name"),
        $img = document.createElement("img");

    $img.src = hero.img;
    $life.style.width = hero.hp + "%";
    $name.innerText = hero.name;

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    return $player;
}

function changeHP(player) {
    const $playerLife = document.querySelector(".player" + player.player + " .life");

    if (player.hp <= 0) {
        $arenas.appendChild(playerWin(player.player));
        $playerLife.style.width = "0px";
    } else {
        player.hp -= randomizer();
        $playerLife.style.width = player.hp + "%";
    }
}

function playerWin(number) {

    if (number === 1) {
        $winTitle.innerText = player2.name + " wins!";
    } else if (player1.hp === player2.hp) {
        $winTitle.innerText = "Dead heat!";
    } else {
        $winTitle.innerText = player1.name + " wins!";
    }
    $winTitle.style.display = "block";
    $randomButton.disabled = true;
    return $winTitle;

}

function randomizer() {
    return Math.ceil(Math.random() * 20);
}

$randomButton.addEventListener("click", function () {
    changeHP(player1);
    changeHP(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));


