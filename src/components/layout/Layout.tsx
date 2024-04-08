import { ToastContainer } from "react-toastify"
import Sidebar from "../sidebar/Sidebar"
import { Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <>
      <Sidebar />
        <main>
          <Outlet />
        </main>
      <ToastContainer
        autoClose={2000}
      />
    </>
  )
}

export default Layout