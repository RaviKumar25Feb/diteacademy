"use client";

import { useEffect } from "react";
import { CrowserData } from "../../public/assets/CrowserData";
import CrowserCard from "../ui/CrowserCard";
import useMeasure from "react-use-measure";
import { motion, animate, useMotionValue } from "framer-motion";

function Crowser() {
  const [ref, { width: singleWidth }] = useMeasure(); // ✅ measure width of one full set
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    if (singleWidth > 0) {
      controls = animate(xTranslation, [0, -singleWidth], {
        ease: "linear",
        duration: 40,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
    return () => controls?.stop();
  }, [xTranslation, singleWidth]);

  return (
    <div className="max-sm:w-full w-11/12 rounded-lg mx-auto py-10 px-10 overflow-hidden bg-gradient-to-r from-[#FEEEE6] to-[#f7e6dd]">
      {/* Title Section */}
      <p className="text-orange-400 max-sm:text-3xl text-4xl font-semibold mb-2">
        5,300+ <span className="text-black">Learners</span>
      </p>
      <p className="text-gray-700 text-base sm:text-lg">
        have advanced their careers through{" "}
        <span className="font-semibold text-orange-500">Dite Academy</span>
      </p>

      {/* Crowser Animation Section */}
      <div className="py-5 overflow-hidden">
        <motion.div className="flex gap-5" style={{ x: xTranslation }}>
          {/* ✅ First visible set */}
          <div ref={ref} className="flex gap-5">
            {CrowserData.map((data, i) => (
              <CrowserCard
                key={i}
                img={data.img}
                name={data.name}
                company={data.company}
              />
            ))}
          </div>

          {/* ✅ Duplicate set for infinite loop */}
          <div className="flex gap-5">
            {CrowserData.map((data, i) => (
              <CrowserCard
                key={`dup-${i}`}
                img={data.img}
                name={data.name}
                company={data.company}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Crowser;
