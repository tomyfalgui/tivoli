import React from "react"

export default () => (
  <section className="p-10 py-20 bg-primary-blue overflow-hidden">
    <h2 className="tracking-wide font-display font-semibold tracking-wider text-bluish-white text-center mb-8">
      Testimonials
    </h2>
    <div className="flex overflow-x-auto">
      <div className="px-2">
        {/* Header */}
        <div className="flex">
          <svg
            width="32"
            height="31"
            viewBox="0 0 32 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="15.7332"
              cy="15.5"
              rx="15.5486"
              ry="15.5"
              fill="#C4C4C4"
            />
          </svg>
          <div className="flex flex-col">
            <p>Name of Company</p>
            <p>JOHN ANTHONY SMITH, CEO</p>
          </div>
        </div>
        {/* END HEADER */}
      </div>
    </div>
  </section>
)
