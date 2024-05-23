import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
            <h1 className={`${styles.heroHeadText} text-white`}>H!!, I'm <span 
            className="text-[#915eff]">Jeet</span></h1>
            <p className={`${styles.heroSubText} flex text-white-100 mt-2`}>
              Even I don't Know About My Self &nbsp;
              <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f440/512.gif" alt="👀" width="32" height="32"/>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
