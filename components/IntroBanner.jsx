import React from 'react'
import Image from 'next/image'; // Import Image from next/image
import bannergirl from '../public/bannergirl.png';

const IntroBanner = () => {
    return (
        <>
            <section className="max-w-screen-2xl bg-[#012555] px-24">
                <div className="mx-auto flex md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-white">Are you Sure about your fufure ?
                            {/* <br className="hidden lg:inline-block"/>readymade gluten */}
                        </h1>
                        <p className="text-white font-medium mb-8 leading-relaxed">Your recruitment starts here......</p>
                        <div className="flex justify-center">
                            <button className="inline-flex font-semibold text-[#012555] bg-white border-0 py-2 px-6 focus:outline-none rounded text-lg">Join Today</button>

                        </div>
                    </div>
                    <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
                        <Image
                            className="object-cover object-center rounded"
                            alt="hero"
                            src={bannergirl} // Use relative path from public folder
                            width={900} // Set appropriate width
                            height={900} // Set appropriate height
                            priority // Optional: for loading priority
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default IntroBanner
