import React from 'react';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import { Link, useParams } from 'react-router-dom';

let PostExcerpt = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 75)}</p>
      <p className="blak">
        <Link to={`/post/${post.id}`}>view post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};
PostExcerpt = React.memo(PostExcerpt); //it allows this component to not render if the props its receive has not changed;

export default PostExcerpt;
