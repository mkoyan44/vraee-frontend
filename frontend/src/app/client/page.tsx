import Image from "next/image";
import ServicesTabs from "@/components/services-tabs/services-tabs";
import Hero from "@/components/hero/hero";
import TextWithMedia from "@/components/text-with-media/text-with-media";
import Faq from "@/components/faq/faq";
import MultiColumn from "@/components/multi-column/multi-column";
import Reviews from "@/components/reviews/reviews";
import TabsContent from "@/components/tabs-content/tabs-content";
import MediaGrid from "@/components/media-grid/media-grid";

export default function Page() {
    return (
        <>
            <Hero/>
            <ServicesTabs/>
            <TextWithMedia/>
            <TabsContent/>
            <MultiColumn/>
            <Reviews/>
            <MediaGrid/>
            <Faq/>
        </>
    );
}
