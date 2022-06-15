import { useNavigate, useLocation} from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../styles/NavBarStyle.css';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface props{
  changeTheme: () => void;
  isDarkTheme: boolean;
}

function NavBar({changeTheme, isDarkTheme}: props){
  const navigate = useNavigate();
  const location = useLocation();

  const BackButton = () => {
    return <div className="back-button">
      {location.pathname !== '/' && <ArrowBackIcon onClick={() => navigate(-1)}/>}
    </div>
  };

  return(
      <nav >
        <BackButton/>
        <div className="nav-links">
          <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")}
                   to="/">Home</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")}
                   to="/DinnerReservation" >Dinner reservation</NavLink>
        </div>
        <div className="theme-button">
          <IconButton sx={{ ml: 1 }} onClick={changeTheme} color="inherit">
            {isDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>

      </nav>
    )
}

export default NavBar
