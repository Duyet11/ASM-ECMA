import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Header = () => {
  let user = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  function Logout() {
    localStorage.removeItem("token");
    toast.success("Logout thành công!");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }
  return (
    <>
      <>
        <nav
          className='navbar navbar-expand-lg navbar-light bg-light fixed-top '
          style={{ marginBottom: "20px" }}>
          <div className='container'>
            <p className='' style={{ padding: "10px 0" }} href='#'>
              Phạm Thế Duyệt
            </p>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarResponsive'
              aria-controls='navbarResponsive'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarResponsive'>
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item active'>
                  <a className='nav-link' href='#'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    About
                  </a>
                </li>

                {user && Object.keys(user).length !== 0 ? (
                  <li className='nav-item'>
                    <p className='nav-link' onClick={Logout}>
                      Logout
                    </p>
                  </li>
                ) : (
                  <>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/login'>
                        Login
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/register'>
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </>
    </>
  );
};

export default Header;
