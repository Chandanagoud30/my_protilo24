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
              I'm a passionate software developer focused on crafting intuitive and responsive web applications.
              My expertise lies in React, TypeScript, and modern front-end technologies, and I'm always eager to learn
              and implement new tools that enhance user experience.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I enjoy translating ideas into scalable and maintainable code. Whether collaborating on a team or working
              independently, I bring a detail-oriented and solution-driven mindset to every project.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Outside of coding, I’m curious about UI/UX design and continuously seek to bridge the gap between
              functionality and aesthetics in web applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
