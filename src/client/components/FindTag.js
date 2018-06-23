import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import '../styles/FindTag.scss';

class FindTag extends Component {
  static propTypes = {
    getTag: PropTypes.func.isRequired,
  };

  state = {
    endPointInput: '',
    tagInput: '',
  };

  handleEndpointChange = (event) => {
    this.setState({
      ...this.state,
      endPointInput: event.target.value,
    });
  };

  handleTagChange = (event) => {
    this.setState({
      ...this.state,
      tagInput: event.target.value,
    });
  };

  handleSubmit = () => {
    if (
      this.state.endPointInput !== '' &&
      this.state.tagInput !== ''
    ) {
      this.props.getTag(this.state.endPointInput, this.state.tagInput);
    }
  };

  render() {
    return (
      <div className='FindTag'>
        <input
          type='text'
          name='endpoint'
          placeholder='Enter endpoint to search'
          onChange={this.handleEndpointChange}
        />
        <input
          type='text'
          name='tag'
          placeholder='Enter html tag to search in endpoint page'
          onChange={this.handleTagChange}
        />
        <button
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default FindTag;
