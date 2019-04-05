import React, { Component } from "react";
import { connect } from "react-redux";
import AddAlbum from "./AddAlbum";

class ListAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: this.props.albums
    };
  }

  render() {
    console.log(this.state.albums);
    const picture = this.state.albums.map(album => {
      return (
        <div className="column tile is-parent is-one-fifth" key={album.id}>
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <a href={"albumdetail/" + album.id}>
                  <img src={album.image} alt="Placeholder" />
                </a>
              </figure>
            </div>
            <a href={"albumdetail/" + album.id}>
              <div className="card-content">
                <div className="content">{album.title}</div>
              </div>
            </a>
            <div>
              <input
                className="input-favor"
                type="checkbox"
                id={album.id}
                value={album.isLike}
              />
              <label className="label-favor" htmlFor={album.id} />
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="columns is-multiline">
        <AddAlbum />
        {picture}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    albums: state.albumsReducer
  };
};
export default connect(mapStateToProps)(ListAlbum);
