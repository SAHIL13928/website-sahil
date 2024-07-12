import React from 'react';
import bookshelf from '../assests/bookshelf.jpg';
import documents from '../assests/documents.jpg';
import laptop from '../assests/laptop.jpg';
import people from '../assests/people.jpg';

function HeroSection2() {
  return (
    <section className="bg-[#47A1C6] my-4 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl overflow-hidden font-bold mb-4">
              We Are The <br /> Leading Legal Company
            </h1>
            <p className="text-lg">
              We offer a full suite of services with a simple goal: to always provide the
              highest quality legal advice and representation to all of our clients. We
              understand that going through legal issues can be stressful, so we work
              diligently to make the process as smooth and straightforward as possible.
              For fast and efficient legal assistance, contact us today and experience
              our team's expertise in a number of legal fields.
            </p>
            <p className="text-lg font-bold mt-4">
              Just call us, we can answer all your questions.
            </p>
            <div className="mt-4 flex justify-center lg:justify-start">
              <a
                href="#"
                className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full"
              >
                Call Us
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={bookshelf}
              alt="Library Bookshelf"
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img
              src={laptop}
              alt="Woman Working on Laptop"
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img
              src={documents}
              alt="Man Holding Documents"
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img
              src={people}
              alt="People working"
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection2;
