import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="mt-20 mb-8">
      <div className="glass p-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Devico. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:contact@devico.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

