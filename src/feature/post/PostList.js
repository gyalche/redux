import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {selectAllPost, getPostsStatus, getPostsError, fetchPosts} from "./postSlice"
// import PostAuthor from "./PostAuthor";
// import TimeAgo from './TimeAgo';
// import ReactionButtons from './ReactionButtons'
import PostExcerpt from './PostExcerpt';
const PostList = () => {
    // const posting=useSelector(state=>state.posts)
    const dispatch=useDispatch();

    const posting=useSelector(selectAllPost);
    const postStatus=useSelector(getPostsStatus);
    const postError=useSelector(getPostsError);

    useEffect(() => {
      if(postStatus==='idle'){
        dispatch(fetchPosts())
      }
    }, [postStatus, dispatch])

    let content;

    if(postStatus==="loading"){
      content=<p>"Loading ..."</p>
    }else if(postStatus==="succeded"){
      const orderPosts=posting.slice(0).sort((a,b)=>b.date.localeCompare(a.date))
       content=orderPosts?.map(post=><PostExcerpt key={post.key} post={post} />)
    }else if(postStatus==="failed"){
      content=<p>"failed.."</p>
    }

    // const orderedPosts=posting.slice().sort((a,b)=>b.date.localeCompare(a.date))
    
    // const renderPost=orderedPosts?.map(post=>(
        
    // ))
  return (
    <section>
        <h2>POSTS</h2>
       
        {content}
    </section>
  )
}

export default PostList