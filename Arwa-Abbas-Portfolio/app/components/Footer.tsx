import { Heart } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="text-gray-400">
            © {currentYear} CS Portfolio. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            Made by Arwa Abbas
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;