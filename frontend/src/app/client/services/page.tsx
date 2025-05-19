import React from "react";
import ServicesHero from "@/components/services-hero/services-hero";
import ServicesList from "@/components/services-list/services-list";

const Page: React.FC = () => {
    return (
        <div className="scheme-light-3 background">
            <ServicesHero />
            <ServicesList />
        </div>
    );
};

export default Page;
