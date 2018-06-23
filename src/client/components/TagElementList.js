import React from 'react';
import { PropTypes } from 'prop-types';
import uuidv4 from 'uuid/v4';
import TagInfo from './TagInfo';
import ErrorMessage from './ErrorMessage';

const TagElementList = ({ tagsResult, error }) => (
  <div>
    {
      error.response ? (
        <ErrorMessage
          errorObj={error}
        />
      ) :
      Object.keys(tagsResult).map(
        objProp => (
          <div className='result-element-container' key={uuidv4()}>
            <h2 className='title'>
              {objProp} elements found
            </h2>
            <ul>
              {
                tagsResult[objProp].map(
                  tagObj => (
                    <li className='result-element-info' key={uuidv4()}>
                      <TagInfo
                        title='Inner Text'
                        content={tagObj.innerText}
                      />
                      <TagInfo
                        title='Inner HTML'
                        content={tagObj.innerHTML}
                      />
                    </li>
                  )
                )
              }
            </ul>
          </div>
        )
      )
    }
  </div>
);

TagElementList.propTypes = {
  tagsResult: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
};

export default TagElementList;
