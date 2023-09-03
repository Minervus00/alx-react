import React from "react";
import PropTypes from "prop-types";

export default class BodySection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bodySection">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

BodySection.defaultProps = {
  title: "No title given",
  children: <></>
};

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
};
