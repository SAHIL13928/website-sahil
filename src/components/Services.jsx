import React from 'react';
import bookshelf from '../assests/bookshelf.jpg';
import documents from '../assests/documents.jpg';

import people from '../assests/people.jpg';

const Services = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-24">
        <div className=" text-center mb-8">
          <h2 className="overflow-hidden text-3xl font-bold">SERVICES WE PROVIDE</h2>
          <p className="text-gray-600 mt-2">
            We understand the needs for professionalism, privacy, and confidentiality. We treat all our clients
            with understanding, with our guidance as well as to your clients.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-0">
          {/* First Section */}
          <div className="flex flex-col md:flex-row items-stretch">
            <img
              src={bookshelf}
              alt="Library Bookshelf"
              className="w-full md:w-1/2 h-48 object-cover"
            />
            <div className=" bg-white p-6 h-48 flex flex-col justify-center w-full md:w-1/2">
              <h3 className="overflow-hidden text-xl font-bold">Corporate CA Firm</h3>
              <p className="text-gray-600 overflow-hidden mb-4">
                When an attorney can offer both a galaxy of legal experience and committed to make a huge spectrum of legal counseling in order to top specialists.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white overflow-hidden font-bold py-2 px-4 rounded">
                Read More
              </button>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col md:flex-row-reverse items-stretch">
            <img
              src={documents}
              alt="Man Holding Documents"
              className="w-full md:w-1/2 h-48 object-cover"
            />
            <div className="bg-white p-6 h-48 flex flex-col justify-center w-full md:w-1/2">
              <h3 className="overflow-hidden text-xl font-bold">Corporate CA Firm</h3>
              <p className="text-gray-600 overflow-hidden mb-4">
                When an attorney can offer both a galaxy of legal experience and committed to make a huge spectrum of legal counseling in order to top specialists.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white overflow-hidden font-bold py-2 px-4 rounded">
                Read More
              </button>
            </div>
          </div>

          {/* Third Section */}
          <div className="flex flex-col md:flex-row items-stretch">
            <img
              src={people}
              alt="People working"
              className="w-full md:w-1/2 h-48 object-cover"
            />
            <div className="bg-white p-6 h-48 flex flex-col justify-center w-full md:w-1/2">
              <h3 className="overflow-hidden text-xl font-bold">Corporate CA Firm</h3>
              <p className="text-gray-600 overflow-hidden mb-4">
                When an attorney can offer both a galaxy of legal experience and committed to make a huge spectrum of legal counseling in order to top specialists.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white overflow-hidden font-bold py-2 px-4 rounded">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
