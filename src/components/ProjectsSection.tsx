import React from 'react'

const ProjectsSection = () => {
    return (
        <section>
            <div className="py-16">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
                    <p className="text-lg text-center mb-8">
                        We offer a wide range of construction and infrastructure services tailored to your needs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Add your service cards here */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection