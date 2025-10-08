import { useState } from "react";
import { motion } from "framer-motion";

import react from "../../icons/react.svg?raw";
import nextjs from "../../icons/nextjs.svg?raw";
import sass from "../../icons/sass.svg?raw";
import vite from "../../icons/vite.svg?raw";
import zustand from "../../icons/zustand.svg?raw";
import ts from "../../icons/ts.svg?raw";

const icons = [react, nextjs, sass, vite, zustand, ts];

export default function TechExplosion() {
    const [exploded, setExploded] = useState(false);
    const [flipped, setFlipped] = useState(false);

    const handleClick = (e: any) => {
        if (!exploded) {
            setExploded(true);
        } else {
            setFlipped((prev) => !prev);
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center py-16 perspective-[1200px] select-none">
            <motion.div
                className="relative h-[500px] w-[800px] rounded-3xl cursor-pointer group"
                onClick={handleClick}
                initial={false}
                animate={{
                    rotateY: flipped ? 180 : 0,
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.65, 0, 0.35, 1],
                }}
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                {/* FRONT SIDE */}
                <motion.div
                    className="absolute inset-0 w-full h-full rounded-3xl backface-hidden"
                    style={{
                        transform: "rotateY(0deg)",
                    }}
                >
                    <motion.img
                        src="scr.png"
                        alt="preview"
                        className="absolute inset-0 w-full h-full object-cover rounded-3xl
                            shadow-[0_0_30px_-5px_var(--color-blue),_inset_0_-5px_7px_#00000070]"
                        animate={{ scale: exploded ? 1.03 : 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />

                    {/* Overlay с иконками */}
                    <motion.div
                        className="absolute inset-0 flex justify-center items-center backdrop-blur-[2px] bg-backdrop rounded-3xl z-10"
                        animate={{
                            scale: exploded ? 1.03 : 1,
                            backdropFilter: exploded ? "blur(0px)" : "blur(4px)",
                            backgroundColor: exploded
                                ? "rgba(0,0,0,0)"
                                : "rgba(0,0,0,0.3)",
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative flex justify-center items-center w-full h-full overflow-visible z-20">
                            {icons.map((icon, i) => {
                                const containerWidth = 800;
                                const containerHeight = 500;
                                const sideX = Math.random() > 0.5 ? 1 : -1;
                                const sideY = Math.random() > 0.5 ? 1 : -1;
                                const offsetX = containerWidth / 2;
                                const offsetY = containerHeight / 2;
                                const randomX = sideX * offsetX;
                                const randomY = sideY * offsetY;
                                const randomRotate = (Math.random() - 0.5) * 1080;

                                return (
                                    <motion.div
                                        key={i}
                                        className="w-20 h-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                                        dangerouslySetInnerHTML={{ __html: icon }}
                                        animate={{
                                            x: exploded ? randomX : (i - 1) * 20,
                                            y: exploded ? randomY : 0,
                                            rotate: exploded ? randomRotate : 0,
                                            scale: exploded ? Math.random() * 1.4 + 0.8 : 1,
                                            opacity: 1,
                                            filter: exploded
                                                ? "drop-shadow(0 0 15px rgba(255,255,255,0.5))"
                                                : "drop-shadow(0 0 3px rgba(255,255,255,0.1))",
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 8,
                                            duration: 0.8,
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </motion.div>
                </motion.div>

                {/* BACK SIDE */}
                <motion.div
                    className="absolute inset-0 w-full h-full rounded-3xl bg-[#0a0a0a] text-white flex items-center justify-center backface-hidden"
                    style={{
                        transform: "rotateY(180deg)",
                    }}
                >
                    {/* 💡 Здесь потом вставишь свой JSX с дополнительной информацией */}
                    <motion.div
                        className="flex flex-col gap-6 h-full w-full bg-background rounded-3xl p-6
                            shadow-[0_0_30px_-5px_var(--color-blue),_inset_0_-5px_7px_#00000070]"

                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: flipped ? 1 : 0, y: flipped ? 0 : 20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2 className="text-3xl w-full text-center font-bold font-inter">Сайт для <span className="text-blue">Симферопольского колледжа радиоэлектроники</span>.</h2>
                        <div className="flex flex-col">
                        <p className="text-[20px] w-full font-medium">
                            Отвечал за разработку клиентской части сайта, админку и редактор контента на базе Tiptap. <br/> Система авторизации через JWT.
                        </p>
                        <p className="text-[20px] w-full font-medium">
                            Отдельная благодарность Бэкендеру проекта, за лаконичное API.
                        </p>
                        <div className="flex gap-3 [&>img]:rounded-xl h-[144px] py-2">
                            <motion.img 
                                className="object-cover h-full cursor-grab"
                                whileTap={{
                                    scale: 2.6,
                                    transition: {duration: .2}
                                }}
                                onMouseDown={(e) => e.stopPropagation()}
                                onTouchStart={(e) => e.stopPropagation()}       
                                src="scr1.jpg" alt="" 
                            />
                            <motion.img 
                                className="object-cover h-full cursor-grab"
                                whileTap={{
                                    scale: 2.6,
                                    transition: {duration: .2}
                                }}
                                onMouseDown={(e) => e.stopPropagation()}
                                onTouchStart={(e) => e.stopPropagation()}
                                src="scr2.jpg" alt="" 
                            />
                        </div>
                        <ul
                            className="flex flex-col list-disc pl-6 text-[20px]"
                        >
                            <li>Человек в команде: <span className="text-blue">3</span></li>
                            <li>Команда: <span className="text-yellow">UI/UX</span>, <span className="text-green">Back+DevOps</span>, <span className="text-blue">Front-end</span></li>
                            <li>Моя роль: <span className="text-blue">Front-end</span> <span className="text-gray">обновляю проект и по сей день</span></li>
                        </ul>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
