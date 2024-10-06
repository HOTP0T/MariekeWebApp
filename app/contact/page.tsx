import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ComboboxDemo from "../components/combobox"
import Navbar from '../components/Navbar'


export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8 flex justify-center items-center">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col justify-center items-center">
              <form className="space-y-4 w-full max-w-md">
                <ComboboxDemo />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full">Send Message</button>
              </form>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-left">
                <h2 className="text-xl font-semibold mb-4">Our Location</h2>
                <p className="mb-2">123 Nature Lane</p>
                <p className="mb-2">Creativity City, NC 12345</p>
                <p className="mb-4">United States</p>
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <p className="mb-2">Email: info@example.com</p>
                <p className="mb-2">Phone: (123) 456-7890</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/contact/1516469448723.png" alt="User Avatar" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-600">
                We are dedicated to promoting natural healing and creative expression through naturopathy and sewing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
                <li><Link href="/naturopathy" className="hover:text-blue-600">Naturopathy</Link></li>
                <li><Link href="/sewing" className="hover:text-blue-600">Sewing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-600">123 Nature Lane, Creativity City, NC 12345</p>
              <p className="text-gray-600">Email: info@example.com</p>
              <p className="text-gray-600">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            © {new Date().getFullYear()} Marieke Ceeleart. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}