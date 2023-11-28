import {redirect} from "next/navigation";
import {cookies} from "next/headers";

const Layout = ({children}) => {
    const token = cookies().get("token");
    if (!token) {
        redirect("/login");
    }
    return children
}


export default Layout;