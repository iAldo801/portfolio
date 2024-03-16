"use client"

import {
    Card,
    CardContent
} from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { lanyard } from "@/lib/fetch";
import { motion } from 'framer-motion';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

type LanyardData = {
    discord_user: {
        id: string;
        username: string;
        avatar: string;
        public_flags: number;
    };
    spotify: {
        "track_id": string;
        "song": string;
        "artist": string;
        "album": string;
        "album_art_url": string;
    }
};

export default function Misc() {

    const [time, setTime] = useState("");
    const { data, isLoading } = useQuery<LanyardData>("lanyard", async () => {
        const result = await lanyard("GET");
        return result as unknown as LanyardData;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'America/Denver' } as Intl.DateTimeFormatOptions;
            setTime(date.toLocaleTimeString([], options));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (isLoading) {
        return (

            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                style={{
                    width: '50px',
                    height: '50px',
                    border: '5px solid #2563eb',
                    borderTop: '5px solid #1e3a8a',
                    borderRadius: '50%',
                    boxSizing: 'border-box',
                    margin: 'auto',
                    marginTop: '50px',
                }}
            />

        )
    }

    return (
        <div className={`${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity'}`}>

            <div className={`grid grid-cols-3 gap-1 ${isLoading ? '' : 'animate-fade-up duration-500'}`}>

                <Card>
                    <CardContent className="flex justify-center items-center p-6 h-full">
                        <div className="flex flex-col justify-center text-center items-center bg-slate-900/40 border py-8 max-w-72 overflow-hidden max-h-44">
                            <span className="w-64 text-center text-6xl text-amber-600 font-bold font-digital">
                                {time}
                            </span>
                            <p className="text-amber-500 font-bold uppercase">
                                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                            <p className="text-amber-500 font-bold uppercase">
                                Mountain Standard Time
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex justify-center items-center p-6 h-full">
                        <div className="w-64">
                            {data && data.spotify ? (
                                <div className="flex text-center justify-center items-center">
                                    <div className="record">
                                        <TooltipProvider>
                                            <Tooltip delayDuration={1}>
                                                <TooltipTrigger>
                                                    <Image
                                                        src={data.spotify.album_art_url as string}
                                                        alt="Album Art"
                                                        width={68}
                                                        height={68}
                                                        className="absolute rounded-full top-1/2 left-1/2 -m-[35px]"
                                                    />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <div className="flex flex-col items-center font-extralight">
                                                        <span className="text-center text-base font-bold text-amber-600">
                                                            {data.spotify.song}
                                                        </span>
                                                        <span className="text-center text-amber-500 font-bold">
                                                            {data.spotify.artist}
                                                        </span>
                                                    </div>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex text-center justify-center items-center">
                                    <div className="recordNA" />
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

            </div>

        </div>
    )
}