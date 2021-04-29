import { useState, useContext } from 'react';
import { postProvider } from '../../../provider/postProvider';

function AddCompany() {
  const { addPost } = useContext(postProvider);
  const [mail, setMail] = useState('');
  const [name, setTName] = useState('');
  const [country, setCountry] = useState('');
  const [webSite, setWebSite] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addPost({ mail, name, country, webSite });
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <input
          className="form-control mt-4"
          placeholder="კომპანიის სახელი"
          value={name}
          onChange={(e) => {
            setTName(e.target.value);
          }}
        />
        <input
          className="form-control mt-4"
          placeholder="კომპანიის მეილი"
          value={mail}
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
        <input
          className="form-control mt-4"
          placeholder="ქვეყანა"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <input
          className="form-control mt-4"
          placeholder="ვებ საიტი"
          value={webSite}
          onChange={(e) => {
            setWebSite(e.target.value);
          }}
        />
        <button className="btn btn-primary"> დამატება </button>
      </form>
    </div>
  );
}

export default AddCompany;
