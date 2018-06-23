import { connect } from 'react-redux';
import TagResult from '../components/TagResult';

const mapStateToProps = state => ({
  tagsResult: state.tagsResult,
  error: state.error,
  isLoading: state.isLoading,
});

export default connect(
  mapStateToProps,
)(TagResult);
