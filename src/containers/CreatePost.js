import { connect } from 'react-redux';
import { createPost } from '../actions';
import {fetchPostById}  from '../actions';
import NewPost from '../components/NewPost';

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => {
      debugger;
      dispatch(createPost(post));
    }
    
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewPost);