'use client';

import Footer from '@/app/ui/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Bebas_Neue } from 'next/font/google';
import { useState, useEffect, useRef } from 'react';
import { uploadFile } from '../uploadFile';

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Page() {

  const inputRef = useRef<any>(null);
  const textRef = useRef<any>(null);
  
  const [data, setData] = useState([]);

  const handleFileChange = async (event: any) => {
    
    const file = event.target.files?.[0] ?? null
     
    if (!file) {
      console.log('error: no file');
    }
    else if (file.size > 2 * 1024 * 1024) {
      console.log('error: file exceeds size limit');
    }
    else if (!((file.type === "image/jpeg") || (file.type === "image/png"))) {
      console.log('error: incorrect file type');
    } else {
      console.log('upload file size:' + file.size);
      const uploadSuccess = await uploadFile({ fileName: file.name, file });
      if (uploadSuccess) {
        if (inputRef.current) {
          inputRef.current.style.display = 'none';
        }
        if (textRef.current) {
          textRef.current.innerHTML = '<b>Image successfully uploaded.</b> Processing of image for display in the counter-surveillance operative dead drop will take 24-48 hours.';
        }
      }
    }

  };

  useEffect(() => {
    document.title = "High Low Media | The Surveillance Statement Tee";
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
        <div className={bebas.className}>
        <h1 className="mt-3 mb-2 text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">The Surveillance Statement T-Shirt</h1>
        </div>
        
          <Link href="https://www.etsy.com/listing/1826649572/the-surveillance-statement-t-shirt">
            <button type="button" className="mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
            </svg>
            Buy Now
            </button>
          </Link>
          <input
            className="w-3/4 md:w-2/4 lg:w-2/4 block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleFileChange}
          />
          <p ref={textRef} className="w-3/4 md:w-2/4 lg:w-2/4 mt-1 mb-2 text-xs text-gray-500 dark:text-gray-300" id="file_input_help"><b>Counter-surveillance operative dead drop</b>: Asset and operative identities are protected - i.e., blurred (PNG or JPG images only, 2MB max)</p>
        
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
