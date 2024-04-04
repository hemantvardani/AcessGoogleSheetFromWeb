import { RightArrow } from "../../assests/right-arrow";

function scrollToSection2() {
   const section2 = document.getElementById('section2');
   if (section2) {
     section2.scrollIntoView({ behavior: 'smooth' });
   }
 }
export function Header() {
  return (
    <div class="flex flex-col h-screen   items-center justify-center">
      <div class=" min-w-[100%] min-h-[100%]  flex flex-col items-center justify-center  border border-gray-200 rounded-1xl shadow-lg bg-violet-700">
        <p class="font-mono	 text-purple-400 text-3xl font-bold italic">
          Now...
        </p>

        <p class="font-black text-6xl text-white drop-shadow-lg mt-10">
          Access Your <span class="text-[#50d71e]">Google Sheet</span>
        </p>
        <p class="font-black text-6xl text-white"> From Web</p>

        <button
          type="button"
          onClick={scrollToSection2}
          class=" font-mono	 items-center justify-center  text-white w-[20%] h-[10%] bg-blue-800 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg font-bold text-2xl px-5 py-2.5 text-center inline-flex  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          See Example
         <RightArrow/>
        </button>
      </div>
    </div>
  );
}
