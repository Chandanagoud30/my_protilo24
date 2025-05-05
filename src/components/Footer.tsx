import { FaGithub, FaLinkedin, FaMailBulk} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Chandana Gurram</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Chandanagoud30" className="hover:text-blue-500 transition duration-300">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-500 transition duration-300">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="mailto:gurramchandana9515@gmail.com" className="hover:text-blue-500 transition duration-300">
              <FaMailBulk className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Chandana Gurram. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
