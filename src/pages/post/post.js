import PostProviderComponent from '../../provider/postProvider';
import PostList from '../../components/list/post-list';

function Post() {
  return (
    <PostProviderComponent>
      <div className="container">
        <PostList />
      </div>
    </PostProviderComponent>
  );
}

export default Post;
