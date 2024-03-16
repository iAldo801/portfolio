'use client'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { lanyard } from "@/lib/fetch";
import { IconLucide } from "@/lib/icon-lucide";
import { IconTabler } from "@/lib/icon-tabler";
import { useQuery } from "react-query";

type LanyardData = {
    discord_user: {
        id: string;
        username: string;
        avatar: string;
        public_flags: number;
    };
};

export default function IntroductionCard() {

    const { data } = useQuery<LanyardData>("lanyard", async () => {
        const result = await lanyard("GET");
        return result as unknown as LanyardData;
    });

    return (
        <div className="bg-[url('/banner.gif')] rounded-sm">
            <Card className="bg-primary-foreground/50">
                <CardHeader>
                    <CardTitle className="w-[30rem]">
                        Hello, I'm <span className="underline decoration-amber-500">Aldo Hernandez</span>!
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between">
                        <div className="flex flex-col items-center justify-center max-w-[30rem] overflow-hidden w-full text-white/95 font-light">
                            <p>
                                Hey, I'm Aldo, a 16-year-old from Utah, deeply passionate
                                about web development. Coding is my world 🌐, but outside
                                of it, I'm all about gaming 🎮, hanging out with friends 👫,
                                and the occasional hike 🏞️. Balancing the digital and real-
                                life realms keeps things exciting for me!
                            </p>
                            <br />
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="flex items-center justify-center border mb-3 px-4 bg-primary/40 rounded-sm max-w-[27rem] overflow-hidden w-full">
                        <div className="flex py-3 gap-3">

                            <div className="bg-primary-foreground p-2 rounded-full border">
                                <IconLucide name="Linkedin" size={"lg"} />
                            </div>

                            <div className="bg-primary-foreground p-2 rounded-full border">
                                <IconLucide name="Mail" size={"lg"} />
                            </div>

                            <div className="bg-primary-foreground p-2 rounded-full border">
                                <IconLucide name="Instagram" size={"lg"} />
                            </div>

                            <div className="bg-primary-foreground p-2 rounded-full border">
                                <IconLucide name="Twitter" size={"lg"} />
                            </div>

                            <div className="bg-primary-foreground p-2 rounded-full border">
                                <IconTabler name="IconBrandDiscord" size={"lg"} />
                            </div>

                            <div className="bg-primary-foreground p-2 rounded-full border">
                                <IconLucide name="Github" size={"lg"} />
                            </div>

                        </div>
                    </div>

                    <div className="flex items-center justify-center border mb-3 px-4 bg-primary/40 rounded-sm max-w-[27rem] overflow-hidden w-full ml-auto">
                        <div className="flex py-3 gap-3">

                            <div className="bg-primary-foreground p-2 rounded-full border">
                                <IconTabler name="IconBrandNextjs" size={"lg"} />
                            </div>

                            <div className="bg-primary-foreground p-2 rounded-full border">
                                <IconTabler name="IconBrandReact" size={"lg"} />
                            </div>

                            <div className="bg-primary-foreground p-2 rounded-full border">
                                <IconTabler name="IconBrandNodejs" size={"lg"} />
                            </div>

                            <div className="bg-primary-foreground p-2 rounded-full border">
                                <IconTabler name="IconBrandHtml5" size={"lg"} />
                            </div>

                            <div className="bg-primary-foreground p-2 rounded-full border">
                                <IconTabler name="IconBrandCss3" size={"lg"} />
                            </div>

                            <div className="bg-primary-foreground p-2 rounded-full border">
                                <IconTabler name="IconBrandJavascript" size={"lg"} />
                            </div>

                            <div className="bg-primary-foreground p-2 rounded-full border">
                                <IconTabler name="IconBrandTailwind" size={"lg"} />
                            </div>

                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}