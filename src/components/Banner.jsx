import { Link } from 'react-router-dom';
import questionMarkImage from '../assests/ttl.png';

const Banner = () => {
  return (
    <div className="m-6 mx-8 bg-[#b3dafa] p-10 rounded-lg shadow-md flex">
      <div className=" w-1/2">
        <img
          className="w-full h-full object-cover"
          src={questionMarkImage}
          alt="Question Mark"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center p-10">
        <h2 className="text-3xl overflow-hidden font-bold mb-4">
          Not sure about the packages?
        </h2>
        <p className="text-gray-500 mb-6">
          Talk to our experts to kickstart your business registration process.
        </p>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <Link to="/contact">
            Talk to registration expert
          </Link>

        </button>
      </div>
    </div>
  );
};

export default Banner;
