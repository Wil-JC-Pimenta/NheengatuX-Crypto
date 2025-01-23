// FooterSection - Provides the footer for the NheengatuX project with links, social media, and essential information.
import { Globe, Code, Layers } from "lucide-react";
const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      {/* Top Section: Call to Action */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2 text-blue-500">
          Join the NheengatuX Community
        </h3>
        <p className="text-sm text-gray-300 mb-4">
          Stay updated with the latest news, updates, and events around
          NheengatuX.
        </p>
        <a
          href="/subscribe"
          className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Subscribe to Updates
        </a>
      </div>

      {/* Middle Section: Links and Navigation */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* About Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-500">About</h4>
          <p className="text-sm text-gray-300">
            NheengatuX is a token celebrating the rich cultural heritage of the
            Amazonian people, blending tradition and technology.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-500">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/"
                className="hover:underline text-gray-300 hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:underline text-gray-300 hover:text-white"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="hover:underline text-gray-300 hover:text-white"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline text-gray-300 hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-500">
            Resources
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/whitepaper"
                className="hover:underline text-gray-300 hover:text-white"
              >
                Whitepaper
              </a>
            </li>
            <li>
              <a
                href="/roadmap"
                className="hover:underline text-gray-300 hover:text-white"
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:underline text-gray-300 hover:text-white"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:underline text-gray-300 hover:text-white"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-500">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-500 transition"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-500 transition"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-blue-500 transition"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="text-center mt-8 text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} NheengatuX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
