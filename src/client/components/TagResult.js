import React from 'react';
import { PropTypes } from 'prop-types';
import '../styles/TagResult.scss';
import TagElementList from './TagElementList';

const TagResult = ({ tagsResult, error, isLoading }) => (
  <div className='result-container'>
    {
      isLoading ? (
        <div>
          Fetching results...
        </div>
      ) : (
        <TagElementList
          tagsResult={tagsResult}
          error={error}
        />
      )
    }
  </div>
);

TagResult.propTypes = {
  tagsResult: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default TagResult;
