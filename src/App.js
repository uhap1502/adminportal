import React, { Component } from 'react';
import Allposts from './components/Allposts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';
import './App.css';
import NewPost from '../src/components/NewPost';
import PostDetail from  '../src/components/PostDetail';
class App extends Component {
  render() {
    debugger;
    console.log(this.props);
    return (
      <BrowserRouter>
        <Switch>
       {/* <Route  path='/PostDetail/:id' component={PostDetail}/> */}
       <Route  path='/NewPost/:id' component={NewPost}/>
   
      <div className="App">
       <CreatePost/>
       <div className="col-md-6">
            <PostList />
          </div>
      </div>
      </Switch>
      </BrowserRouter>
    
    );
  }
}

export default App;
