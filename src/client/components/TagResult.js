import React from 'react';
import { PropTypes } from 'prop-types';
import uuidv4 from 'uuid/v4';

const TagResult = props => (
  <div>
    {
      Object.keys(props.tagsResult).map(
      objProp => (
        <ul key={uuidv4()}>
          <h2>
            {objProp}
          </h2>
          {
            props.tagsResult[objProp].map(
              tagObj => (
                <li key={uuidv4()}>
                  <h4>
                    Inner Text
                  </h4>
                  <div>
                    {tagObj.innerText}
                  </div>
                  <h4>
                    Inner HTML
                  </h4>
                  <div>
                    {tagObj.innerHTML}
                  </div>
                </li>
              )
            )
          }
        </ul>
        )
      )
    }
  </div>
);

TagResult.propTypes = {
  tagsResult: PropTypes.object.isRequired,
};

export default TagResult;
