"use client"
import Image from "next/image";
import nana from "../styles/ungu.jpg";
import tgs1 from "../styles/tgs1.jpg";
import tgs2 from "../styles/tgs2.jpg";
import tgs3 from "../styles/tgs3.jpg";
import tgs4 from "../styles/tgs4.jpg";
import { Inter } from "next/font/google"
import { useState } from "react";
import React from 'react';

export default function Home() {

  
  const [isClick, setisClick] = useState(false);
	const toggleNavbar = (): void =>{
  	setisClick(!isClick)
	}
  return (
    <main>
      <nav className='bg-teal-100 fixed top-0 lef0 w-full flex items-center z-10'>
        <div className='max-w-7xl mx-auto px-4 sm-:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
		          <div className='flex-shrink-0'>
		            <a className='block font-bold text-slate-600 text-4xl mt-1 lg:text-5xl'>NF</a>
		          </div>
		        </div>
            <div className="hidden md:block">
		          <div className="ml-px flex items-center space-x-4 ">
			          <a href="#home" className="text-slate-800 hover:bg-sky-950 hover:text-white md:text-xl rounded-lg">Home</a>
			          <a href="#about" className="text-slate-800 hover:bg-sky-950 hover:text-white md:text-xl rounded-lg">Aboute</a>
			          <a href="#portfolio" className="text-slate-800 hover:bg-sky-950 hover:text-white md:text-xl rounded-lg">Portfolio</a>
			          <a href="#contact" className="text-slate-800 hover:bg-sky-950 hover:text-white md:text-xl rounded-lg">Contact</a>
		          </div>
		        </div>
            <div className="md:hidden flex items-center">
			        <button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black" onClick={toggleNavbar}>
			          {isClick ? (
			            <svg  className="h-6 w-6"
			              xmlns="http://www.w3.org/2000/svg"
			              fill="none"
			              viewBox="0 0 24 24"
			              stroke="currentColor" >
			              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
			            </svg>
			          ) : (
			            <svg  className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
			            </svg>                       
			          )}
			        </button>
		        </div>
          </div>
        </div>
        {isClick && (
		      <div className="md:hidden">
		        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
		          <a href="#home" className="text-slate-800 block hover:bg-sky-950 hover:text-white md:text-xl rounded-lg">Home</a>
		          <a href="#about" className="text-slate-800 block hover:bg-sky-950 hover:text-white md:text-xl rounded-lg">Aboute</a>
		          <a href="#portfolio" className="text-slate-800 block hover:bg-sky-950 hover:text-white md:text-xl rounded-lg">Portfolio</a>
		          <a href="#contact" className="text-slate-800 block hover:bg-sky-950 hover:text-white md:text-xl rounded-lg">Contact</a>
		        </div>
		      </div>
		    )}
      </nav>

      <section id="home" className="pt-36">
		    <div className="container">
		      <div className="flex flex-wrap">
		        <div className="w-full self-center px-4 lg:w-1/2">
		          <h1 className="text-base font-semibold text-teal-700 md:text-xl">Halo, perkenalkan saya 
		            <span className="block font-bold text-slate-600 text-4xl mt-1 lg:text-5xl"> Narnia Faradilla</span></h1>
		          <h2 className="font-medium text-slate-900 text-lg mb-5">Beginners Developer | Students</h2>
		          <p className="font-medium text-black leading-relaxed">Saya adalah salah satu siswi di SMK TI BALI GLOBAL DENPASAR.</p>
		          <p className="font-medium text-black mb-10 leading-relaxed">setelah saya sekolah disana dan masuk kejurusan RPL saya mulai tertarik pada dunia pemprograman, dan memutuskan terjun kedalam dunia pemprograman.</p>
		          <a href="#" className="text-base font-semibold text-white bg-sky-950 py-3 px-8 rounded-full 
		            hover:shadow-lg hover:bg-sky-800 transition duration-300 ease-in-out">contack Me</a>
		        </div>
		        <div className="w-full self-end px-4 lg:w-1/2">
		          <div className="mt-10 lg:mt-9 lg:right-0">
		            <div className="scale-90">
		              <Image src={nana} alt="Narnia Faradilla" className="max-w-full mx-auto" />
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </section>

      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
			        <h4 className="font-bold uppercese text-teal-700 text-lg mb-3">About Me</h4>
			        <h2 className="font-bold text-slate-950 text-3xl mb-5 max-w-md lg:text-4xl">Yuk ketahui tentang LATAR BELAKANG Nia!!</h2>
			        <p className="font=medium text-base text-black max-w-xl">Namaku narnia kalian bisa panggil aku nia, Aku lahir diDenpasar tanggal 30-September-2008, berarti sekarang aku berumur 15thn, dan aku suka banget sama mie (mau mie jenis apapun aku sukaa!!). SALAM KENAL YAA  AKU NIA!!??</p>
			      </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-slate-950 text-3xl mb-5 lg:text-3xl lg:pt-10">Ayo berteman dengan Nia!</h3>
			        <p className="font-medium text-base text-black mb-6 lg:text-lg">aku memiliki beberapa akun yang aku taro dibawah ini.
			          Jangan lupa untuk mengikuti akun aku yaa, AGAR BISA MELIHAT AKTIVITAS SEHARI-HARI NIAA <a target="_blank" className="font-bold text-red-900">‼️‼️‼️</a></p>
			        <div className="flex items-center">

                {/* youtube */}
                <a href="https://youtube.com/@narniafaradilla8571?si=B9q95mhlARezwpeX"target="_blank" 
				          className="w-10 mr-3 rounded-full flex justify-center items-center border border-slate-500
				        hover:border-teal-700 hover:bg-teal-700 hover:text-white">
				
				          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="fill-current" viewBox="0 0 24 24">
				            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 
				              0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 
				              4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/>
				          </svg>
				        </a>

                {/* instagram */}
                <a href="https://www.instagram.com/diillaaa90?igsh=c2R0MTI3c2Y3Y3Fh"target="_blank" 
				          className="w-11 mr-3 rounded-full flex justify-center items-center border border-slate-500
				          hover:border-teal-700 hover:bg-teal-700 hover:text-white">
				
	                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="fill-current" viewBox="0 0 24 24">
				            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
				          </svg>
				        </a>
				
				        {/* tiktok */}
				        <a href="https://www.tiktok.com/@manganbakso3?_t=8oRe0R9rWvy&_r=1"target="_blank" 
				          className="w-10 mr-3 rounded-full flex justify-center items-center border border-slate-500
				          hover:border-teal-700 hover:bg-teal-700 hover:text-white">
				
				          <svg role="img" width="28" height="28" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				            <title>TikTok</title>
				            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
				          </svg>
				        </a>
				        {/* wa */}
				        <a href="https://wa.me/qr/WRUIODPRVQVPE1"target="_blank" 
				          className="w-11 mr-3 rounded-full flex justify-center items-center border border-slate-500
                  hover:border-teal-700 hover:bg-teal-700 hover:text-white">
				
				          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="fill-current" viewBox="0 0 24 24">
				            <path d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z"/>
				          </svg>
		            </a>
              </div>
            </div>
          </div>
        </div>
      </section>  

      <section id="portfolio" className="pt-36 pb-16 bg-slate-200">
        <div className="container">
          <div className="w-full px-4">
			      <div className="max-w-xl mx-auto text-center mb-16">
	            <h4 className="maxfont-semibold text-lg text-teal-700 mb-2">Portfolio</h4>
              <h2 className="font-bold text-black text-3xl mb-4">Project Terbaru</h2>
			        <p className="font-medium text-md text-slate-600">Ini adalah beberapa program pengambilan nilai yang saya lalukan di sekolah SMK TI BALI GLOBAL DENPASAR.</p>
		        </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            {/* tgs1 */}
            <div className="mb-2 p-4 md:w-1/2">
			        <div className="rounded-mb shadow-md everflow-hidden">
			          <Image src={tgs1} alt="online shop" width={99}/>
	            </div>
		          <h3 className="font-semibold text-xl text-black mt5 mb-3">ONLINE SHOP KOSMETIK</h3>
			        <p className="font-medium text-base text-slate-600">Ini adalah program yang saya buat dengan Dev C++.
			          Program ini tentang pembelian kosmetik secara online, dan jika berlangganan akan mendapatkan potongan harga,
			          tetapi jika tidak berlangganan tidak dapat potongan harga.</p>
			      </div>
			      {/* tgs2 */}
			      <div className="mb-2 p-4 md:w-1/2">
			        <div className="rounded-mb shadow-md everflow-hidden">
			          <Image src={tgs2} alt="Quis mobile" width={99}/>
			        </div>
			        <h3 className="font-semibold text-xl text-black mt5 mb-3">FRUIT QUIZ #TEBAK GAMBAR</h3>
			        <p className="font-medium text-base text-slate-600">Ini adalah game mobile yang saya buat menggunakan aplikasi ADOBE.
			        Game ini tentang tebak gambar/puzzle jika benar poin akan bertambah dan next keberikutnya,
			        tetapi jika salah poin akan berkurang dan tidak akan next hingga waktu abis,jika ke skip maka nilai akan dianggap kosong.</p>
			      </div>
            {/* tgs3 */}
            <div className="mb-2 p-4 md:w-1/2">
			        <div className="rounded-mb shadow-md everflow-hidden">
			          <Image src={tgs3} alt="quis mobile" width={999}/>
	            </div>
			        <h3 className="font-semibold text-xl text-black mt5 mb-3">FRUIT QUIZ #BERHITUNG</h3>
			        <p className="font-medium text-base text-slate-600">Ini adalah game mobile yang saya buat menggunakan ADOBE.
			        Game ini tentang berhitung,bisa berhitung buah atau berhitung biji buah tergantung perintah tersebut.
			        jika benar poin akan bertambah dan next keberikutnya,tetapi jika salah poin akan berkurang dan tidak 
			        akan next hingga waktu abis,jika ke skip maka nilai akan dianggap kosong.</p>
			      </div>
			      {/* tgs4 */}
			      <div className="mb-2 p-4 md:w-1/2">
			        <div className="rounded-mb shadow-md everflow-hidden">
			          <Image src={tgs4} alt="shooting with tanks" width={999}/>
			        </div>
		          <h3 className="font-semibold text-xl text-black mt5 mb-3">SHOOTING WITH TANKS</h3>
			        <p className="font-medium text-base text-slate-600">Ini adalah game yang saya buat dengan ADOBE FLASH.
			        Game ini tentang tank yang menembak mobil,setiap naik level pelurupun akan bertambah,
			        tetapi jika dalam satu level terus menerun peluru meleset maka akan game over karna waktu abis.</p>
		        </div>
          </div>
        </div>
      </section>

      <section id="contact" className="pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
		        <div className="max-w-xl mx-auto text-center mb-16">
		          <h4 className="font-semibold text-lg text-teal-700 mb-2">Contact</h4>
		          <h2 className="font-bold text-black text-3xl mb-4 sm:text-4xl lg:text-5xl">Hubungi Kami</h2>
		          <p className="font-medium text-md text-slate-600 md:text-lg">Saya memilili bekal pendidikan dari SMK 
		          TI BALI GLOBAL DENPASAR, membuat saya tertarik dalam dunia pemprograman</p>
		        </div>
		      </div>

          <form>
			      <div className="w-full lg:w-3/6 mx-auto">
			        <div className="w-full px-4 mb-8">
			          <label form="Name" className="text-base font-bold text-teal-600">Name</label>
			          <input type="text" id="name" className="w-full bg-slate-200 text-black p-3 rounded-md focus:outline-none focus:ring-slate-800 focus:ring-1 focus:border-slate-800"></input>
			        </div>
			        {/* email */}
			        <div className="w-full px-4 mb-8">
			          <label form="Email" className="text-base font-bold text-teal-600">Email</label>
			          <input type="Email" id="Email" className="w-full bg-slate-200 text-black p-3 rounded-md focus:outline-none focus:ring-slate-800 focus:ring-1 focus:border-slate-800"></input>
			        </div>
			        {/* pesan */}
			        <div className="w-full px-4 mb-8">
			          <label form="Pesan" className="text-base font-bold text-teal-600">Message</label>
			          <textarea typeof="email" id="email" className="w-full bg-slate-200 text-black p-3 rounded-md focus:outline-none focus:ring-slate-800 focus:ring-1 focus:border-slate-800 h-32"></textarea>
			        </div>
			        <div className="w-full px-4">
			          <button className="text-base font-semibold text-white bg-slate-800 py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">kirim</button>
			        </div>
			      </div>
			    </form>
        </div>
      </section>

      <footer className="bg-slate-950 pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-300 font-medium">
			        <h2 className='block font-bold text-slate-600 text-4xl mt-1 lg:text-5xl'>NF</h2>
			        <h3 className="font-bold text-2xl mb-2">Contact Me</h3>
			        <p>narniafaradilla411@gmail.com</p>
			        <p>Jl.Gn.Muliawan Timur No.2</p>
			        <p>bali,denpasar</p>
			      </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
			        <h3 className="font-semibold text-xl text-white mb-5">writing category</h3>
			        <ul className="text-slate-300">
		            <li>
			            <a href="#" className="inline-block text-base hover:text-teal-700 mb-3">Programing</a>
			          </li>
			          <li>
		              <a href="#" className="inline-block text-base hover:text-teal-700 mb-3">Teknologi</a>
		            </li>
		            <li>
			            <a href="#" className="inline-block text-base hover:text-teal-700 mb-3">Gaya hidup</a>
			          </li>
			        </ul>
		       </div>

           <div className="w-full px-4 mb-12 md:w-1/3">
			        <h3 className="font-semibold text-xl text-white mb-5">Link</h3>
			        <ul className="text-slate-300">
			          <li>
			            <a href="#home" className="inline-block text-base hover:text-teal-700 mb-3">Home</a>
			         </li>
			          <li>
		              <a href="#about" className="inline-block text-base hover:text-teal-700 mb-3">Aboute Me </a>
		            </li>
		            <li>
			           <a href="#portfolio" className="inline-block text-base hover:text-teal-700 mb-3">Portfolio</a>
			          </li>
	              <li>
			            <a href="#contact" className="inline-block text-base hover:text-teal-700 mb-3">Contact</a>
		            </li>
		          </ul>
			      </div>
          </div>

          <div className="w-full pt-10 border-t border-slate-900 ">
            <div className="flex items-center justify-center mb-5">
              {/* youtube */}
              <a href="https://youtube.com/@narniafaradilla8571?si=B9q95mhlARezwpeX"target="_blank" 
			          className="w-10 mr-3 rounded-full flex justify-center items-center border border-slate-500
			          hover:border-teal-700 hover:bg-teal-700 hover:text-white">
		            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="fill-current" viewBox="0 0 24 24">
	                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 
			            0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 
			            4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/>
		            </svg>
			        </a>
			
              {/* instagram */}
			        <a href="https://www.instagram.com/diillaaa90?igsh=c2R0MTI3c2Y3Y3Fh"target="_blank" 
			          className="w-11 mr-3 rounded-full flex justify-center items-center border border-slate-500
			          hover:border-teal-700 hover:bg-teal-700 hover:text-white">
			          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="fill-current" viewBox="0 0 24 24">
			            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
			          </svg>
			        </a>

              {/* tiktok */}
              <a href="https://www.tiktok.com/@manganbakso3?_t=8oRe0R9rWvy&_r=1"target="_blank" 
			          className="w-10 mr-3 rounded-full flex justify-center items-center border border-slate-500
			          hover:border-teal-700 hover:bg-teal-700 hover:text-white">
			          <svg role="img" width="28" height="28" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			            <title>TikTok</title>
	                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
			          </svg>
			        </a>
			
			        {/* wa */}
			        <a href="https://wa.me/qr/WRUIODPRVQVPE1"target="_blank" 
		             className="w-11 mr-3 rounded-full flex justify-center items-center border border-slate-500
			          hover:border-teal-700 hover:bg-teal-700 hover:text-white">
			          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="fill-current" viewBox="0 0 24 24">
			            <path d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z"/>
			          </svg>
			        </a>
            </div>
            <p className="font-medium text-xs text-slate-700 text-center">Dibuat oleh <a href="https://www.instagram.com/diillaaa90?igsh=c2R0MTI3c2Y3Y3Fh" target="_blank" className="font-bold text-sky-500"> Narnia Faradilla</a>, menggunakan <a href="https://tailwindcss.com" target="_blank" className="font-bold text-sky-500"></a>Tailwind.CSS</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
