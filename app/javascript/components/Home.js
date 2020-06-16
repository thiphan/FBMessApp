import React from "react"
import PropTypes from "prop-types"
class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        Tagline: {this.props.tagline}
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  tagline: PropTypes.string
};
export default Home
