import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addProducts } from "../../api/product";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object({
  name: yup.string().required(),
  image: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
});
const ProductAddPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const res = await addProducts(data);
    if (res) {
      toast.success("Thêm thành công!");
      setTimeout(() => {
        navigate("/admin/products");
      }, 100);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "600px" }}>
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h1 className='h2'>THÊM SẢN PHẨM</h1>
      </div>
      <div className='mb-3 mt-5'>
        <label htmlFor='productName' className='form-label'>
          Tên sản phẩm
        </label>
        <input
          type='text'
          {...register("name")}
          id='productName'
          className='form-control'
        />
        <p style={{ color: "red" }}>{errors?.name?.message}</p>
      </div>
      <div className='mb-3'>
        <label htmlFor='productImage' className='form-label'>
          Ảnh sản phẩm
        </label>
        <input
          type='text'
          {...register("image")}
          id='productImage'
          className='form-control'
        />
        <p style={{ color: "red" }}>{errors?.image?.message}</p>
      </div>
      <div className='mb-3'>
        <label htmlFor='productPrice' className='form-label'>
          Giá sản phẩm
        </label>
        <input
          type='number'
          {...register("price")}
          id='productPrice'
          className='form-control'
        />
        <p style={{ color: "red" }}>{errors?.price?.message}</p>
      </div>
      <div className='mb-3'>
        <label htmlFor='productDesc' className='form-label'>
          Mô tả sản phẩm
        </label>
        <textarea
          className='form-control'
          {...register("description")}
          id='productDesc'
          cols='30'
          rows='2'></textarea>
        <p style={{ color: "red" }}>{errors?.description?.message}</p>
      </div>
      <button type='submit' className='btn btn-primary'>
        Thêm
      </button>
    </form>
  );
};

export default ProductAddPage;
