import React from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css";

export default class BodySectionWithMarginBottom extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...this.props}/>
      </div>
    );
  }
}

BodySectionWithMarginBottom.defaultProps = {
  title: "No title given",
  children: <></>
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
};
