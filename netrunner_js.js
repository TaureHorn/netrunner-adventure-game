function startGame() {

    document.addEventListener("keydown", function (event) {
        let inputBox = document.getElementById("input");
        let outputBox = document.getElementById("output");
        if (event.key === "Enter") {
            command = inputBox.value;
            (outputBox.innerHTML = command);
            (inputBox.value = '');
            // takes input value and prints to output box and wipes input field
        } else {
        }

    })
};
/// incomplete

//////////////////////////////////////// BUTTON TOGGLERS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const toggleButtonSectionIds = ["help-section", "readme", "shell-help", "glossary", "software-section", "readme-software", "music", "notes", "themes"];
const toggleHoverSectionIds = ["ls", "cat", "clear", "file", "ssh", "steghide", "arasaka", "militech", "netwatch"]

function toggleSection(section) {
    let x = document.getElementById(section);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


//////////////////////////////////////// SUBHEADER TOGGLERS //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////// SHELL COMMANDS //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////// THEMES //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const darkToggle = document.getElementById("theme-dark");
const highToggle = document.getElementById("theme-high-contrast");
const arasakaToggle = document.getElementById("theme-arasaka");
const whiteToggle = document.getElementById("theme-white");
const yellowToggle = document.getElementById("theme-yellow");
const blueToggle = document.getElementById("theme-bsod");
const themesToggle = document.getElementById("themes")

const cssLink = document.getElementById("css");

darkToggle.addEventListener('click', function () {
    darkToggle.style.opacity = "100%";
    highToggle.style.opacity = "50%";
    arasakaToggle.style.opacity = "50%";
    whiteToggle.style.opacity = "50%";
    yellowToggle.style.opacity = "50%";
    blueToggle.style.opacity = "50%";
    cssLink.setAttribute("href", "css/netrunner_dark.css")
})

highToggle.addEventListener('click', function () {
    darkToggle.style.opacity = "50%";
    highToggle.style.opacity = "100%";
    arasakaToggle.style.opacity = "50%";
    whiteToggle.style.opacity = "50%";
    yellowToggle.style.opacity = "50%";
    blueToggle.style.opacity = "50%";
    cssLink.setAttribute("href", "css/netrunner_high.css")
})

arasakaToggle.addEventListener('click', function () {
    darkToggle.style.opacity = "50%";
    highToggle.style.opacity = "50%";
    arasakaToggle.style.opacity = "100%";
    whiteToggle.style.opacity = "50%";
    yellowToggle.style.opacity = "50%";
    blueToggle.style.opacity = "50%";
    cssLink.setAttribute("href", "css/netrunner_arasaka.css")
})

whiteToggle.addEventListener('click', function () {
    darkToggle.style.opacity = "50%";
    highToggle.style.opacity = "50%";
    arasakaToggle.style.opacity = "50%";
    whiteToggle.style.opacity = "100%";
    yellowToggle.style.opacity = "50%";
    blueToggle.style.opacity = "50%";
    cssLink.setAttribute("href", "css/netrunner_white.css")
})

yellowToggle.addEventListener('click', function () {
    darkToggle.style.opacity = "50%";
    highToggle.style.opacity = "50%";
    arasakaToggle.style.opacity = "50%";
    whiteToggle.style.opacity = "50%";
    yellowToggle.style.opacity = "100%";
    blueToggle.style.opacity = "50%";
    cssLink.setAttribute("href", "css/netrunner_yellow.css")
})

blueToggle.addEventListener('click', function () {
    darkToggle.style.opacity = "50%";
    highToggle.style.opacity = "50%";
    arasakaToggle.style.opacity = "50%";
    whiteToggle.style.opacity = "50%";
    yellowToggle.style.opacity = "50%";
    blueToggle.style.opacity = "100%";
    cssLink.setAttribute("href", "css/netrunner_blue.css")
})

// legacy themeing function --- still might be useful as a reference

//     let borders = document.querySelectorAll(".borders").forEach(element => {
//         element.classList.add("borders-white");
//         element.classList.remove("borders");
//     });
// }
/////////////////////////////////////// LIVE LEARNING AND TESTING /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class character {
    constructor(name, description, pronoun, nickname) {
        this._name = name;
        this._desription = description;
        this._pronoun = pronoun;
        this._nickname = nickname;
    }

    describe() {
        return `${this._name}, the ${this._nickname},${this._desription}`;
    }

    greeting() {
        return `${this._name} is referred to as ${nickname}`
    }
}

const grim = new character("grim", " is a noobie netrunner", "he", "choom")
const shade = new character("shade", " is a circ' blasting cyber-phreak", "she", "eyes behind it all")
const bad = new character("b@d", " hates the tyger claws", "she", "b@dass")
const bugBear = new character("8ug8ear", "smokes tygers all night long", "she", "bug")
const spaceBoy = new character("SpaceBoy_66", " is a friend of the loa", "he", "vdb footsolider #n+999")
const tiNeptune = new character("TiNeptune", " is a thorn in Netwatch's rear end", "he", "t.i");
const luce = new character("luce", " a runner and a dreamer", "she", "lucy")

class directory {
    constructor(dirName, parentDirectory, childDirectory1, childDirectory2, childDirectory3, childDirectory4) {
        this._dirName = dirName;
        this._parentDirectory = parentDirectory;
        this._childDirectory1 = childDirectory1;
        this._childDirectory2 = childDirectory2;
        this._childDirectory3 = childDirectory3;
        this._childDirectory4 = childDirectory4;
    }

    ls() {
        return `current directory ${this._dirName} contains the following sub directories: ${this._childDirectory1}, ${this._childDirectory2}, ${this._childDirectory3}, ${this._childDirectory4}`;
    }
}

const root = new directory("/", "", "boot", "etc", "home", "usr",)
const home = new directory("~/", "/grim", "commands", "files", "gift-from-shade", "")
const commands = new directory("~/commands", "~/", "", "", "", "")
const giftFromShade = new directory("~/gift-from-shade", "~/", "reso-agwe-datamap", "", "", "")

console.log(giftFromShade.ls())

// https://github.com/TDAWebDevBootcamp/OOPs-I-made-a-game/blob/main/game%20final.js

/// user input collection - nicked from neils code :)))