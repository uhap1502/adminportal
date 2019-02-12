import { ADD_POST, DELETE_POST, FETCH_POST ,FETCH_POSTBYID} from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/posts';
const apiUrlById ='http://localhost:3000/posts';

export const createPost = ({ title, body }) => {
    return (dispatch) => {
     // return axios.post(`${apiUrl}/add`, {title, body})
      return axios.post(apiUrl, {title, body})
        .then(response => {
          dispatch(createPostSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  
  export const createPostSuccess =  (data) => {
    return {
      type: ADD_POST,
      payload: {
        id: data.id,
        title: data.title,
        body: data.body
      }
    }
  };

  export const deletePostSuccess = id => {
    return {
      type: DELETE_POST,
      payload: {
        id
      }
    }
  }

 
  // export const  fetchPostByIdSuccess = id => {
  //   return {
  //     type: FETCH_POSTBYID,
  //     payload: {
  //       post
  //     }
  //   }
  // }


  
  export const deletePost = id => {
    return (dispatch) => {
      debugger;
      return axios.delete(apiUrl+"/"+id)
      
        .then(response => {
          dispatch(deletePostSuccess(response.data))
        })
        
        .catch(error => {
          throw(error);
        });
        console.log(apiUrl);
    };
  };
  
  export const fetchPosts = (posts) => {
    return {
      type: FETCH_POST,
      posts
    }
  };

  export const fetchPostByID = (post) => {
    return {
      type: FETCH_POSTBYID,
      post
    }
  };
  
  
  
  export const fetchAllPosts = () => {
    return (dispatch) => {
      return axios.get(apiUrl)
        .then(response => {
          dispatch(fetchPosts(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

  // export const fetchPostById=(id)=>{
  //   return (dispatch) =>{
  //     return axios.get(apiUrlById+"/"+id)
  //     .then(response =>{
  //       dispatch(fetchPostByID(response.data))
  //     })
  //     .catch(error =>{
  //       throw(error);
  //     })
  //   }
  // }


  // export const fetchPostById = id => {
  //   return (dispatch) => {
  //     debugger;
  //     return axios.get(apiUrl+"/"+id)
      
  //       .then(response => {
  //         dispatch(fetchPostByIdSuccess(response.data))
  //       })
        
  //       .catch(error => {
  //         throw(error);
  //       });
  //       console.log(apiUrl);
  //   };
  // };
