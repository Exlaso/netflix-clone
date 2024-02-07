import {redirect} from "next/navigation";
import {auth} from "@clerk/nextjs";

const Layout = ({children}) => {
    const { userId } = auth();
    if (!userId) {
        redirect("/sign-in");
    }
    return children
}


export default Layout;