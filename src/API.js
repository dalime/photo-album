import ServerActions from './actions/ServerActions';
import axios from 'axios';

const API = {
  getAlbums() {
    axios.get('/api/albums')
      .then(res => ServerActions.receiveAlbums(res.data))
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
