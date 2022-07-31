import { HeaderNav } from "./HeaderNav/HeaderNav";
import { Outlet } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <HeaderNav />
            <hr/>
            <Outlet/>
        </>
    )
}