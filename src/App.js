import './App.css';
import Layout from './components/Layout';
import AddPost from './feature/post/AddPost';
import PostList from './feature/post/PostList';
import SinglePostPage from './feature/post/SinglePostPage';
import { Routes, Route } from 'react-router-dom';
import EditPostForm from './feature/post/EditPostForm';
// import Counter from './feature/counter/Counter';

function App() {
  return (
    <div className="App">
      {/*<Counter />
            <AddPost />
        <PostList />
      */}

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<PostList />} />

        <Route path="post">
          <Route index element={<AddPost />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route ptah="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
