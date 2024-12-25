import Link from "next/link";
import { Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">
              We are dedicated to promoting natural healing and creative
              expression through naturopathy and sewing.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/naturopathy" className="hover:text-blue-600">
                  Naturopathy
                </Link>
              </li>
              <li>
                <Link href="/sewing" className="hover:text-blue-600">
                  Sewing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600">
              123 Nature Lane, Creativity City, NC 12345
            </p>
            <p className="text-gray-600">Email: info@example.com</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            {/* <form className="flex flex-col sm:flex-row mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-3 py-2 rounded-t-md sm:rounded-l-md sm:rounded-t-none border-t border-b border-l border-r sm:border-r-0"
                aria-label="Email for newsletter"
              />
              <button
                className="bg-[#ADB982] text-black px-4 py-2 rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-blue-700 transition-colors mt-2 sm:mt-0"
                type="submit"
              >
                Subscribe
              </button>
            </form> */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100008089333175"
                className="text-gray-600 hover:text-blue-600"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="mailto:info@example.com"
                className="text-gray-600 hover:text-blue-600"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              {/* <a
                href="#"
                className="text-gray-600 hover:text-blue-600"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a> */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          © {new Date().getFullYear()} Marieke Ceeleart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
