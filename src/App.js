import './App.css';
import Layout from './components/Layout';
import AddPost from './feature/post/AddPost';
import PostList from './feature/post/PostList';
import SinglePostPage from './feature/post/SinglePostPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import EditPostForm from './feature/post/EditPostForm';
import UsersList from './feature/users/UsersList';
import UserPage from './feature/users/UserPage';
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

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
