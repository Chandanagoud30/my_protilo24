import { motion } from 'framer-motion'
import image from '../assets/images/image.jpg'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gray-900 dark:text-gray-100">Hi, I'm</span>{' '}
              <span className="text-blue-600 dark:text-blue-400">Chandana Gurram</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 mb-8">
              A Full Stack Developer passionate about creating web applications
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
              Get in Touch
            </button>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={image}
              alt="Hero"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl border-4 border-blue-600"
              whileHover={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
