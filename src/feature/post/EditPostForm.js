import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPostById, updatePost, deletePost } from './postSlice';
import { useParams, useNavigate } from 'react-router-dom';

import { selectAllUsers } from '../users/userSlice';

const EditPostForm = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const user = useSelector(selectAllUsers);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);
  const [userId, setUserId] = useState(post?.userId);
  const [requestStatus, setRequestStatus] = useState('idle');

  const dispatch = useDispatch();

  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    );
  }

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const canSave =
    [title, content, userId].every(Boolean) && requestStatus === 'idle';

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setRequestStatus('pending');
        dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        ).unwrap();
      } catch (error) {
        console.error('failed to save the post', error);
      } finally {
        setRequestStatus('idle');
      }
    }
  };

  const usersOptions = user.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const onDeletePostClicked = () => {
    try {
      setRequestStatus('pending');
      dispatch(deletePost({ id: post.id })).wrap();
      setTitle('');
      setContent('');
      setUserId('');
      navigate('/');
    } catch (error) {
      console.error('Failed to delete the post', error);
    } finally {
      setRequestStatus('idle');
    }
  };
  return <div>EditPostForm</div>;
};

export default EditPostForm;
