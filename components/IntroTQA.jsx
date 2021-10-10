/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
    return (
      <div className="relative bg-indigo-700">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="src/about-timyeo.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h2 class="text-white font-semibold text-indigo-600 tracking-wide">introducing</h2>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">the quiet achiever</h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          Tim Yeo has spent his career in rooms full of strong opinions and loud voices. A designer and leader in startups for 16 years, he's spoken at international conferences and has coached nearly a hundred introverts. 
          </p>
        </div>
      </div>
    )
  }
  