import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import MainLayout from "../Layouts/MainLayout";
import CoursesPage from "./CoursesPage";
import About from "./About";
import TeamPage from "./TeamPage";
import ProjectsPage from "./ProjectsPage";
import CoursesFields from "../Components/CoursesFields/CoursesFields";
import CoursePage from "./CoursePage";
import AdminPage from "../Admin/AddminPage";

const USER_TYPES = {
    PUBLIC: "Public User",
    NORMAL_USER: "Normal user",
    ADMIN_USER: "Admin User"
};

const CURRENT_USER_TYPE = USER_TYPES.ADMIN_USER;

const Pages = () => {
    return (
        <div>
            <AppRouter />
        </div>
    );
};

function AppRouter() {
    const CustomerRouter = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/courses",
                    element: <CoursesPage />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/team",
                    element: <TeamPage />
                },
                {
                    path: "/projects",
                    element: <ProjectsPage />
                },
                {
                    path: "/coursePage/:coursePageId",
                    element: <CoursePage />
                },
                {
                    path: "/coursesField/:coursesFieldId",
                    element: <CoursesFields />
                },
                {
                    path: "/admin",
                    element: <AdminElement><AdminPage /></AdminElement>
                }
            ]
        }
    ]);

    return <RouterProvider router={CustomerRouter} />;
}

// Public Element wrapper
// function PublicElement({ children }) {
//     return <>{children}</>;
// }

// Admin Element wrapper
// eslint-disable-next-line react/prop-types
function AdminElement({ children }) {
    if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
        return <>{children}</>;
    } else {
        return <div>You do not have access to this page!</div>;
    }
}

export default Pages;
