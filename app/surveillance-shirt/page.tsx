'use client';

import Footer from '@/app/ui/footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    document.title = "High Low Media | Surveillance Shirt";
    const fetchData = async () => {
      const res = await fetch('https://highlowmediasurveillanceteepics.s3.us-east-1.amazonaws.com/data.json');
      const json = await res.json();
      if (Array.isArray(json.images)) {
        setData(json.images);
      } else {
        console.error('data.images is not an array');
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-top pb-20">
        <h1 className="text-center">Surveillance Shirt</h1>
        <Link href="https://www.etsy.com/shop/highlowmedia/">
          <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Buy Now</button>
        </Link>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {Array.isArray(data) && data.length > 0 && data.map((item) => (
            <div className="grid" key={item}>
            <Image
            src={item}
            width={600}
            height={600}
            alt='surveillance t-shirt in the wild'
            style={{objectFit:"contain"}}
            priority
            unoptimized
            />
            </div>
          ))}   
        </div>
      </main>
      <Footer />
    </div>
  );
}
