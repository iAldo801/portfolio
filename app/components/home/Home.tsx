import IntroductionCard from "./components/IntroductionCard";
import Misc from "./components/Misc";
import Services from "./components/Services";

export default function Main() {
    return (
        <article className="flex flex-col mx-auto min-w-[60rem] max-w-[60rem] w-full py-16">
            <IntroductionCard />
            <Services />
            <Misc />
        </article>
    );
}