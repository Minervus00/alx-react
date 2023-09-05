import React from  'react';
import { getFullYear, getFooterCopy } from "../utils/utils";
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        {this.props.user && <p><a href='#'>Contact us</a></p>}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user'),
  };
};

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

export default connect(mapStateToProps, null)(Footer);
