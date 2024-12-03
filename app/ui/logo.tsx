import Image from 'next/image';
import logo from '/public/high-low-media-black-2000x2000.png';

export default function Logo() {
  return (
    <Image
        src={logo}
        width={256}
        height={256}
        alt="High Low Media"
        priority
        unoptimized
    />
  );
}
