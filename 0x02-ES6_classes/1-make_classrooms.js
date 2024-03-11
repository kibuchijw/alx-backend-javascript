import ClassRoom from './0-classroom';

function initializeRooms() {
  const sizes = [19, 20, 34];
  return sizes.map((size) => new ClassRoom(size));
}

export default initializeRooms;
