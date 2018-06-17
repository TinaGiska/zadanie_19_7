import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbDownComment} from './index'

const mapDispatchToProps = dispatch => ({
  thumbDownComment: (id) => dispatch(thumbDownComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);
