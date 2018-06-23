import { connect } from 'react-redux';
import { getTagInfo } from '../actions/index';
import FindTag from '../components/FindTag';

const mapDispatchToProps = dispatch => ({
  getTag: (endpoint, tag) => dispatch(getTagInfo(endpoint, tag)),
});

export default connect(
  null,
  mapDispatchToProps,
)(FindTag);
