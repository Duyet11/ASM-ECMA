import React from 'react'

const RegisterPage = () => {
  return (
    <div className='row justify-content-center'>
        <form className="form-signin col-md-4 row justify-content-center">
            <img className="mb-4 mt-4" src="https://ap.poly.edu.vn/images/logo.png" alt  height={120} />
            <h1 className="h3 mb-3 font-weight-normal text-center">Đăng kí</h1>
            <label htmlFor="inputEmail" className="sr-only">User Name</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email..." required autofocus />
            <label htmlFor="inputEmail" className="sr-only">Email</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email..." required autofocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password..." required />
            <label htmlFor="inputPassword" className="sr-only">Confirm Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password..." required />
        
            <button className="btn btn-lg btn-primary btn-block" type="submit">Chốt</button>
        </form>
    </div>

  )
}

export default RegisterPage