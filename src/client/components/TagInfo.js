import React from 'react';
import { PropTypes } from 'prop-types';
import '../styles/TagInfo.scss';

const TagInfo = ({ title, content }) => (
  <div className='tag-info'>
    <h4>
      {title}
    </h4>
    <p>
      {content}
    </p>
  </div>
);

TagInfo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TagInfo;
