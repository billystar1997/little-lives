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
            <input className="input-love" type="checkbox" id={image.id} value={image.isLove} />
            <label className="label-love" htmlFor={image.id}></label>
          </div>
        </div>
      );
    });
    return (
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
    );
  }
}
const mapStateToProps = state => {
  return {
    images: state.imagesReducer
  };
};
export default connect(mapStateToProps)(Album);
