import * as React from "react";
import {useNavigate} from "react-router";



 export const Navbar = () => {
    const navigate = useNavigate()

        return (
            <nav className={"nav"}>
            <a href={"/"} className={"home"}>
                Home
            </a>
            <ul>
                <li>
                    <a href={"/login"}>
                        Login
                    </a>
                </li>

                </ul>
            </nav>
        );

}