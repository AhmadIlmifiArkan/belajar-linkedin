import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white pt-16">
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 rounded-2xl p-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-0">
            Siap tingkatkan <br /> Karir anda?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#daftar"
              className="px-6 py-3 bg-blue-100 text-gray-900 font-semibold rounded-full shadow hover:bg-blue-500 transition text-center">
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-white-400">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/case-studies">Case Studies</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="/book-demo">Book a Demo</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-white-400">
            <li>
              <a href="/integrations">Integrations</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/partners">Become a Partner</a>
            </li>
            <li>
              <a href="/demo-store">Demo Store</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-white-400">
            <li>
              <a href="/linkedin-optimization">LinkedIn Optimization</a>
            </li>
            <li>
              <a href="/career-coaching">Career Coaching</a>
            </li>
            <li>
              <a href="/video-training">Video Training</a>
            </li>
            <li>
              <a href="/community">Community</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white">Belajar Linkedin</h2>
            <p className="text-sm text-white-400 mt-2">
              © {new Date().getFullYear()} Belajar Linkedin. All rights
              reserved.
            </p>
          </div>

          {/* Sosial Media */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="p-2 bg-blue-950 rounded-full hover:bg-blue-800 transition">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://instagram.com"
              className="p-2 bg-blue-950 rounded-full hover:bg-pink-500 transition">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://twitter.com"
              className="p-2 bg-blue-950 rounded-full hover:bg-sky-500 transition">
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://linkedin.com"
              className="p-2 bg-blue-950 rounded-full hover:bg-blue-700 transition">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://youtube.com"
              className="p-2 bg-blue-950 rounded-full hover:bg-red-600 transition">
              <Youtube className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
