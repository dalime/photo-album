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
}

export default PersonActions;
