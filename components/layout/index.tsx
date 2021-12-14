import { FunctionComponent } from "react";
import { motion } from "framer-motion";

const Layout: FunctionComponent = (props) => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    };
    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: "easeInOut" }}
            className="relative w-full min-h-full bg-background text-white"
        >
            {props.children}
        </motion.div>
    );
};

export default Layout;
