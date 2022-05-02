import setNodeInNewPlace from "./setNodeInNewPlace";

const goblin = document.getElementById("goblin");
const places = document.getElementsByClassName("grid-item");
let curPlace = null;

const updateGoblin = () => {
  curPlace = setNodeInNewPlace(places, curPlace, goblin);
};

updateGoblin();
setInterval(updateGoblin, 700);
