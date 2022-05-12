const getRandomPlace = (places = new HTMLCollection()) => places.item(
  Math.random() * places.length,
);

const getNewPlace = (places, curPlace) => {
  let randomPlace;
  do {
    randomPlace = getRandomPlace(places);
  } while (randomPlace === curPlace);
  return randomPlace;
};

const setNodeInNewPlace = (places, curPlace, node) => {
  const newPlace = getNewPlace(places, curPlace);
  newPlace.append && newPlace.append(node);
  return newPlace;
};

export default setNodeInNewPlace;
