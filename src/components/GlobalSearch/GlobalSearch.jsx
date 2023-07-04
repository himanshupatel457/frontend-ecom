// import React from 'react'
// import { useSearch } from '../../Context/searchContext'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './GlobalSearch.scss'

// const GlobalSearch = () => {



//     const [values, setValues] = useSearch();
//     const navigate = useNavigate();
//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/search/${values.keyword}`);
//             console.log(res);
//             setValues({...values,results : res.data });
//             navigate('/search')
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <div>
//             <form role='search' onSubmit={handleSubmit}>
//                 <input type='search' placeholder='search' aria-label='search' value={values.keyword} onChange={(e) => setValues({ ...values, keyword: e.target.value })} />
//                 <button type='submit'>Search</button>
//             </form>
//         </div>
//     )
// }

// export default GlobalSearch





// import React from 'react';
// import { useSearch } from '../../Context/searchContext';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './GlobalSearch.scss';

// const GlobalSearch = () => {
//   const [values, setValues] = useSearch();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/search/${values.keyword}`);
//       console.log(res);
//       setValues({ ...values, results: res.data });
//       navigate('/search');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//       <form role='search' onSubmit={handleSubmit}>
//         <input
//           type='search'
//           placeholder='Search'
//           aria-label='Search'
//           value={values.keyword}
//           onChange={(e) => setValues({ ...values, keyword: e.target.value })}
//           className="search-input"
//         />
//         <button type='submit' className="search-button">Search</button>
//       </form>
//   );
// };

// export default GlobalSearch;








import React from 'react';
import { useSearch } from '../../Context/searchContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import './GlobalSearch.scss';

const GlobalSearch = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/search/${values.keyword}`);
      console.log(res);
      setValues({ ...values, results: res.data });
      navigate('/search');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form role='search' onSubmit={handleSubmit} className="global-search">
      <TextField
        type='search'
        label='Search'
        variant='outlined'
        value={values.keyword}
        onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        className="search-input"
      />
      <Button type='submit' variant='contained' className="search-button">
        Search
      </Button>
    </form>
  );
};

export default GlobalSearch;
