"use client";
import Link from "next/link";
import { links } from "@/utils/components/data/links"
import { usePathname } from "next/navigation";
import "navbar.css";
import { nanoid } from "nanoid";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="container">
            <ul className="link-list">
                {links.map((link) => (
                    <NavItem
                        key={nanoid}
                        link={link}
                        current={pathname === link.href}
                    />
                )
                )}
            </ul>
        </nav>
    )

}

function NavItem(link, current) {
    return (
        <li className="list-item">
            <link
                className={`link ${current && "current"}`}
                href={link.href}>
                {link.title}
            </link>
        </li>
    )
}
