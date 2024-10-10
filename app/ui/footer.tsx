'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Contact', href: 'mailto:info@highlowmedia.com' },
];

export default function Footer() {
    const pathname = usePathname();
    return (
    <footer className="fixed bottom-0 left-0 z-20 mb-(-1) w-full p-4 bg-black text-gray-400 md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm sm:text-center">©2024 <a href="/" className="hover:text-white">High Low Media</a>. All Rights Reserved.
        </span>
        <div className="flex flex-wrap items-center mt-0 text-sm font-medium">
        {links.map((link, i, links) => {
            return (
                <div key={'div' + link.name} className={((i + 1) !== links.length) ? "mr-3" : ""}>
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        'text-gray-400 hover:text-white',
                    {
                        'text-white hover:text-white': pathname === link.href,
                    },
                    )}
                >{link.name}</Link>
                </div>
            );
        })}
        </div>
    </footer>
    );
}
