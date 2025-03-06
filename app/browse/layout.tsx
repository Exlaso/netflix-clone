import {redirect} from "next/navigation";
import {auth} from "@clerk/nextjs/server";

const Layout = async ({children}) => {
    const { userId } = await auth();
    if (!userId) {
        redirect("/sign-in");
    }
    return children
}


export default Layout;