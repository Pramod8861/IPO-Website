import {
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] text-gray-600 text-sm border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Grid Sections */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Trading View</a></li>
              <li><a href="#" className="hover:text-blue-600">NSE Holidays</a></li>
              <li><a href="#" className="hover:text-blue-600">e-Voting CDSL</a></li>
              <li><a href="#" className="hover:text-blue-600">e-Voting NSDL</a></li>
              <li><a href="#" className="hover:text-blue-600">Market Timings</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Community</a></li>
              <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Offerings</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Compare Broker</a></li>
              <li><a href="#" className="hover:text-blue-600">Fin Calculators</a></li>
              <li><a href="#" className="hover:text-blue-600">IPO</a></li>
              <li><a href="#" className="hover:text-blue-600">All Brokers</a></li>
              <li><a href="#" className="hover:text-blue-600">Products</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Shark Investor</a></li>
              <li><a href="#" className="hover:text-blue-600">Mutual Funds</a></li>
              <li><a href="#" className="hover:text-blue-600">Sitemap</a></li>
              <li><a href="#" className="hover:text-blue-600">Indian Indices</a></li>
              <li><a href="#" className="hover:text-blue-600">Bug Bounty Program</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Policy</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Refund Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Disclaimer</a></li>
              <li><a href="#" className="hover:text-blue-600">Trust & Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-3 gap-10 items-start border-t border-gray-200 pt-10">
          {/* Left Side: Social + Brand */}
          <div className="space-y-4">
          <div className="flex gap-4 text-xl">
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <Twitter className="text-[#1DA1F2]" />
  </a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <Facebook className="text-[#1877F2]" />
  </a>
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <Youtube className="text-[#FF0000]" />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <Linkedin className="text-[#0A66C2]" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <Instagram className="text-[#E4405F]" />
  </a>
  <a href="https://web.telegram.org" target="_blank" rel="noopener noreferrer">
    <MessageCircle className="text-[#25D366]" />
  </a>
</div>

            <div className="flex items-center space-x-2 font-bold text-gray-800 text-lg">
              <span className="text-violet-600">▌▌</span>
              <span>BLUESTOCK</span>
            </div>
            <p className="text-sm text-gray-500">Bluestock Fintech<br />Pune, Maharashtra</p>
            <p className="text-sm text-gray-500">MSME Registration No:<br />UDYAM-MH-01-v0138001</p>
            <div className="text-orange-500 text-lg font-bold">#startupindia</div>
          </div>

          {/* Center: Disclaimers */}
          <div className="text-[13px] leading-relaxed text-gray-600 col-span-2">
            <p>Investment in securities markets are subject to market risks, read all the related documents carefully before investing as prescribed by SEBI. Issued in the interest of the investors.</p>
            <p className="mt-2">
              The users can write to <a href="mailto:hello@bluestock.in" className="text-blue-600 hover:underline">hello@bluestock.in</a> for any app, website related queries. Also you can send IT / Tech related feedback to <a href="mailto:cto@bluestock.in" className="text-blue-600 hover:underline">cto@bluestock.in</a>.
            </p>
            <p className="mt-2">
              Disclaimer: We are not a SEBI registered research analyst company. We do not provide any kind of stock recommendations, buy/sell stock tips, or investment and trading advice. All the stock scripts shown in the Bluestock app, website, and all social media handles are for educational purposes only.
            </p>
            <p className="mt-2">
              Before making any investment in the financial market, consult with your financial advisor. Remember, stock markets are subject to market risks.
            </p>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="border-t border-gray-300 mt-10 pt-4 text-center text-[13px] text-gray-500 flex flex-col sm:flex-row justify-between items-center">
          <span>Bluestock Fintech All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
