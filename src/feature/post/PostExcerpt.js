import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons'
const PostExcerpt = ({post}) => {
  return (
         <article>
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 100)}</p>
            <p className="blak">
              <PostAuthor userId={post.userId} />
              <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
  )
}

export default PostExcerpt