import React, { Component } from 'react';
import { Link } from 'react-router';

import UserActions from '../actions/UserActions';
import AlbumStore from '../stores/AlbumStore';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      albums: AlbumStore.getAll()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    UserActions.getAlbums();
    AlbumStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    AlbumStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      albums: AlbumStore.getAll()
    })
  }

  render() {
    if (this.state.albums) {

      const Albums = this.state.albums.map((album, index) => {
        let path = `/album/${album._id}`;
        return (
          <div key={index} className="col-sm-3 col-md-3 col-lg-3">
            <h4>{album.name}</h4>
            <Link to={path}><h5>View Album</h5></Link>
          </div>
        )
      })


      return (
        <div className="container">
        <div className="row">
        <h1>Photo Albums</h1>
        </div>
        <div className="row">
        <div className="container col-sm-12 col-md-12 col-lg-12">
        {Albums}
        </div>
        </div>
        </div>
      )

    } else {
      return (
        <h1>Loading...</h1>
      )
    }
  }
}
