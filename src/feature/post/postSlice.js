import {createSlice, nanoid, createAsyncThunk} from "@reduxjs/toolkit";
import {sub} from 'date-fns';
import axios from 'axios';

const POST_URL='https://jsonplaceholder.typicode.com/posts';


const initialState = {
    posts: [],
    status:'idle',
    error:null,
}

    export const fetchPosts= createAsyncThunk('posts/fetchPosts', async()=>{
        try {
            const res=await axios.get(POST_URL);
            return res.data;
        } catch (error) {
            return error.message
        }
    });


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
           state.posts.push(action.payload)
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
         const existingPost=state.posts.find(post => post.id === postId);
         if(existingPost) {
             existingPost.reactions[reaction]++;
         }
     },

     extraReducers(builder) {
        //builder is an object thatt lets us find additional case reducer that run
        // and respose to the action defined outside of the slice;
        builder
            .addCase(fetchPosts.pending, (state, action)=>{
                state.staus='loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action)=>{
                state.status='succeded'

                //adding date and reactions;
                let min=1;

                const loadPosts=action.payload.map(post=>{
                    post.date=sub(new Date(), {minutes:min++}).toISOString();
                    post.reaction={
                        thumbsUp:0,
                        hooray:0,
                        heart:0,
                        rockey:0,
                        eyes:0,
                    }
                    return post;
                });
                // now add ourt loadposts to the state, since we dont have data nd reaction in our state

                state.posts=state.posts.concat(loadPosts)
            })

            .addCase(fetchPosts.rejected, (state, action)=>{
                state.status='failed'
                state.error=action.error.message
            })

     }
    }
})
export const selectAllPost=(state)=>state.posts.posts;
export const getPostsStatus=(state)=>state.posts.status;
export const getPostsError=(state)=>state.posts.error;


export const {postAdded, reactionAdded}=postSlice.actions;
export default postSlice.reducer;
    
