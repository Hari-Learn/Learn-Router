import { Link, Outlet } from "react-router-dom"
const DashboardLayout = () => {
    return (
        <div>
            <h1>Dashboard Layout</h1>
            <nav>
                <Link to ="status" >Status -</Link>
                <Link to ="profile">Profile</Link>
            </nav>
            <hl/>
            <Outlet/>
        </div>
    )
}

export default DashboardLayout