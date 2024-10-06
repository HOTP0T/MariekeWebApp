import Link from 'next/link';

const Footer = () => {
  return (
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
              <li>
                <Link href="/">
                  <a className="hover:text-blue-600">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-blue-600">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/naturopathy">
                  <a className="hover:text-blue-600">Naturopathy</a>
                </Link>
              </li>
              <li>
                <Link href="/sewing">
                  <a className="hover:text-blue-600">Sewing</a>
                </Link>
              </li>
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
  );
};

export default Footer;