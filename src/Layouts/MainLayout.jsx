import { Outlet, useLocation } from "react-router-dom"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

const MainLayout = () => {
    const location = useLocation();
    const isAdminPage = location.pathname.includes('/admin');
    return (
        <div >
            <div>

                {!isAdminPage && <Header />}
                <Outlet />
                {!isAdminPage && <Footer />}
            </div>
        </div>
    )
}

export default MainLayout
