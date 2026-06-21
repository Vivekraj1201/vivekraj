import { Routes, Route } from "react-router-dom";

import MenuTabNavigation from "./MenuTabNavigation";
import SocialContact from "../MenuTabs/SocialContact";

import Home from "../MenuTabs/Menu/Home";
import Projects from "../MenuTabs/Menu/Projects";
import Contact from "../MenuTabs/Menu/Contact";
import About from "../MenuTabs/Menu/About";

function NavigationRoute() {
    return (
        <>
            <MenuTabNavigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <SocialContact />
        </>
    );
}

export default NavigationRoute;