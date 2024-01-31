import instance from "./config";

export const Login = async (auth: any) => {
  try {
    const { data } = await instance.get(
      `/users?email=${auth.email}&password=${auth.password}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (auth: any) => {
  try {
    const { data } = await instance.post(`/users`, auth);
    return data;
  } catch (error) {
    console.log(error);
  }
};
