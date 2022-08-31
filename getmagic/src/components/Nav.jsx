import logo from './../assets/PolygonLeft.png'
export default function Nav() {
   return (
      <nav class="relative container mx-auto p-6">
         <div class="flex items-center justify-between">
            <div class="pt-2">
               <img src={logo} alt="logo" />
            </div>
            <div class="hidden md:flex space-x-6">
               <a href="#" class="hover:text-blue-900">Pricing</a>
               <a href="#" class="hover:text-blue-900">Product</a>
               <a href="#" class="hover:text-blue-900">About us</a>
               <a href="#" class="hover:text-blue-900">Contact</a>
               <a href="#" class="hover:text-blue-900">Products</a>
            </div>
            <a href="#" class="p-3 px-6 t-2 text-white bg-black rounded-full">Get Started </a>
         </div>

      </nav>
   )
}