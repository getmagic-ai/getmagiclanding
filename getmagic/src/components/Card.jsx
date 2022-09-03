import header_image from './../assets/cardImg2.png'
export default function Card(props) {

    return (


        <div class="max-w-md rounded overflow-hidden shadow-lg">
            <img class="w-full" src={props.image} alt="Get Started" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Get your UGC career FastTracked!</div>
                    <p class="text-gray-700 text-base">
                        Start working with us today! Sign up now for a free early access to top brands
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
        </div>

    )
}