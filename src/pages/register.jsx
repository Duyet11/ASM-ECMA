import { useForm } from "react-hook-form";
import { Register } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
  confirmpassword: yup.string().required(),
});
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  async function onSubmit(data) {
    if (data.password === data.confirmpassword) {
      const res = await Register({
        email: data.email,
        password: data.password,
      });
      if (res) {
        toast.success("Tạo tài khoản thành công!");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } else {
      toast.error("Mật khẩu không trùng khớp");
    }
  }
  return (
    <>
      <section style={{ marginTop: "90px", width: "100%" }}>
        <div className='  '>
          <div className='row  justify-content-center align-items-center '>
            <div className='' style={{ width: 900, height: 400 }}>
              <div className='card' style={{ borderRadius: "1rem" }}>
                <div className='row g-0'>
                  <div className='col-md-6 col-lg-5 d-none d-md-block'>
                    <img
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp'
                      alt='login form'
                      className='img-fluid'
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className='col-md-6 col-lg-7 d-flex align-items-center'>
                    <div className='card-body p-4 p-lg-5 text-black'>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='d-flex align-items-center mb-3 pb-1'>
                          <i
                            className='fas fa-cubes fa-2x me-3'
                            style={{ color: "#ff6219" }}
                          />
                          <span className='h1 fw-bold mb-0'>Register</span>
                        </div>

                        <div className='form-outline mb-4'>
                          <input
                            {...register("email")}
                            type='email'
                            id='form2Example17'
                            className='form-control form-control-lg'
                          />
                          <label
                            className='form-label'
                            htmlFor='form2Example17'>
                            Email address
                          </label>
                          <p style={{ color: "red" }}>
                            {errors?.email?.message}
                          </p>
                        </div>
                        <div className='form-outline mb-4'>
                          <input
                            {...register("password")}
                            type='password'
                            id='form2Example27'
                            className='form-control form-control-lg'
                          />
                          <label
                            className='form-label'
                            htmlFor='form2Example27'>
                            Password
                          </label>
                          <p style={{ color: "red" }}>
                            {errors?.password?.message}
                          </p>
                        </div>
                        <div className='form-outline mb-4'>
                          <input
                            {...register("confirmpassword")}
                            type='password'
                            id='form2Example27'
                            className='form-control form-control-lg'
                          />
                          <label
                            className='form-label'
                            htmlFor='form2Example27'>
                            Confirm-Password
                          </label>
                          <p style={{ color: "red" }}>
                            {errors?.confirmpassword?.message}
                          </p>
                        </div>
                        <div className='pt-1 mb-4'>
                          <button
                            className='btn btn-dark btn-lg btn-block'
                            type='submit'>
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
