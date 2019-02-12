import React from 'react';
import {Postform } from '../components/Postform';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const styles = {
    borderBottom: '2px solid #eee',
    background: '#fafafa',
    margin: '.75rem auto',
    padding: '.6rem 1rem',
    maxWidth: '500px',
    borderRadius: '7px'
};

export default ({ post: { title, body, id }, onDelete }) => {
    return (
        <div style={styles}>
            <table>
                <tr>
                    <td>{title}</td>
                    <td>{body}</td>
                    <td> <button className="btn btn-danger" type="button" onClick={() => onDelete(id)}>
                        Remove
      </button>
                    </td>
                    <td>
                        {/* <Link to={`/Postform/${id}`} activeClassName="current">{id}</Link> */}                       
                     
                       <Link to={`/NewPost/${id}`} params={{ id: id }}> GET{id}</Link>
                    </td>
                </tr>
            </table>


        </div>
    );
};