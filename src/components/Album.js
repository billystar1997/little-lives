import React, { Component } from "react";
import AddImage from "./AddImage";
import { connect } from "react-redux";
import Lightbox from "lightbox-react";
class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      photoIndex: 0,
      isOpen: false
    };
  }


  handdleOnChangeLove = image => {
    image.isLove = !image.isLove;
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const picture = this.props.images.map(image => {
      return (
        <div className="column tile is-parent is-one-fifth" key={image.id}>
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <a onClick={() => this.setState({ isOpen: true })}>
                  <img src={image.fileSrc} alt="Placeholder" />
                </a>
              </figure>
            </div>
            <div className="card-content">
              <div className="content">{image.description}</div>
            </div>
            <input className="input-love" type="checkbox"
              id={image.id}
              defaultChecked={image.isLove}
              onChange={() => this.handdleOnChangeFavor(image)} />
            <label className="label-love" htmlFor={image.id}></label>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h2 className="title is-2">Images of album</h2>
        <div className="columns is-multiline">

          <AddImage />
          {picture}
          {isOpen && (
            <Lightbox
              mainSrc={this.props.images[photoIndex].fileSrc}
              nextSrc={
                this.props.images[(photoIndex + 1) % this.props.images.length].fileSrc
              }
              prevSrc={
                this.props.images[
                  (photoIndex + this.props.images.length - 1) %
                  this.props.images.length
                ].fileSrc
              }
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex:
                    (photoIndex + this.props.images.length - 1) %
                    this.props.images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % this.props.images.length
                })
              }
            />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    images: state.imagesReducer
  };
};
export default connect(mapStateToProps)(Album);
