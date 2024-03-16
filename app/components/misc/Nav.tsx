'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { IconLucide } from "@/lib/icon-lucide";
import { motion, useAnimation } from 'framer-motion';
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function Nav() {

    const { data: session } = useSession();
    const controls = useAnimation();

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = 95;

        controls.start({
            opacity: scrollPosition > threshold ? 0 : 1,
            y: scrollPosition > threshold ? -50 : 0,
            transition: { duration: 0.3 },
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.header animate={controls} className="flex justify-center h-20">
            <motion.nav className="bg-primary-foreground/30 backdrop-blur-3xl text-sm focus-visible:ring-1 fixed px-4 flex flex-col mt-4 justify-center border-[1px] max-w-[60rem] w-full z-10 rounded-sm h-16">
                <div className="flex justify-between items-center w-full">

                    <div className="flex justify-center items-center text-center rounded-full">

                        {!session && (
                            <h1 className="whitespace-nowrap text-3xl font-bold">
                                Welcome
                            </h1>
                        )}

                        {session && (
                            <h1 className="whitespace-nowrap text-3xl font-bold">
                                {session?.user?.name}
                            </h1>
                        )}

                    </div>

                    <ul className="flex justify-center items-center ml-auto gap-2">

                        <TooltipProvider>
                            <Tooltip delayDuration={1}>
                                <TooltipTrigger>
                                    <Link className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-primary-foreground h-9 w-9" href="/">
                                        <IconLucide name="HomeIcon" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <div className="flex items-center font-extralight">
                                        Home
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip delayDuration={1}>
                                <TooltipTrigger >
                                    <Link className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-primary-foreground h-9 w-9" href="/projects">
                                        <IconLucide name="FolderRoot" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <div className="flex items-center font-extralight">
                                        Projects
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <div className="border-l border-white/20 h-5 mx-2"></div>

                        {!session && (
                            <TooltipProvider>
                                <Tooltip delayDuration={1}>
                                    <TooltipTrigger>
                                        <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9" onClick={() => signIn('google',)}>
                                            <IconLucide name="LogIn" />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <div className="flex items-center font-extralight">
                                            Log In
                                        </div>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )}

                        {session && (
                            <TooltipProvider>
                                <Tooltip delayDuration={1}>
                                    <TooltipTrigger>
                                        <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9" onClick={() => signOut()}>
                                            <IconLucide name="LogOut" />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <div className="flex items-center font-extralight">
                                            Log Out
                                        </div>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )}

                    </ul>

                </div>

            </motion.nav>
        </motion.header>
    );
}
