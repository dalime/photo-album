import API from '../API';

const PersonActions = {
  getAlbums: API.getAlbums,
  getAlbum(id) {
    API.getAlbum(id);
  },
  addPhoto(id, url) {
    API.addPhoto(id, url);
  },
  getPhoto(id) {
    API.getPhoto(id);
  },
  editPhoto(id, url) {
    API.editPhoto(id, url);
  },
  deletePhoto(id) {
    API.deletePhoto(id);
  },
  addAlbum(name) {
    API.addAlbum(name);
  },
  editAlbum(id, name) {
    API.editAlbum(id, name);
  },
  deleteAlbum(id) {
    API.deleteAlbum(id);
  }
  // getAnimals() {
  //   API.getAnimals();
  // },
  // getAnimal(id) {
  //   API.getAnimal(id);
  // },
  // addAnimal(animalObj) {
  //   API.addAnimal(animalObj);
  // },
  // removeAnimal(id) {
  //   API.removeAnimal(id);
  // },
  // getPeople() {
  //   API.getPeople();
  // },
  // getPerson(id) {
  //   API.getPerson(id);
  // },
  // createPerson(obj) {
  //   API.createPerson(obj);
  // },
  // deletePerson(id) {
  //   API.deletePerson(id);
  // },
  // addOwner(animalId, personId) {
  //   API.addOwner(animalId, personId);
  // },
  // removeOwner(id) {
  //   API.removeOwner(id);
  // }
}

export default PersonActions;
