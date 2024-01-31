import  { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { menuList } from "../api/menu";


import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Sidebar = () => {
   const navigate = useNavigate();
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await menuList();
      setMenus(data);
    })();
  }, []);
  
  function Logout() {
    localStorage.removeItem("token");
    toast.success("Logout thành công!");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }
  return (
    <div
      style={{ height: "100vh", width: "200px" }}
      className='sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary'>
      <div
        className='offcanvas-md offcanvas-end bg-body-tertiary'
        tabIndex={-1}
        id='sidebarMenu'
        aria-labelledby='sidebarMenuLabel'>
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title' id='sidebarMenuLabel'>
            Company name
          </h5>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='offcanvas'
            data-bs-target='#sidebarMenu'
            aria-label='Close'
          />
        </div>
        <div className='offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto'>
          <ul className='nav flex-column'>
            {menus.map((menu, index) => (
              <li key={index} className='nav-item'>
                <NavLink
                  className='nav-link d-flex align-items-center gap-2 active'
                  aria-current='page'
                  to={menu.path}>
                  {menu.label}
                </NavLink>
              </li>
            ))}
            <li className='nav-item'>
              <p
                onClick={Logout}
                className='nav-link d-flex align-items-center gap-2 active'
                aria-current='page'>
                Logout
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
