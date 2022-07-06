import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {postAdded} from './postSlice';
import {addNewPost} from './postSlice';
// import { nanoid } from '@reduxjs/toolkit';
import {selectAllUsers} from '../users/userSlice'
import styled from 'styled-components';
const AddPost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [usersId, setUsersId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const users=useSelector(selectAllUsers)

    const dispatch=useDispatch();

    const onTitleChange=(e) => {
        setTitle(e.target.value);

    }
    const onContentChange=(e) => {
        setContent(e.target.value);
    }

    const onAuthorChanged=(e) => {
        setUsersId(e.target.value)
    }

    const canSave=[title, content, usersId].every(Boolean) && addRequestStatus ==='idle';
    const onPostSave=(e) => {
        e.preventDefault();

        if(canSave) {
            try {
                setAddRequestStatus('pending');
                dispatch(addNewPost({title, body:content, usersId})).unwrap();

                setTitle('')
                setContent('')
                setUsersId('')

            } catch (error) {
                
            }
        }
        // if(title && content && usersId) {
        //     dispatch(
        //         // postAdded({
        //         //     id:nanoid,
        //         //     title,
        //         //     content,
        //         // })
        //         postAdded(title, content, usersId)
        //     )
        //     setTitle('')
        //     setContent('')
        //     setUsersId('')
        // }
    }

    // const canSave=Boolean(title) && Boolean(content) && Boolean(usersId);
    const usersOptions=users.map(user=>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
  return (
    <section>
        <h2>Add a new post</h2>
        <form>
            <Label>Post Name</Label>
            <Input type="text"
            id="post title"
            placeholder="post title"
            value={title}
            onChange={onTitleChange}
            
            /><br></br>
            <label htmlFor="postAuthor">Author</label>
            <select id="poastAuthor" value={usersId} onChange={onAuthorChanged}>
                <option value=""></option>
                {usersOptions}
            </select><br></br>
            <label>content</label>
            <Input type="text"
            id="content"
            placeholder="content"
            value={content}
            onChange={onContentChange}
            />
                <br></br>
            <button type="submit" 
            onClick={onPostSave}
            disabled={!canSave}
            >Save</button>

        </form>
    </section>
  )
}
const Label=styled.label`
    margin:30px 0;

`
const Input=styled.input`
    padding:10px;
    margin:10px 0;
`
export default AddPost