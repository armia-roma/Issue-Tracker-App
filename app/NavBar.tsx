"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";
import {AiFillBug} from "react-icons/ai";
function NavBar() {
	const currentPath = usePathname();
	// console.log(currentPath);
	const links = [
		{label: "Dashboard", href: "/"},
		{label: "Issues", href: "/Issues"},
	];
	return (
		<nav className={`flex space-x-6 border-b mb-5 px-5 h-14 items-center `}>
			<Link href="/">
				<AiFillBug></AiFillBug>
			</Link>
			<ul className="flex items-center space-x-6">
				{links.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className={`${
							link.href === currentPath
								? "text-zinc-900 "
								: "text-zinc-500"
						} hover:text-zinc-700 transition-colors`}
					>
						{link.label}
					</Link>
				))}
			</ul>
		</nav>
	);
}

export default NavBar;
