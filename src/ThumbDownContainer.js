
import {connect} from 'react-redux';
import ThumbDown from './ThumbDown';
import {addComment} from './actions'

const mapDispatchToProps = dispatch => ({
    addComment: (text) => dispatch(addComment(text)),
});

export default connect(null, mapDispatchToProps)(ThumbDown);
