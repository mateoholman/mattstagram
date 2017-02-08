import React from 'react';
import Photo from './Photo';
//import Comments from './Comments';

const Single = React.createClass({
  render() {
    const index = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    const post = this.props.posts[index];
    return(
      <div>
        <Photo index={index} post={post} {...this.props} />
      </div>
    );
  }
});

export default Single;
