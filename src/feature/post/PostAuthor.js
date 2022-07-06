import { useSelector } from "react-redux";
import {selectAllUsers} from "../users/userSlice"

import React from 'react'

const PostAuthor = ({userId}) => {
    const user=useSelector(selectAllUsers)
    const author=user.find(user => user.id===userId)
  return (
        <span>
            by{author? author.name : 'unknown author'}
        </span>
  )
}

export default PostAuthor