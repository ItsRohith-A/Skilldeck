import React from 'react'

const Projects = () => {
    return (
        <div className="container mx-auto mt-12 xl:mt-24 ">
            <div className="space-y-6">
                <div className="text-neutral-950 text-4xl font-bold leading-[54px] text-center">
                    My Creative Works & <span className="text-prime-blue">Latest Projects</span> for
                </div>
                <div className="text-center text-zinc-800 text-base font-bold">I have selected and mentioned here some of my latest projects to share with you.</div>
                <div className="grid grid-cols-3 gap-16">
                    <div className="div">
                        <div className="bg-prime-dark h-96 w-full rounded-2xl">

                        </div>
                        <div className="text-prime-dark hover:text-prime-blue text-xl font-semibold leading-10">Training Website </div>
                        <div className="text-zinc-800 text-sm font-bold leading-tight">E-Learning Platform</div>
                    </div>
                    <div className="div">
                        <div className="bg-prime-dark h-96 w-full rounded-2xl">
                        </div>
                        <div className="text-prime-dark hover:text-prime-blue text-xl font-semibold leading-10">Training Website </div>
                        <div className="text-zinc-800 text-sm font-bold leading-tight">E-Learning Platform</div>
                    </div>
                    <div className="div">
                        <div className="bg-prime-dark h-96 w-full rounded-2xl">

                        </div>
                        <div className="text-prime-dark hover:text-prime-blue text-xl font-semibold leading-10">Training Website </div>
                        <div className="text-zinc-800 text-sm font-bold leading-tight">E-Learning Platform</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
