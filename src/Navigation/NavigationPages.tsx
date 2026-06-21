import Home from "../MenuTabs/Menu/Home";
import Projects from "../MenuTabs/Menu/Projects";
import Contact from "../MenuTabs/Menu/Contact";
import About from "../MenuTabs/Menu/About";

export const NavigationPages = [
    {
        key: "/",
        label: "Home",
        element: <Home />,
    },
    {
        key: "/projects",
        label: "Projects",
        element: <Projects />,
    },
    {
        key: "/contact",
        label: "Contact",
        element: <Contact />,
    },
    {
        key: "/about",
        label: "About",
        element: <About />,
    },
];