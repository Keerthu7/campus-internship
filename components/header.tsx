"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const mainSiteUrl = "hynox-lake.vercel.app"; 
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPath = (item: string) => {
    if (item === "Home") return mainSiteUrl;
    if (item === "About") return `${mainSiteUrl}/about`;
    if (item === "Programs") return `${mainSiteUrl}/programs`;
    if (item === "Contact") return `${mainSiteUrl}/contact`;
    if (item === "Internship") return "/"; // Internship click panna ithe page la irukkum
    return `/${item.toLowerCase()}`;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-sm border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          <Link href={mainSiteUrl} className="flex items-center gap-3 group ml-8 md:ml-16">
            <div className="flex-shrink-0 flex items-center">
              <Image 
                src="/logo.png"  
                alt="Hynox Campus Logo"
                width={50} 
                height={50}
                priority
                className="w-auto h-10 md:h-12 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <span className="font-black text-sm text-white leading-none tracking-tighter uppercase">
                Hynox
              </span> 
              <span className="text-[7px] font-bold uppercase tracking-[0.35em] text-[#00C365] mt-0.5 pl-0.5">
                Campus
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href={mainSiteUrl} className="text-sm font-medium text-white hover:text-[#00C365] transition-colors">Home</Link>
            <Link href={`${mainSiteUrl}/about`} className="text-sm font-medium text-white hover:text-[#00C365] transition-colors">About</Link>
            <Link href={`${mainSiteUrl}/programs`} className="text-sm font-medium text-white hover:text-[#00C365] transition-colors">Programs</Link>
            <Link href="/" className="text-sm font-medium text-[#00C365] transition-colors">Internship</Link>
            <Link href={`${mainSiteUrl}/contact`} className="text-sm font-medium text-white hover:text-[#00C365] transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden text-white hover:text-[#00C365] transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-6 border-t border-gray-800 bg-black/95 backdrop-blur-xl rounded-b-3xl absolute left-0 w-full px-6 shadow-2xl animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-4 py-6">
              {["Home", "About", "Programs", "Internship", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={getPath(item)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-bold hover:text-[#00C365] transition-colors border-b border-gray-800 pb-2 ${
                    item === "Internship" ? "text-[#00C365]" : "text-white"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}