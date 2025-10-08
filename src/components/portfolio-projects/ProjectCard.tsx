import { useState } from "react";
import { motion } from "framer-motion";
import { techIcons } from "../../icons";


type Props = React.ComponentProps<'div'> & {
    height: number;
    width: number;
    icons: string[][];
    imgs: string[];
}
export default ({height, width, icons, imgs, children}: Props) => {
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
                className={`relative rounded-3xl cursor-pointer group`}
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
                    width,
                    height
                }}
            >
                {/* FRONT SIDE */}
                <motion.div
                    className="absolute inset-0 w-full h-full rounded-3xl backface-hidden"
                    style={{
                        transform: "rotateY(0deg)",
                    }}
                >
                    <motion.div
                        className="absolute flex gap-1 inset-0 w-full h-full  rounded-3xl overflow-hidden
                            shadow-[0_0_30px_-5px_var(--color-blue),_inset_0_-5px_7px_#00000070]"
                        animate={{ scale: exploded ? 1.03 : 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {imgs?.map((src, i) => {
                            return <img
                                src={src}
                                key={i}
                                className={`object-fit h-full w-1/${imgs.length}`}
                                alt="preview"
                            />
                        })}
                    </motion.div>

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
                        <div className="flex flex-col gap-8 justify-center items-center w-full h-full overflow-visible z-20">
                            
                            {icons?.map((iconsList, i) =>
                                <div className="relative flex justify-center items-center w-full h-[50px] overflow-visible z-20">
                                    {iconsList?.map((icon, i) => {
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
                                                dangerouslySetInnerHTML={{ __html: techIcons[icon] }}
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
                            )}
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
                        {children}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
