import React from 'react';
import { PropTypes } from 'prop-types';

const ErrorMessage = ({ errorObj }) => (
  <div style={{
    color: 'red',
  }}
  >
    <h4>
      There was an error fetching results: <br />
    </h4>
    <pre>
      {JSON.stringify(errorObj, null, 2)}
    </pre>
  </div>
);

ErrorMessage.propTypes = {
  errorObj: PropTypes.object.isRequired,
};

export default ErrorMessage;
