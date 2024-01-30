import { MdArrowOutward } from 'react-icons/md'
import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <main className="pt-20">
      <div className="flex flex-row mx-5 ">
        <div className="basis-1/4"></div>
        <div className="basis-1/2">
          <h1
            className="pt-16 pb-2 font-bold text-5xl text-black"
            style={{ fontFamily: 'Silkscreen', fontWeight: 'bold' }}
          >
            David Adediji
          </h1>
          <p className="text-black font-inherit px-1 pb-2 pt-2 font-sans text-xl">
            Motion Designer
          </p>
          <p className="px-1 pt-2 text-slate-700 w-5/6 text-md">
            With a passion for storytelling and a keen eye for detail, I craft
            visually stunning animations that captivate and inspire.
          </p>
          <h1
            className="px-1 text-xl pt-5"
            style={{ fontFamily: 'Archivo Black', fontWeight: 'bold' }}
          >
            Projects
          </h1>
        </div>
        <div className="basis-1/4"></div>
      </div>

      <div className="flex flex-row mx-6">
        <div className="basis-1/4"></div>
        <div className="basis-1/2">
          <div className="flex flex-row pt-4 space-x-3">
            <div className="basis-1/2 border-2 border-black rounded-lg h-56 border-dashed">
              <h1 className="px-3 text-md leading-4 pt-3 font-bold">
                Obestric Fistula Campaign
              </h1>
              <p className="px-3 text-sm leading-4 pt-3 text-slate-700">
                This project was a part of the 2023 Obestric Fistula Awareness
              </p>
              <div className="mx-3 mt-6">
                <Link
                  to="/briefOne"
                  className=" italic text-sm text-slate-700 underline flex"
                >
                  briefs and such
                  <MdArrowOutward className="mt-1.5" />
                </Link>
                <a target="_blank" href="https://vimeo.com/847826304">
                  <p className="pt-2 italic text-sm text-slate-700 underline flex">
                    final video
                    <MdArrowOutward className="mt-1.5" />
                  </p>
                </a>
              </div>
            </div>

            <div className="basis-1/2">
              <div className="basis-1/2 border-2 border-black rounded-lg h-56 border-dashed">
                <h1 className="px-3 text-md leading-4 pt-3 font-bold">
                  Ennoble Logo Animation
                </h1>
                <p className="px-3 text-sm leading-4 pt-3 text-slate-700">
                  Created Logo animation and sound design for Ennoble
                </p>
                <div className="mx-3 mt-10">
                  <Link
                    to="/briefTwo"
                    className=" italic text-sm text-slate-700 underline flex"
                  >
                    briefs and such
                    <MdArrowOutward className="mt-1.5" />
                  </Link>
                  <a target="_blank" href="https://vimeo.com/908030717">
                    <p className="pt-2 italic text-sm text-slate-700 underline flex">
                      final video
                      <MdArrowOutward className="mt-1.5" />
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="basis-1/2">
              <div className="basis-1/2 border-2 border-black rounded-lg h-56 border-dashed">
                <h1 className="px-3 text-md leading-4 pt-3 font-bold">
                  Visa GlobalPay Campaign
                </h1>

                <p className="px-3 text-sm leading-4 pt-3 text-slate-700">
                  This project was a part of the 2023 Obestric Fistula Awareness
                </p>
                <div className="mx-3 mt-6">
                  <Link
                    to="/briefThree"
                    className=" italic text-sm text-slate-700 underline flex"
                  >
                    briefs and such
                    <MdArrowOutward className="mt-1.5" />
                  </Link>
                  <a target="_blank" href="https://vimeo.com/908025356">
                    <p className="pt-2 italic text-sm text-slate-700 underline flex">
                      final video
                      <MdArrowOutward className="mt-1.5" />
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/4"></div>
      </div>

      <div className=" mx-80 pt-6 w-max">
        <a
          href="https://vimeo.com/user161544790"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-slate-600 flex px-12"
        >
          Check out my other projects
          <GoArrowRight className="mt-1 mx-1 text-2xl" />
        </a>
      </div>

      <div className="mx-80 pt-9 w-max">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1GudfY681zBgG9QQHD0SpgTPb0XzlDkUA/view?usp=sharing"
          rel="noopener noreferrer"
        >
          <p className="px-12 italic text-md text-pink-500 underline flex">
            check out my cv
            <MdArrowOutward className="mt-1.5" />
          </p>
        </a>
      </div>
    </main>
  )
}

export default Main
