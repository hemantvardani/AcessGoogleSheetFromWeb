import { RightArrow } from '../../assests/right-arrow';

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
          Access <span class="text-[#50d71e]">Google Sheet</span>
        </p>
        <p class="font-black text-5xl text-white"> From this Website</p>

        <button
          type="button"
          onClick={scrollToSection2}
          class=" font-mono	 items-center justify-center mt-10 text-white w-[20%] h-[10%] bg-blue-800 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg font-bold text-2xl px-5 py-2.5 text-center inline-flex  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          See Example
          <RightArrow />
        </button>

        <span class="w-25 content-center text-[#e3e3dc] mt-4">
        Changes made here are reflected in the Google Sheet, and vice versa:   <u><b>


          
          <a target='_blank' class=' text-[#e3e3dc]    hover:text-white'  href='https://docs.google.com/spreadsheets/d/1aCFidvMYq99gL87eWtYs1WOnJoKsCpgNF0wMIEjsrpM/edit#gid=0'>
          LINK TO GOOGLE SHEET
          </a>
        </b>
          </u>
          </span>

        
      </div>
    </div>
  );
}
