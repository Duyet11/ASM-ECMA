import { useEffect, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ProductPage from './pages/admin/product'
import DashboardPage from './pages/admin/dashboard'
import { Route, Routes } from 'react-router-dom'
import { addProducts, getProducts, removeProductById, updateProducts } from "./api/product"
import { ToastContainer, toast } from 'react-toastify';
import ProductAddPage from './pages/admin/product-add'
import ProductEditPage from './pages/admin/product-edit'

function App() {
  const [products,setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);
  const onHandleRemove = async (id) => {
    const confirm = window.confirm("Are you sure???");
    if(confirm) {
      try {
        await removeProductById(id);
        toast.success("Xoá thành công!");
        setProducts(products.filter(product => product.id !== id));
      } catch (error) {
        toast.error("Xoá thất bại");
      }
    }
    
  };
  const onHandleAdd = async (product) => {
    try {
      const data = await addProducts(product);
      toast.success("Thêm thành công!");
      setProducts([...products, data]);
    } catch (error) {
      toast.error(error)
    }
  };
  const onHandleUpdate = async (product) => {
    try {
      const data = await updateProducts(product);
      toast.success("Sửa thành công!");
      // setProducts([...products, data]);
      setProducts(products.map((item) => (item.id === product.id ? product : item)));
    } catch (error) {
      toast.error(error)
    }
  };
  return (
    <>
      <div>
        <Header/>
        <div className="container-fluid">
          <div className="row">
            <Sidebar/>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="admin" element={<DashboardPage/>} />
                <Route path="admin/products" element={<ProductPage products={products} onRemove={onHandleRemove}/>} />
                <Route path="admin/products/add" element={<ProductAddPage onAdd={onHandleAdd}/>} />
                <Route path="admin/products/:id/edit" element={<ProductEditPage onUpdate={onHandleUpdate}/>} />
              </Routes>
              
            </main>
          </div>
        </div>
        <ToastContainer/>
      </div>

      </>
    )
}

export default App
