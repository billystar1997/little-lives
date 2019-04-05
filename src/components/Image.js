import React, { Component } from "react";
import PropTypes from "prop-types";

class Image extends Component {
  static propTypes = {
    image: PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      source: PropTypes.string
    }).isRequired
  };
  render() {
    return (
      <div>
        <h1>This is a image</h1>
      </div>
    );
  }
}

export default Image;
