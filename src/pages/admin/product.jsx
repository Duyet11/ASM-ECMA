import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts, removeProductById } from "../../api/product";
import { toast } from "react-toastify";
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);

  
  const onHandleRemove = async (id) => {
    const confirm = window.confirm("Are you sure???");
    if (confirm) {
      try {
        await removeProductById(id);
        toast.success("Xoá thành công!");
        setProducts(products.filter((product) => product.id !== id));
      } catch (error) {
        toast.error("Xoá thất bại");
      }
    }
  };
  return (
    <>
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h1 className='h2'>QUẢN LÝ SẢN PHẨM</h1>
        <div className='btn-toolbar mb-2 mb-md-0'>
          <div className='btn-group me-2'>
            <Link
              to='/admin/products/add'
              className='btn btn-sm btn-outline-secondary'>
              Add Product
            </Link>
          </div>
        </div>
      </div>

      <div className='table-responsive small'>
        <table className='table table-striped table-sm'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Ảnh</th>
              <th scope='col'>Tên sản phẩm</th>
              <th scope='col'>Giá sản phẩm</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img src={product.image} alt={product.name} width={50} />
                </td>
                <td>
                  <h4>{product.name}</h4>
                </td>
                <td>
                  <span>{product.price}</span>
                </td>
                <td>
                  <div className='d-flex'>
                    <button
                      className='btn btn-danger'
                      onClick={() => onHandleRemove(product.id)}>
                      Delete
                    </button>
                    <Link
                      to={`/admin/products/${product.id}/edit`}
                      className='btn btn-primary ml-3'>
                      Update
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductPage;
