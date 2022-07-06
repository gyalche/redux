import {createSlice, nanoid} from "@reduxjs/toolkit";
import {sub} from 'date-fns';
const BASE_URL='https://jsonplaceholder.typicode.com/posts'

const initialState = {

    posts: [],
    status:'idle',
    error:null,
}


    // {id:"1",
    //  title:"Book",
    //   content:"Arms and the man drama",
    //      date:sub(new Date(), {minutes:10}).toISOString(),
    //  reactions:{
    //     thumbsUp:0,
    //     wow:0,
    //     heart:0,
    //     rocket:0,
    //     coffee:0
    // }
    // },

    // {id:"2",
    //  title:"Sports",
    // content:"The fifa worldcup 2022",
    // date:sub(new Date(), {minutes:5}).toISOString(),
    // reactions:{
    //     thumbsUp:0,
    //     wow:0,
    //     heart:0,
    //     rocket:0,
    //     coffee:0
    // }

    // }


export const postSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
       postAdded:{
           reducer(state, action) {
           state.posts.post.push(action.payload)
        },
        prepare(title, content, userId){
            return{
                payload:{
                    id:nanoid(),
                    title, 
                    content,
                    date:new Date().toISOString(),
                    userId,
                    reactions:{
                        thumbsUp:0,
                        wow:0,
                        heart:0,
                        rocket:0,
                        coffee:0
                    }
                }
            }
        }
     },

     reactionAdded(state, action) {
         const {postId, reaction} = action.payload;
         const existingPost=state.posts.post.find(post => post.id === postId);
         if(existingPost) {
             existingPost.reactions[reaction]++;
         }
     }
    }
})
export const selectAllPost=(state)=>state.posts.posts.posts;
export const {postAdded, reactionAdded}=postSlice.actions;
export default postSlice.reducer;
    
