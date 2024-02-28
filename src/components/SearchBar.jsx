import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSignUpBtn = () => {
    // Navigate to the desired route
    navigate('/signup');
  };

  const handleLogInBtn = () => {
    // Navigate to the desired route
    navigate('/login');
  };

  return (
    <div className='search-container'>
        <div className="logo">Brayen</div>
        <div className="search-input">
            <input />
            <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="flex">
            <button className="btn signup-btn" onClick={handleSignUpBtn}>Signup</button>
            <button className="btn login-btn" onClick={handleLogInBtn}>Login</button>
        </div>
    </div>
  )
}

export default SearchBar