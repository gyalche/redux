
import './App.css';
import AddPost from './feature/post/AddPost';
import PostList from './feature/post/PostList';
// import Counter from './feature/counter/Counter';


function App() {
  return (
    <div className="App">
        {/*<Counter /> */}
        <PostList />
        <AddPost />
    </div>
  );
}

export default App;
