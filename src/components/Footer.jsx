import { FaLinkedin, FaGithubSquare, FaVimeo } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <div className="h-64 mt-36 flex flex-row">
        <div className="basis-1/4"></div>
        <div className="basis-1/2 py-3 text-5xl">
          <div className="flex justify-center space-x-5 mt-20 text-slate-300">
            <a
              target="_blank"
              href="https://github.com/Ayomided"
              rel="noopener noreferrer"
            >
              <FaGithubSquare />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dadediji/"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://vimeo.com/user161544790"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaVimeo />
            </a>
          </div>
        </div>
        <div className="basis-1/4"></div>
      </div>
    </footer>
  )
}

export default Footer
