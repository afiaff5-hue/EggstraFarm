/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation 
} from 'react-router-dom';
import { 
  Egg, 
  ShieldCheck, 
  Leaf, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Menu, 
  X,
  CheckCircle2,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Clock,
  Award,
  Users,
  ShoppingBag,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Farm', href: '/tentang-farm' },
    { name: 'Produk', href: '/produk' },
    { name: 'Kontak', href: '/#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      (isScrolled || !isHome) ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-amber-500 p-2 rounded-xl">
            <Egg className="text-white w-6 h-6" />
          </div>
          <span className={cn(
            "font-bold text-xl tracking-tight",
            (isScrolled || !isHome) ? "text-slate-900" : "text-white"
          )}>
            Eggstra<span className="text-amber-500">Farm</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium hover:text-amber-500 transition-colors",
                  (isScrolled || !isHome) ? "text-slate-600" : "text-white/90"
                )}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium hover:text-amber-500 transition-colors",
                  (isScrolled || !isHome) ? "text-slate-600" : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            )
          ))}
          <a href="/#contact" className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-amber-500/20">
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={(isScrolled || !isHome) ? "text-slate-900" : "text-white"} />
          ) : (
            <Menu className={(isScrolled || !isHome) ? "text-slate-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-600 font-medium py-2 border-bottom border-slate-50"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-600 font-medium py-2 border-bottom border-slate-50"
                >
                  {link.name}
                </Link>
              )
            ))}
            <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-amber-500 text-white w-full py-3 rounded-xl font-semibold mt-2 text-center">
              Hubungi Kami
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-amber-500 p-2 rounded-xl">
                <Egg className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight">
                Eggstra<span className="text-amber-500">Farm</span>
              </span>
            </div>
            <p className="text-white/60 max-w-md mb-8 leading-relaxed">
              Menjadi pemimpin dalam industri peternakan ayam petelur yang berkelanjutan, memberikan kontribusi nyata bagi ketahanan pangan nasional melalui produk telur yang aman, sehat, dan berkualitas.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 hover:bg-amber-500 p-3 rounded-xl transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Beranda</Link></li>
              <li><Link to="/tentang-farm" className="hover:text-amber-500 transition-colors">Tentang Farm</Link></li>
              <li><Link to="/produk" className="hover:text-amber-500 transition-colors">Produk</Link></li>
              <li><a href="/#contact" className="hover:text-amber-500 transition-colors">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Jam Operasional</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex justify-between">
                <span>Senin - Jumat</span>
                <span>08:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu</span>
                <span>08:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span>Minggu</span>
                <span className="text-amber-500">Tutup</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Eggstra Farm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2073&auto=format&fit=crop" 
            alt="Poultry Farm" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 rounded-full text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
              Peternakan Ayam Petelur Terpercaya
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              Telur Segar dari <span className="text-amber-500">Alam</span> Langsung ke Meja Anda.
            </h1>
            <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl">
              Kami berkomitmen menyajikan telur berkualitas tinggi dengan standar kebersihan internasional dan kesejahteraan ayam yang terjaga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/produk" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group">
                Lihat Produk Kami
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/tentang-farm" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all text-center">
                Tentang Farm
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=1887&auto=format&fit=crop" 
                  alt="Farm Activity" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-amber-500 p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-white mb-1">15+</div>
                <div className="text-white/80 font-medium">Tahun Pengalaman</div>
              </div>
            </motion.div>

            <div>
              <span className="text-amber-600 font-bold text-sm uppercase tracking-widest mb-4 block">Sejarah Kami</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Membangun Kepercayaan Melalui Kualitas Sejak 2008
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Eggstra Farm bermula dari sebuah peternakan keluarga kecil dengan visi sederhana: menyediakan sumber protein terbaik bagi masyarakat sekitar.
              </p>
              <Link to="/tentang-farm" className="text-amber-600 font-bold flex items-center gap-2 group">
                Baca Selengkapnya
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-amber-600 font-bold text-sm uppercase tracking-widest mb-4 block">Hubungi Kami</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Siap Melayani Kebutuhan Telur Anda</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Alamat Farm</div>
                    <div className="text-slate-600">Jl. Peternakan Hijau No. 45, Sukabumi, Jawa Barat</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Telepon / WhatsApp</div>
                    <div className="text-slate-600">+62 812 3456 7890</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 outline-none" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Pesan</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 outline-none" placeholder="Tuliskan pesan Anda..."></textarea>
                </div>
                <button className="bg-amber-500 hover:bg-amber-600 text-white w-full py-4 rounded-xl font-bold transition-all">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ProductsPage = () => {
  const categories = [
    { id: 'all', name: 'Semua Produk' },
    { id: 'eggs', name: 'Telur Segar' },
    { id: 'organic', name: 'Organik & Olahan' },
  ];

  const [activeTab, setActiveTab] = useState('all');

  const products = [
    {
      id: 1,
      category: 'eggs',
      title: "Telur Ayam Bahagia",
      desc: "Telur pilihan dengan ukuran seragam, cangkang tebal, dan kuning telur yang cerah. Cocok untuk konsumsi harian keluarga.",
      image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=2043&auto=format&fit=crop",
      features: ["Segar Harian", "Bebas Residu", "Cangkang Kuat"]
    },
    {
      id: 2,
      category: 'eggs',
      title: "Telur Ayam Omega-3",
      desc: "Dihasilkan dari ayam yang diberi pakan khusus kaya Omega-3. Sangat baik untuk perkembangan otak dan kesehatan jantung.",
      image: "https://images.unsplash.com/photo-1582722872445-44c59ebc41dd?q=80&w=2070&auto=format&fit=crop",
      features: ["Kaya Omega-3", "Rendah Kolesterol", "Premium Quality"]
    },
    {
      id: 3,
      category: 'eggs',
      title: "Telur Ayam Kampung Asli",
      desc: "Telur dari ayam kampung yang dipelihara secara alami. Memiliki rasa yang lebih gurih dan nutrisi yang lebih padat.",
      image: "https://images.unsplash.com/photo-1598965402089-897ce52e8355?q=80&w=1936&auto=format&fit=crop",
      features: ["Alami", "Bebas Hormon", "Padat Nutrisi"]
    },
    {
      id: 4,
      category: 'organic',
      title: "Pupuk Organik Cair",
      desc: "Hasil fermentasi limbah peternakan yang diproses secara higienis. Membantu menyuburkan tanaman hias dan sayuran Anda.",
      image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1974&auto=format&fit=crop",
      features: ["100% Organik", "Siap Pakai", "Ramah Lingkungan"]
    },
    {
      id: 5,
      category: 'organic',
      title: "Pakan Ayam Campuran",
      desc: "Campuran pakan berkualitas tinggi yang kami gunakan sendiri di farm. Kini tersedia untuk peternak rumahan.",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2073&auto=format&fit=crop",
      features: ["Protein Tinggi", "Tanpa Kimia", "Mudah Dicerna"]
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <div className="pt-24 pb-24">
      <div className="bg-slate-900 py-20 mb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Produk Unggulan Kami</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Kami menghadirkan hasil peternakan terbaik yang diproses dengan standar keamanan pangan tertinggi untuk kesehatan Anda dan keluarga.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                "px-6 py-2.5 rounded-full font-bold text-sm transition-all whitespace-nowrap",
                activeTab === cat.id 
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/20" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-amber-600 uppercase tracking-wider">
                    {product.category === 'eggs' ? 'Fresh Egg' : 'Organic'}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{product.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">
                    {product.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.features.map((f, i) => (
                      <span key={i} className="bg-amber-50 text-amber-600 text-[10px] font-bold px-2 py-1 rounded-md uppercase">
                        {f}
                      </span>
                    ))}
                  </div>
                  <button className="bg-slate-900 text-white w-full py-3 rounded-xl font-bold hover:bg-amber-500 transition-colors flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Pesan via WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=1887&auto=format&fit=crop" 
            alt="Farm Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Tentang Eggstra Farm</h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Lebih dari sekadar peternakan, kami adalah keluarga yang berdedikasi untuk menyediakan nutrisi terbaik bagi bangsa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-amber-50 p-12 rounded-[3rem]">
              <div className="bg-amber-500 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Visi Kami</h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                Menjadi peternakan ayam petelur modern yang berkelanjutan dan terpercaya, mengutamakan kesejahteraan hewan dan kualitas produk untuk mendukung kesehatan masyarakat Indonesia.
              </p>
            </div>
            <div className="bg-slate-900 p-12 rounded-[3rem] text-white">
              <div className="bg-amber-500 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Misi Kami</h2>
              <ul className="space-y-4 text-white/70">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-amber-500 w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Menerapkan teknologi peternakan modern yang ramah lingkungan.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-amber-500 w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Menjamin kesegaran dan kebersihan produk dari kandang hingga ke tangan konsumen.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-amber-500 w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Membangun ekosistem kemitraan yang saling menguntungkan dengan peternak lokal.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nilai-Nilai Utama Kami</h2>
            <p className="text-slate-600">Prinsip yang membimbing setiap langkah kami di farm.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Users />, title: "Kesejahteraan Hewan", desc: "Kami percaya ayam yang bahagia menghasilkan telur yang lebih baik. Kami menerapkan standar kesejahteraan yang tinggi." },
              { icon: <Award />, title: "Integritas Kualitas", desc: "Tidak ada kompromi untuk kualitas. Setiap butir telur adalah janji kesegaran kami kepada Anda." },
              { icon: <Clock />, title: "Ketepatan Waktu", desc: "Sistem distribusi kami dirancang untuk memastikan telur sampai dalam waktu kurang dari 24 jam setelah bertelur." },
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 text-center hover:shadow-xl transition-all">
                <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-6">
                  {React.cloneElement(value.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/History */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Perjalanan Kami</h2>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-amber-500">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-500" />
                  <div className="font-bold text-amber-600 mb-1">2008</div>
                  <h4 className="font-bold text-slate-900 mb-2">Awal Mula</h4>
                  <p className="text-slate-600">Dimulai dengan 500 ekor ayam di belakang rumah keluarga.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-amber-500">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-500" />
                  <div className="font-bold text-amber-600 mb-1">2015</div>
                  <h4 className="font-bold text-slate-900 mb-2">Ekspansi Lahan</h4>
                  <p className="text-slate-600">Pindah ke lokasi saat ini dengan kapasitas 10.000 ekor dan sistem semi-otomatis.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-amber-500">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-500" />
                  <div className="font-bold text-amber-600 mb-1">2023</div>
                  <h4 className="font-bold text-slate-900 mb-2">Digitalisasi & Modernisasi</h4>
                  <p className="text-slate-600">Implementasi IoT untuk monitoring kesehatan ayam dan sistem distribusi digital.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2073&auto=format&fit=crop" 
                alt="Farm History" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans selection:bg-amber-100 selection:text-amber-900 scroll-smooth">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produk" element={<ProductsPage />} />
            <Route path="/tentang-farm" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
