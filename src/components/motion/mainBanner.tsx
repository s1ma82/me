"use client";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default () => {
  const { scrollY } = useViewportScroll();

  // Смещение влево по скроллу от 0px до 300px скролла
  const x = (a:number) => useTransform(scrollY, [0, 640], [0, a]); 
  const opacity = useTransform(scrollY, [0, 640], [1, 0]);

    return (
        <>
            <motion.div className="fixed overflow-hidden w-2/3 h-[640px] rounded-4xl"
                style={{x: x(-500), opacity}}
            >
				<img  src="main-cropped.png" alt="Фото автора" 
				className="absolute w-full h-full object-cover object-[90%_100%] rounded-4xl"
			/>
			</motion.div>
    <motion.div
      className="fixed h-[640px] right-0 flex flex-col w-1/3 justify-start gap-20 items-center"
      style={{ x: x(500), opacity }}
            >
                    <img
                        src="main-logo.png"
                        alt="Аватар автора"
                        className="rounded-full w-60 h-60 logo-light"
                    />
      <h1 className="text-5xl font-family-title font-bold ">
        <span className="opacity-60">@</span>s1ma82
      </h1>
      <a href="#1section" className="lets-go mt-auto text-2xl opacity-60">
        Let's go!
      </a>
    </motion.div>
      </>
  );
}
