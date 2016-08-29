import ServerActions from './actions/ServerActions';
import axios from 'axios';

const API = {
  getAlbums() {
    axios.get('/api/albums')
      .then(res => ServerActions.receiveAlbums(res.data))
      .catch(console.error);
  },
  getAlbum(id) {
    axios.get(`/api/albums/${id}`)
      .then(res => ServerActions.receiveAlbum(res.data))
      .catch(console.error);
  },
  addPhoto(id, url) {
    let newBody = { url };
    axios.post(`/api/photos`, newBody)
      .then(res => this.addPhotoToAlbum(id, res.data._id))
      //.then(addPhotoToAlbum(id, url))
      .catch(console.error);
  },
  addPhotoToAlbum(albumId, photoId) {
    axios.put(`/api/albums/${albumId}/addPhoto/${photoId}`)
      .then(res => ServerActions.receiveAlbum(res.data))
      .catch(console.error);
  },
  getPhoto(id) {
    axios.get(`/api/photos/${id}`)
      .then(res => ServerActions.receivePhoto(res.data))
      .catch(console.error);
  },
  editPhoto(id, url) {
    let editBody = { url };
    axios.put(`/api/photos/${id}`, url)
      .then(res => ServerActions.receiveEditPhotos(res.data))
      .catch(console.error);
  },
  deletePhoto(id) {
    axios.delete(`/api/photos/${id}`)
      .then(res => ServerActions.receiveDeletePhoto(res.data))
      .catch(console.error);
  },
  addAlbum(name) {
    let newAlbum = { name }
    axios.post(`/api/albums`, newAlbum)
      .then(res => ServerActions.receiveNewAlbum(res.data))
      .catch(console.error);
  },
  editAlbum(id, name) {
    let editAlbum = { name };
    axios.put(`/api/albums/${id}`, editAlbum)
      .then(res => ServerActions.receiveEditAlbum(res.data))
      .catch(console.error);
  },
  deleteAlbum(id) {
    axios.delete(`/api/albums/${id}`)
      .then(res => ServerActions.receiveDeleteAlbum(res.data))
      .catch(console.error);
  }
  // getPhotos() {
  //   axios.get('/api/animals')
  //     .then(res => ServerActions.receiveAnimals(res.data))
  //     .catch(console.error);
  // },
  // getAnimal(id) {
  //   axios.get(`/api/animals/${id}`)
  //     .then(res => ServerActions.receiveAnimal(res.data))
  //     .catch(console.error);
  // },
  // addAnimal(animalObj) {
  //   axios.post(`/api/animals`, animalObj)
  //     .then(res => ServerActions.addAnimal(res.data))
  //     .catch(console.error);
  // },
  // removeAnimal(id) {
  //   axios.delete(`/api/animals/${id}`)
  //     .then(res => ServerActions.removeAnimal(res.data))
  //     .catch(console.error);
  // },
  // getPeople() {
  //   axios.get('/api/people')
  //     .then(res => ServerActions.receivePeople(res.data))
  //     .catch(console.error);
  // },
  // getPerson(id) {
  //   axios.get(`/api/people/${id}`)
  //     .then(res => ServerActions.receivePerson(res.data))
  //     .catch(console.error);
  // },
  // createPerson(obj) {
  //   axios.post('/api/people', obj)
  //     .then(res => ServerActions.createPerson(res.data))
  //     .catch(console.error);
  // },
  // deletePerson(id) {
  //   axios.delete(`/api/people/${id}`)
  //     .then(res => ServerActions.deletePerson(res.data))
  //     .catch(console.error);
  // },
  // addOwner(animalId, personId) {
  //   axios.put(`/api/animals/${animalId}/addOwner/${personId}`)
  //     .then(res => ServerActions.receiveAnimal(res.data))
  //     .catch(console.error);
  // },
  // removeOwner(animalId) {
  //   axios.put(`/api/animals/${animalId}/removeOwner`)
  //     .then(res => ServerActions.receiveAnimal(res.data))
  //     .catch(console.error);
  // }
}

export default API;
