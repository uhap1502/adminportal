import React, { Component } from 'react'

export class Postform extends Component {
    render() {
        return (
            <div>
                <form >
                    <input required type="text" placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" cols="28" placeholder="Enter Post" /><br /><br />
                    <button>Post</button>
                </form>
            </div>
        )
    }
}

export default Postform
