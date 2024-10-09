import Image from 'next/image';
import logo from '/public/high-low-media-256x256.png';
import Link from 'next/link';

export default function Masthead() {
    return (
        <div className="flex items-center justify-center w-1/5 mt-10 text-black">
        <Link
            href="/">
                <Image
                    src={logo}
                    width={120}
                    height={120}
                    alt="High Low Media"
                    className="max-w-none"
                    priority
                    unoptimized
                />
        </Link>
        </div>
    );
}
