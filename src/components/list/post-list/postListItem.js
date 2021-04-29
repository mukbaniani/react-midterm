import { postProvider } from '../../../provider/postProvider';
import { useContext } from 'react';

function PostListItem({ post }) {
  const { postDelete } = useContext(postProvider);
  return (
    <div className="card">
      <div className="card-header">კომპანიის სახელი {post.name}</div>
      <div className="card-body">
        <h5 className="card-title">კომპანიის მეილი {post.email} </h5>
        <p className="card-text">ქვეყანა {post.country} </p>
        <button href="#" className="btn btn-primary me-2">
          საიტის მისამართი {post.website}
        </button>
        <button
          className="btn btn-danger"
          onClick={(post) => {
            postDelete(post);
          }}>
          წაშლა
        </button>
      </div>
    </div>
  );
}

export default PostListItem;
