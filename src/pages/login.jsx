import { useForm } from "react-hook-form";
import { Login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "" },
  });
  const navigate = useNavigate();
  async function onSubmit(data) {
    const res = await Login(data);

    if (res[0]) {
      toast.success("Login thành công!");
      localStorage.setItem("token", JSON.stringify(res[0]));
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    } else {
      toast.error("Tài khoản or mật khẩu sai");
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
                          <span className='h1 fw-bold mb-0'>Login</span>
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

export default LoginPage;
