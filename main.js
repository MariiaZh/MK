const player1 = {
    name: "Sonya",
    hp: 80,
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ["whip", "sword"],
    attack: function () {
        console.log(shao.name + " " + `Fight...`)
    }
}

const player2 = {
    name: "Sub-Zero",
    hp: 70,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["whip", "sword"],
    attack: function () {
        console.log(zero.name + " " + `Fight...`)
    }
}

const $arenas = document.querySelector(".arenas");

function createPlayer(playerClass, hero) {

    let $player = document.createElement("div"),
        $progressbar = document.createElement("div"),
        $character = document.createElement("div"),
        $life = document.createElement("div"),
        $name = document.createElement("div");

    $player.classList.add(playerClass);
    $progressbar.classList.add("progressbar");
    $character.classList.add("character");
    $life.classList.add("life");
    $name.classList.add("name");

    $arenas.appendChild($player);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $img = document.createElement("img");
    $img.src = hero.img;
    $character.appendChild($img);

    $life.style.width = hero.hp + "%";
    $name.innerText = hero.name;
}

createPlayer("player1", player1);

createPlayer("player2", player2);
