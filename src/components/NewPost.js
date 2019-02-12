import React, { Component } from 'react'
import { fetchPostById } from '../actions';
import axios from 'axios';


export class NewPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      body: '',
      query: '',

    };
  }


  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim() && this.state.body.trim()) {
      debugger;
      this.props.onAddPost(this.state);
      this.handleReset();
    }
  };

  handleReset = (test) => {
    this.setState({
      title: '',
      body: ''
    });

  };

  test = () => {
    console.log("testcal");

  }



  componentDidMount = () => {
    console.log(this.props);
    debugger;

    console.log(this.props);
    if (this.props && this.props.match) {
      const apiUrl = 'http://localhost:3000/posts/';
      console.log("test", this.props);
      const id = this.props.match.params.id;
      axios.get(apiUrl + id)
        .then(res => {
          console.log(res);
          const post = res.data;
          console.log(this.post);
          this.setState({ title: post.title, body: post.body });
        });
    }

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Add Post</h1>
          <div className="form-group">
            <input
              type="text"
              placeholder="Title"
              className="form-control"
              name="title"
              onChange={this.handleInputChange}
              value={this.state.title}
            />
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="Body"
              className="form-control"
              name="body"
              onChange={this.handleInputChange}
              value={this.state.body}>
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Add Post</button>
            <button type="button" className="btn btn-warning" onClick={this.handleReset}>
              Reset
        </button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewPost
