import { Outlet } from "react-router-dom";
import { AppHeader } from "../app-header/app-header";
import * as s from './root.module.css';

export const Root = () => {
    return (
        <div className={s.root}>
            <AppHeader />
            <Outlet />
        </div>
    )
}