const gameData = {
    start: {
        text: "You are in a small village, hearing rumors about a legendary artifact. Do you go to the forest or the mountains?",
        choices: [{ text: "Go to the Forest", consequence: "forest" }, { text: "Go to the Mountains", consequence: "mountains" }],
        image: "village.png"
    },
    forest: {
        text: "You enter the forest and encounter a wise old man. Do you ask for a riddle or a map?",
        choices: [{ text: "Ask for a Riddle", consequence: "forestRiddle" }, { text: "Ask for a Map", consequence: "forestMap" }],
        image: "forest.png"
    },
    mountains: {
        text: "You approach the mountains and see a dragon. Do you fight the dragon or try to talk to it?",
        choices: [{ text: "Fight the Dragon", consequence: "fightDragon" }, { text: "Talk to the Dragon", consequence: "talkDragon" }],
        image: "mountains.png"
    },
    forestRiddle: {
        text: "The old man asks: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?'",
        choices: [{ text: "Answer: An Echo", consequence: "riddleCorrect" }, { text: "Give Up", consequence: "riddleFail" }],
        image: "old_man.png"
    },
    forestMap: {
        text: "The traveler gives you a map with two paths. Do you take the left path or the right path?",
        choices: [{ text: "Left Path", consequence: "leftPath" }, { text: "Right Path", consequence: "rightPath" }],
        image: "map.png"
    },
    fightDragon: {
        text: "You choose to fight the dragon. It breathes fire. Do you dodge or use your shield?",
        choices: [{ text: "Dodge", consequence: "dodgeFire" }, { text: "Use Shield", consequence: "shieldFire" }],
        image: "dragon.png"
    },
    talkDragon: {
        text: "You try to talk to the dragon. It asks you a riddle: 'What has to be broken before you can use it?'",
        choices: [{ text: "Answer: An Egg", consequence: "dragonRiddleCorrect" }, { text: "Give Up", consequence: "dragonRiddleFail" }],
        image: "dragon_talk.png"
    },
    riddleCorrect: {
        text: "Correct! The old man shows you a secret path leading to the artifact.",
        choices: [{ text: "Follow the Path", consequence: "artifactFound" }],
        image: "secret_path.png"
    },
    riddleFail: {
        text: "Wrong answer! The forest becomes dark, and you find yourself back in the village.",
        choices: [{ text: "Start Over", consequence: "start" }],
        image: "forest_dark.png"
    },
    leftPath: {
        text: "You take the left path and find a mysterious cave. Do you enter the cave or go back?",
        choices: [{ text: "Enter the Cave", consequence: "cave" }, { text: "Go Back", consequence: "start" }],
        image: "left_path.png"
    },
    rightPath: {
        text: "You take the right path and encounter a group of bandits. Do you fight them or try to sneak past?",
        choices: [{ text: "Fight", consequence: "fightBandits" }, { text: "Sneak", consequence: "sneakBandits" }],
        image: "right_path.png"
    },
    dodgeFire: {
        text: "You successfully dodge the dragon's fire but fall into a pit. Game over.",
        choices: [{ text: "Start Over", consequence: "start" }],
        image: "pit.png"
    },
    shieldFire: {
        text: "Your shield withstands the fire, and the dragon respects your bravery, revealing a hidden path.",
        choices: [{ text: "Take the Path", consequence: "hiddenPath" }],
        image: "dragon_shield.png"
    },
    dragonRiddleCorrect: {
        text: "Correct! The dragon grants you passage to the mountain peak.",
        choices: [{ text: "Go to the Peak", consequence: "mountainPeak" }],
        image: "mountain_peak.png"
    },
    dragonRiddleFail: {
        text: "Wrong answer! The dragon sends you back to the village.",
        choices: [{ text: "Start Over", consequence: "start" }],
        image: "dragon_fail.png"
    },
    cave: {
        text: "Inside the cave, you find a treasure chest but it's locked. Do you try to open it or leave it?",
        choices: [{ text: "Try to Open", consequence: "openChest" }, { text: "Leave It", consequence: "leaveChest" }],
        image: "cave.png"
    },
    fightBandits: {
        text: "You bravely fight the bandits but are outnumbered. Game over.",
        choices: [{ text: "Start Over", consequence: "start" }],
        image: "bandits.png"
    },
    sneakBandits: {
        text: "You successfully sneak past the bandits and find a hidden path.",
        choices: [{ text: "Follow the Path", consequence: "hiddenPath" }],
        image: "sneak.png"
    },
    openChest: {
        text: "The chest contains a map to the artifact!",
        choices: [{ text: "Follow the Map", consequence: "artifactFound" }],
        image: "treasure_chest.png"
    },
    leaveChest: {
        text: "You leave the chest and exit the cave, only to be lost in the forest. Game over.",
        choices: [{ text: "Start Over", consequence: "start" }],
        image: "lost_forest.png"
    },
    hiddenPath: {
        text: "The hidden path leads you to the artifact!",
        choices: [{ text: "Claim the Artifact", consequence: "artifactFound" }],
        image: "hidden_path.png"
    },
    mountainPeak: {
        text: "At the mountain peak, you find the artifact guarded by a spirit. Do you talk to the spirit or try to take the artifact?",
        choices: [{ text: "Talk to the Spirit", consequence: "talkSpirit" }, { text: "Take the Artifact", consequence: "takeArtifact" }],
        image: "mountain_spirit.png"
    },
    talkSpirit: {
        text: "The spirit tells you a story of the artifact and then vanishes, leaving the artifact for you.",
        choices: [{ text: "Take the Artifact", consequence: "artifactFound" }],
        image: "spirit.png"
    },
    takeArtifact: {
        text: "You try to take the artifact, but the spirit curses you. Game over.",
        choices: [{ text: "Start Over", consequence: "start" }],
        image: "cursed.png"
    },
    artifactFound: {
        text: "You found the legendary artifact! Your journey is complete.",
        choices: [{ text: "Play Again", consequence: "start" }],
        image: "artifact.png"
    }
};


function startGame() {
    updatePage('start');
}

function updatePage(stageKey) {
    const stage = gameData[stageKey];
    document.getElementById('story').innerText = stage.text;
    const choicesSection = document.getElementById('choices');
    choicesSection.innerHTML = '';
    stage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.addEventListener('click', () => updatePage(choice.consequence));
        choicesSection.appendChild(button);
    });
    document.getElementById('story-image').src = stage.image;
}

function toggleAddendum() {
    const addendumSection = document.getElementById('addendum');
    addendumSection.style.display = addendumSection.style.display === 'none' ? 'block' : 'none';
}

function toggleNewSection() {
    const newSection = document.getElementById('new-section');
    newSection.style.display = newSection.style.display === 'none' ? 'block' : 'none';
}

window.onload = startGame;