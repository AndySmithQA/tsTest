import { Link, Route, Routes } from "react-router-dom";
import { nav } from "./Navigation";

export const RenderRoutes = () => {

    return(
        <Routes>
            { nav.map((r, i) => {

                if(!r.isPrivate) {
                    return <Route key={i} path={r.path} element={r.element} />
                } else return false
            })}
        </Routes>
    )
}

export const RenderMenu = () => {

    interface NavItem {
        path: string;
        name: string;
        isPrivate: boolean;
        isMenu: boolean;
        element?: JSX.Element;
    }

    const MenuItem = ({r}: {r: NavItem}) => {
        return (
            <div className="menuitem"><Link to={r.path}>{r.name}</Link></div>
        )
    }

    return (
        <div className="menu">
            { nav.map((r, i) => {
                if(r.isMenu && !r.isPrivate) {
                    return <MenuItem key={i} r={r} />
                } else return false
            })}
        </div>
    )
}