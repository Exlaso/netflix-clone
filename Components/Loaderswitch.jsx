import {cookies} from "next/headers";
import {redirect} from "next/navigation";



const Loaderswitch = ({ children }) => {

  return <body>{children}</body>;
};

export default Loaderswitch;
