import { useContext } from 'react';
import { postProvider } from '../../provider/postProvider';

function Pagination() {
  const { paginateby20, paginateby30, paginateby10 } = useContext(postProvider);

  return (
    <div className="container">
      <button
        className="btn btn-success w-100 mt-2"
        onClick={() => {
          paginateby10();
        }}>
        1 გვერდზე 10 პოსტი
      </button>
      <button
        className="btn btn-success w-100 mt-2"
        onClick={() => {
          paginateby20();
        }}>
        1 გვერდზე 20 პოსტი
      </button>
      <button
        className="btn btn-success w-100 mt-2"
        onClick={() => {
          paginateby30();
        }}>
        1 გვერდზე 30 პოსტი
      </button>
    </div>
  );
}

export default Pagination;
