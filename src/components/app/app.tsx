import { Route, Routes } from "react-router-dom"
import { Root } from "../root/root"
import { NotFound } from "../../pages/not-found/not-found"

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}