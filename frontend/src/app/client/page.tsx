import Image from "next/image";
import ServicesTabs from "@/components/services-tabs/services-tabs";
import Hero from "@/components/hero/hero";
import TextWithMedia from "@/components/text-with-media/text-with-media";
import Faq from "@/components/faq/faq";
import MultiColumn from "@/components/multi-column/multi-column";
import Reviews from "@/components/reviews/reviews";

export default function Page() {
    return (
        <>
            <Hero/>
            <ServicesTabs/>
            <TextWithMedia/>
            <MultiColumn/>
            <Reviews/>
            <Faq/>
        </>
    );
}
