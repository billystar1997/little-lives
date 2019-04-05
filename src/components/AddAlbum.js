import React, { Component } from "react";
import Faker from "faker";
import Popup from "reactjs-popup";
import { connect } from "react-redux";

class AddAlbum extends Component {
  constructor() {
    super();
    this.state = {
      file: "",
      imagePreviewUrl: ""
    };
  }
  onSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const file = this.state.file;
    const fileSrc = this.state.imagePreviewUrl;
    const images = [];
    const album = {
      id: Faker.random.uuid(),
      title,
      file,
      fileSrc,
      images
    };
    console.log(album);
    this.props.dispatch({
      type: "ADD_ALBUM",
      album
    });
    this.getTitle.value = "";
    this.setState({ file: "", imagePreviewUrl: "" });
  };
  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      let file = event.target.files[0];
      reader.onload = e => {
        this.setState({ file: file, imagePreviewUrl: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  render() {
    console.log(this.state.file);
    return (
      <div className="tile is-parent is-one-fifth">
        <div className="card">
          <div className="card-image">
            <form onSubmit={this.onSubmit}>
              <Popup position="right center"
                trigger={
                  <a className="button button-import">
                    <i className="fa fa-plus-circle" />
                  </a>
                }
                modal
              >
                {close => (
                  <div className="actions">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-info"
                          ref={input => (this.getTitle = input)}
                          required
                          type="text"
                          placeholder="Enter Image Title..."
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="file is-centered is-large is-boxed has-name">
                        <label className="file-label">
                          <input
                            onChange={this.onImageChange}
                            className="file-input"
                            type="file"
                            name="resume"
                          />
                          <span className="file-cta">
                            <span className="file-icon">
                              <i className="fa fa-upload" />
                            </span>
                            <span className="file-label">Import cover photo</span>
                          </span>
                          <span className="file-name">
                            {this.state.file.name}
                          </span>
                        </label>
                      </div>
                    </div>
                    {this.state.imagePreviewUrl && (<figure class="image is-3by2">
                      <img id="target" src={this.state.imagePreviewUrl} />
                    </figure>)}
                    <div className="action-add">
                      <button className="button">Import</button>
                      <a
                        className="button"
                        onClick={() => {
                          close();
                        }}
                      >
                        {" "}
                        Close{" "}
                      </a>
                    </div>
                  </div>
                )}
              </Popup>
            </form>
          </div>
          <div className="card-content">Create New Album</div>
        </div>
      </div>
    );
  }
}
export default connect()(AddAlbum);
