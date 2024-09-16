import React from 'react';

const Accomodation = () => {
    document.title = "Registration | Pyrexia 2024"; // Set page title

    return (
        <div className='bg-[#001f3f] min-h-screen'>
            {/* Header Section */}
            <div className="relative pt-28 pb-16 flex items-center justify-center">
                <h1 className="text-[#ebe6d0] text-center text-[3.5rem] font-semibold leading-[4.5rem] z-10 md:text-[3.7rem] md:px-12 md:leading-[3.5rem]">
                    Accomodation
                </h1>
            </div>

            {/* Content Section */}
            <div className=" pb-20 flex relative items-center justify-center text-white">
                <div className="backdrop-blur-sm rounded-xl  m-auto h-fit p-6 m-auto lg:px-10">
                    <div className="px-4 md:px-10 lg:px-10 text-lg font-light text-justify max-w-4xl border pt-10  pb-10">
                        <p className="mb-4">
                            Clean and comfortable accommodation options are available.

                        </p>
                        <p className="mb-4">
                            Our accommodation facilities provide basic amenities like clean linen, washrooms, and 24-hour water supply.

                        </p>
                        <p className="mb-4">
                            Accommodation booking can be done by contacting the respective accommodation heads.

                        </p>
                        <p className="mb-8">
                            Our team will assist with any accommodation-related queries or concerns.
                        </p>

                  
                    <div>
                        <p className="mb-4">
                            Pyrexia Accomodation Contact Numbers
                        </p>
                    </div>

                    {/* Register Button */}

                    <ul className="list-disc list-inside">
                       
                            <ul className="list-disc list-inside"> Boys
                                <li className="leading-8 my-3">
                                Sunil meena : 9358677455
                                </li>
                                <li className="leading-8 my-3">
                                Sanjay kumawat : 87408 31837
                                </li>
                                <li className="leading-8 my-3">
                                Tushar kamboj :9518256360
                                </li>
                               
                            
                        </ul>
                       
                            <ul className="list-disc list-inside"> Girls
                                <li className="leading-8 my-3">
                                Khushi beniwal : 81689 01185
                                </li>
                                <li className="leading-8 my-3">
                             Samiksha Pradhan : 72059 95802
                        </li>
                              
                            </ul>
                        
                    </ul>
                    </div>

                    {/* Decorative Dots */}
                    <div className="flex items-center justify-center gap-3 pt-16 pb-16">
                        <div className="h-3 w-3 bg-[#ebe6d0] rotate-45"></div>
                        <div className="h-3 w-3 bg-[#ebe6d0] rotate-45"></div>
                        <div className="h-3 w-3 bg-[#ebe6d0] rotate-45"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accomodation;
