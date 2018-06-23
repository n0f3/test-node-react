import { connect } from 'react-redux';
import TagResult from '../components/TagResult';

const mapStateToProps = state => ({
  tagsResult: state.tagsResult,
});

export default connect(
  mapStateToProps,
)(TagResult);
