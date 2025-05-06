import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            I'm Chandana Gurram, a passionate and goal-oriented Computer Science graduate student
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            I have hands-on experience in Python, C, and C++ programming, along with UI/UX design and frontend development skills. My work blends strong technical skills with a creative approach to problem-solving
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm currently enhancing my expertise through academic projects and freelance opportunities. I'm always eager to learn, collaborate, and contribute to impactful tech solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
