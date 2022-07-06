import React from 'react'
import {useSelector} from "react-redux"
import {selectAllPost} from "./postSlice"
import PostAuthor from "./PostAuthor";
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons'
const PostList = () => {
    // const posting=useSelector(state=>state.posts)
    const posting=useSelector(selectAllPost);
    const orderedPosts=posting.slice().sort((a,b)=>b.date.localeCompare(a.date))
    
    const renderPost=orderedPosts?.map(itme=>(
        <article key={itme.id}>
            <h2>{itme.title}</h2>
            <p>{itme.content}</p>
            <p className="blak">
              <PostAuthor userId={itme.userId} />
              <TimeAgo timestamp={itme.date} />
            </p>
            <ReactionButtons post={itme} />
        </article>
    ))
  return (
    <section>
        <h2>POSTS</h2>
       
        {renderPost}
    </section>
  )
}

export default PostList