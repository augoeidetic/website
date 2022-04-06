import React from "react";
import Link from "next/link"

const Navbar = () => (
    <nav className="flex header">
        <button className="mobile-header-menu-toggle" aria-controls="header-menu" aria-expanded="false"><span className="sr-only">Menu</span></button>

        <ul id="header-menu" className="flex header-menu" data-visible="false">
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/tech"><a>Tech</a></Link></li>
            <li><Link href="/food"><a>Food</a></Link></li>
            <li><Link href="/fiction"><a>Fiction</a></Link></li>
        </ul>
    </nav>
);

export default Navbar;
