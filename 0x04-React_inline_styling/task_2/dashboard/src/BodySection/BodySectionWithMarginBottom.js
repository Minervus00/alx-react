import React from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

export default class BodySectionWithMarginBottom extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={css(styles.marginBottom)}>
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

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: '40px'
  }
});
