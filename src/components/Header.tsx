import { useState } from 'react'
import { Link } from 'react-scroll'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Sun, Moon } from 'lucide-react'

interface HeaderProps {
  darkMode: boolean
  toggleDark: () => void
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDark }) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Chandana Gurram
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map(item => (
            <Link
              key={item.name}
              to={item.to}
              smooth
              duration={500}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={toggleDark}
            className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleDark}
            className="p-1 rounded bg-gray-200 dark:bg-gray-700 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button onClick={() => setIsOpen(prev => !prev)}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {menuItems.map(item => (
              <Link
                key={item.name}
                to={item.to}
                smooth
                duration={500}
                className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
