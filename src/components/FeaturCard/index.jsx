import React from 'react'

function FeatureCard() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
      <div className="relative">
        <div className="hidden sm:block">
          <div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-start-8 2xl:after:end-0 after:bg-[url('https://coderthemes.com/prompt/images/pattern/dot5.svg')]" />
          <div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-end-8 before:bg-[url('https://coderthemes.com/prompt/images/pattern/dot2.svg')]" />
        </div>
        <img
          src="assets/images/hero/saas1.png"
          alt="saas1"
          data-aos="fade-right"
          data-aos-duration={400}
        />
      </div>
      <div className="lg:ms-24">
        <div
          data-fc-type="accordion"
          data-aos="fade-up"
          data-aos-duration={500}
        >
          {/* 1 */}
          <button
            className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition-all hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
            data-fc-type="collapse"
          >
            <div className="bg-blue-500/10 rounded-lg flex items-center justify-center h-12 w-12">
              {/* {item.icon} */}
            </div>
            <h1 className="font-medium mb-4 mt-2">{/* {item.title} */}</h1>
          </button>
          <div className="w-full overflow-hidden duration-300 ps-16">
            <p className="text-gray-700 dark:text-gray-300"></p>
            <div className="mt-7 flex items-center">
              <a href="#" className="text-primary">
                {item.btn} <i className="fa-solid fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
          {item.line}
          {/* 2 */}
          <button
            className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
            data-fc-type="collapse"
          >
            <div className="bg-green-500/10 rounded-lg flex items-center justify-center h-12 w-12">
              <svg
                className="h-6 w-6 text-green-500"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                  <path
                    d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                    id="Combined-Shape"
                    fill="currentColor"
                    opacity="0.3"
                  />
                  <path
                    d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                    id="Mask-Copy"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </div>
            <h1 className="font-medium mb-4 mt-2">Hiring &amp; Onboarding</h1>
          </button>
          <div className="hidden w-full overflow-hidden duration-300 ps-16">
            <p className="text-gray-700 dark:text-gray-300">
              Post your job, interview candidates and make offers, all on
              Prompt. Start hiring today.
            </p>
            <div className="mt-7 flex items-center">
              <a href="#" className="text-primary">
                Learn more <i className="fa-solid fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
          <div className="border-b my-6" />
          {/* 3 */}
          <button
            className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
            data-fc-type="collapse"
          >
            <div className="bg-orange-500/10 rounded-lg flex items-center justify-center h-12 w-12">
              <svg
                className="h-6 w-6 text-orange-500"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <rect id="bound" x={0} y={0} width={24} height={24} />
                  <rect
                    id="Rectangle-62-Copy"
                    fill="currentColor"
                    opacity="0.3"
                    x={7}
                    y={4}
                    width={3}
                    height={13}
                    rx="1.5"
                  />
                  <rect
                    id="Rectangle-62-Copy-2"
                    fill="currentColor"
                    opacity="0.3"
                    x={12}
                    y={9}
                    width={3}
                    height={8}
                    rx="1.5"
                  />
                  <path
                    d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z"
                    id="Path-95"
                    fill="currentColor"
                  />
                  <rect
                    id="Rectangle-62-Copy-4"
                    fill="currentColor"
                    opacity="0.3"
                    x={17}
                    y={11}
                    width={3}
                    height={6}
                    rx="1.5"
                  />
                </g>
              </svg>
            </div>
            <h1 className="font-medium mb-4 mt-2">
              People Data &amp; Analytics
            </h1>
          </button>
          <div className="hidden w-full overflow-hidden duration-300 ps-16">
            <p className="text-gray-700 dark:text-gray-300">
              Finding committed employees is one of public and private
              organizations’ top priorities.
            </p>
            <div className="mt-7 flex items-center">
              <a href="#" className="text-primary">
                Learn more <i className="fa-solid fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard