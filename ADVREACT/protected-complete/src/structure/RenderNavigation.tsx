import { Link, Route, Routes } from "react-router-dom";
import { nav } from "./Navigation";
import { AuthData } from "../auth/AuthWrapper";

export const RenderRoutes = () => {

    const { user } = AuthData()

    return(
        <Routes>
            { nav.map((r, i) => {

                if(r.isPrivate && user.isAuthenticated) {
                    return <Route key={i} path={r.path} element={r.element} />
                } else if (!r.isPrivate) {
                    return <Route key={i} path={r.path} element={r.element}/>
               } else return false
            })}
        </Routes>
    )
}

export const RenderMenu = () => {

    const { user, logout } = AuthData()

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
            } else if (user.isAuthenticated && r.isMenu) {
                return (
                     <MenuItem key={i} r={r}/>
                )
           } else return false
        })}

        { user.isAuthenticated ?
            <div className="menuItem"><Link to={'#'} onClick={logout}>Log out</Link></div>
            :
            <div className="menuItem"><Link to={'login'}>Log in</Link></div> }

    </div>
    )
}