import React, { useState, useEffect } from 'react';
import API_SERVICE from '../services/api';

export const postProvider = React.createContext(null);

function PostProviderComponent({ children }) {
  const [postList, setPostList] = useState([]);
  const [num, setNum] = useState(10);

  useEffect(() => {
    API_SERVICE.getPosList({ number: num, callback: setPostList });
  }, [num]);

  const addPost = (newPost) => {
    setPostList([...postList, newPost]);
  };

  const paginateby10 = () => {
    setNum(10);
  };

  const paginateby20 = () => {
    setNum(20);
  };

  const paginateby30 = () => {
    setNum(30);
  };

  const postDelete = (post) => {
    const newState = postList.filter((el) => el.name !== post.name);
    setPostList(newState);
  };
  return (
    <postProvider.Provider
      value={{
        title: 'todo provider',
        postList,
        setPostList,
        addPost,
        postDelete,
        paginateby10,
        paginateby20,
        paginateby30,
      }}>
      {children}
    </postProvider.Provider>
  );
}

export default PostProviderComponent;
