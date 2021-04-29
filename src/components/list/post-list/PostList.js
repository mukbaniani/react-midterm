import PostListItem from './postListItem';
import { postProvider } from '../../../provider/postProvider';
import { useContext } from 'react';

function PostList() {
  const { postList } = useContext(postProvider);
  return (
    <div className="row col-12">
      <ul className="list-group">
        {postList.map((post) => {
          return <PostListItem post={post} key={post.name} />;
        })}
      </ul>
    </div>
  );
}

export default PostList;
