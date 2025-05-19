import React from "react";
import ServicesTabs from "@/components/services-tabs/services-tabs";
import Hero from "@/components/hero/hero";
import TextWithMedia from "@/components/text-with-media/text-with-media";
import Faq from "@/components/faq/faq";
import MultiColumn from "@/components/multi-column/multi-column";
import Reviews from "@/components/reviews/reviews";
import TabsContent from "@/components/tabs-content/tabs-content";
import MediaGrid from "@/components/media-grid/media-grid";

const Page: React.FC = () => {
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
export default Page;
