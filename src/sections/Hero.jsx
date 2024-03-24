import { FaTwitter, FaTelegram } from "react-icons/fa";
function Hero() {
  return (
    <section className=" pt-0  py-[8%]  ">
      <div className="container-wrapper">
        <div className=" flex justify-between items-center flex-col sm:flex-row">
          <div className=" w-full ">
            
            <img src="images/hero.png" alt="" className="h-[400px]" />
          </div>

          <div className=" max-w-4xl bg-[#000000ce] py-14 px-4 rounded-3xl border-2 border-white">
            <h1 className=" uppercase text-5xl text-[#ffb22e] font-groot-one font-bold text-center my-4">
            DogeGalaxy

            </h1>
            <h2 className="font-groot-one text-2xl my-2 text-[#ffffff] text-center font-bold relative z-30 -mt-4">
            To the Moon, Beyond, and the Galaxies Far-Far Away!
            </h2>

            <p className="uppercase text-xl text-[#ffb22e] font-groot-one font-bold text-center">
            CONTRACT ADDRESS
            </p>
            <a
              href="https://solscan.io/token/tHgCBc2iRxDSTEnLCKFCSHSN371gkntQ1LemB3TjbVt"
              target="_blank"
              className=" font-groot-two text-xs sm:text-xl text-center my-4 flex items-center justify-center bg-[#ffb22e] py-2 px-4 rounded-full "
            >
              tHgCBc2iRxDSTEnLCKFCSHSN371gkntQ1LemB3TjbVt
            </a>

            <div className=" flex justify-center gap-4 items-center">
              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/7b9oeHvP5XJdtW2UroERk1LxEBunVWbhXudWxwfBBdqM?t=1711275078363"
                target="_blank"
                className="font-groot-one text-2xl uppercase text-black bg-[#d59055] border-2 border-[#000000] py-2 px-6 rounded-full"
              >
                DexTools
              </a>
              <a
                href="https://t.me/dogegalaxys"
                target="_blank"
                className="font-groot-one text-2xl uppercase text-black bg-[#d59055] border-2 border-[#000000] py-2 px-6 rounded-full"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
