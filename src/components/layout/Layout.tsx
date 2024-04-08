import { ToastContainer } from "react-toastify"
import Footer from "../footer/Footer"
import Sidebar from "../sidebar/Sidebar"
import { Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <>
      <Sidebar />
        <main>
          <Outlet />
        </main>
      <Footer />
      <ToastContainer
        autoClose={2000}
      />
    </>
  )
}

export default Layout