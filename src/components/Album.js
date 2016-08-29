import React, { Component } from 'react';

export default class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: AlbumStore.getName(),
      photos: AlbumStore.getPhotos()
    }
  }

  render() {
    return (
      <div>
        <h1></h1>
      </div>
    )
  }
}
