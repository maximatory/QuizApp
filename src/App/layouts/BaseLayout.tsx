import { Outlet } from "react-router-dom"

const BaseLayout = () => {
return(
    <>
        <h1>Base layout</h1>
        <Outlet/>
    </>
)
}

export default BaseLayout