import React, { Component } from 'react'

export class PostDetail extends Component {
    constructor(props, context) {
        super(props, context);    
        this.state = {
          ...this.state,        
          post: {title: '', body: ''},
          title: '', body: ''
        };
      }

    handleInputChange =()=>{

    }
    
    handleReset =()=>{

    }
    render() {
        return (
            <div>
                <form >
                    <input
                        placeholder="Search for..."
                        ref={input => this.search = input}
                        onChange={this.handleInputSearchChange}
                    />

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

export default PostDetail
