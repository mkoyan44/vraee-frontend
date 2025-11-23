import React from "react";
import ServicesTabs from "@/components/services-tabs/services-tabs";
import Hero from "@/components/hero/hero";
import ProgramsUsed from "@/components/programs-used/programs-used";
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
            <ProgramsUsed/>
            <TabsContent/>
            <MultiColumn/>
            <Reviews/>
            <MediaGrid/>
            <Faq/>
        </>
    );
}
export default Page;
