// Clone trooper ID num randomizer
function randomIdGen(num) {
  num = Math.floor(Math.random() * 9999);
  if (num <= 1000 && num > 100) {
    return console.log(`Clone Trooper ID number : ----- CT-0${num} ----- \n`);
  }
  if (num <= 100 && num > 10) {
    return console.log(`Clone Trooper ID number : ----- CT-00${num} ----- \n`);
  }
  if (num <= 10 && num >= 0) {
    return console.log(`Clone Trooper ID number : ----- CT-000${num} ----- \n`);
  } else {
    return console.log(`Clone Trooper ID number : ----- CT-${num} ----- \n`);
  }
}

// > Give you a ID Number,

//> List of specialized Rank. Default = Regular clone trooper.
const cloneRank = [
  "Regular clone trooper",
  "Advanced Recon Commandos(ARC)",
  "Advanced Recon Force Scout Trooper(ARF)",
  "Biker Advanced Recon Commandos(BARC)",
  "Clone artillery troopers",
  "Clone Assault Troopers",
  "Clone commandos",
  "Clone Comms Technicians",
  "Clone Engineers",
  "Clone flametroopers",
  "Clone Gunners",
  "Clone jetpack troopers",
  "Clone trooper officiers",
  "Clone medics",
  "Clone navigation officers",
  "Clone ordnance specialists",
  "Clone paratroopers",
  "Clone riot Troopers",
  "Clone scout troopers",
  "Clone SCUBA troopers",
  "Clone shadow troopers",
  "Clone sharpshooters",
  "Clone shock Troopers",
  "Clone trooper flight crews",
  "Clone Trooper pilots",
  "Heavy Gunners",
  "Heavy Weapons clone troopers",
  "Maintenance duty clones",
  "Medical officer clones",
  "Special ops clone troopers",
  "Stealth clone pilots",
];

// Randomize the rank attribution, less chance of being a specialized clone trooper (1/4).
const generateCloneRank = (num) => {
  num = 0;
  function specializedOrNot(result) {
    result = Math.floor(Math.random() * 20);
    if (result >= 15) {
      num = Math.floor(Math.random() * cloneRank.length) + 1;
      return num;
    } else {
      return num;
    }
  }

  specializedOrNot();
  if (num === 0) {
    return console.log(
      `Your training is not complete soldier!\nWait for you first assignement.\nWelcome to the Army of the republic ${cloneRank[num]}                 `
    );
  } else {
    return console.log(
      `Be proud soldier !\nyour recent accomplishment made you part of the\n--> ${cloneRank[num]} force`
    );
  }
};
// Generate message linked to the rank attribution

//> Division,
const cloneDivision = [];
//> The last Jedi you fought with,
//> The Last planet you fought on,
// The Output Message
console.log(
  "************ GRAND ARMY OF THE REPUBLIC ID ATTRIBUTION ************ \n"
);

randomIdGen();

generateCloneRank();
