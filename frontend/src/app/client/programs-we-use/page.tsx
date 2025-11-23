import React from "react";
import ProgramsShowcase from "@/components/programs-showcase";
import CustomProjectForm from "@/components/custom-project-form";
import Footer from "@/components/footer/footer";

const Page: React.FC = () => {
    return (
        <>
            <section className="py-16 px-4 background">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 btn-primary text-white rounded-full text-sm font-medium mb-6">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Tools & Software
                        </div>

                        <h1
                            className="text-3xl md:text-4xl font-bold mb-6"
                            style={{ color: 'rgb(var(--color-title))' }}
                        >
                            Programs We Use
                        </h1>

                        <p
                            className="text-lg max-w-3xl mx-auto"
                            style={{ color: 'rgb(var(--color-text))' }}
                        >
                            Explore the professional tools we use to create precise, high-quality 3D models, renders, and animations.
                            Each software plays a specialized role in our comprehensive workflow, ensuring exceptional results for your projects.
                        </p>
                    </div>

                    {/* Programs Showcase */}
                    <div className="mb-20">
                        <ProgramsShowcase />
                    </div>

                    {/* Custom Project Section */}
                    <div className="text-center mb-12">
                        <h2
                            className="text-2xl md:text-3xl font-bold mb-4"
                            style={{ color: 'rgb(var(--color-title))' }}
                        >
                            Ready for a Custom Project?
                        </h2>
                        <p
                            className="text-lg max-w-2xl mx-auto"
                            style={{ color: 'rgb(var(--color-text))' }}
                        >
                            Have a specific vision or need expertise with a particular software?
                            Let us help you bring your ideas to life with our professional 3D visualization services.
                        </p>
                    </div>

                    <CustomProjectForm />
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default Page;
