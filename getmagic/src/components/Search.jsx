export default function Search(props) {

    return (

    // < !--component -- >
        <div class="space-x-2 mx-auto w-max relative">
            <input
                class="peer bg-yellow-300 h-10 md:h-12 pl-14 text-xl font-semibold text-blue-700 focus:bg-yellow-400 outline-none caret-blue-700"
                type="text"
            />
            <svg
                class="w-5 absolute top-1/2 -translate-y-1/2 left-5 fill-blue-700 peer-focus-within:fill-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path
                    d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                />
            </svg>

            <button
                class="bg-blue-800 hover:bg-blue-900 text-white font-semibold text-lg h-10 md:h-12 px-10 md:px-12"
            >
                Go
            </button>
        </div>    
  )



}