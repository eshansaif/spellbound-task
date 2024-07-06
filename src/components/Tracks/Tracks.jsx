import StarRatings from "react-star-ratings";
import "./Tracks.css";
import { CiClock2 } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";

const Tracks = () => {
  return (
    <section className="tracks">
      <h2>Our Tracks</h2>
      <p>Lorem Ipsum is simply dummy text of the printing.</p>
      <div className="track-cards">
        <div className="card relative">
          <img src="track-1.png" alt="Track 1" />
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-[12px] ">UI/UX Design</p>
            <StarRatings
              rating={2.403}
              starDimension="16px"
              starSpacing="5px"
              starRatedColor="rgba(255, 161, 53, 1)"
            />
          </div>
          <h3>UI/UX Design for Beginners</h3>
          <p className="text-left text-[#FF7426] price">$98</p>
          <div className="dotted-line"></div>
          <div className="flex items-center justify-between">
            <p className="flex justify-between items-center gap-2">
              <CiClock2 />
              <span className="">22hr 30min</span>
            </p>
            <p className="flex justify-between items-center gap-2">
              <CiVideoOn />
              <span className="">34 Courses</span>
            </p>
            <p className="flex justify-between items-center gap-2">
              <MdOutlineFileDownload />
              <span className="">250 sales</span>
            </p>
          </div>
          <button className="absolute left-1/2 bottom-[-20px] transform -translate-x-1/2 bg-[#FF7426] text-white py-2 px-4 rounded-full shadow-lg hover:bg-[#e5671f] transition duration-300">
            Join Course
          </button>
        </div>
        <div className="card relative">
          <img src="track-2.png" alt="Track 2" />
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-[12px] ">UI/UX Design</p>
            <StarRatings
              rating={4.5}
              starDimension="16px"
              starSpacing="5px"
              starRatedColor="rgba(255, 161, 53, 1)"
            />
          </div>
          <h3>UI/UX Design for Beginners</h3>
          <p className="text-left text-[#FF7426] price">$98</p>
          <div className="dotted-line"></div>
          <div className="flex items-center justify-between">
            <p className="flex justify-between items-center gap-2">
              <CiClock2 />
              <span className="">22hr 30min</span>
            </p>
            <p className="flex justify-between items-center gap-2">
              <CiVideoOn />
              <span className="">34 Courses</span>
            </p>
            <p className="flex justify-between items-center gap-2">
              <MdOutlineFileDownload />
              <span className="">250 sales</span>
            </p>
          </div>
          <button className="absolute left-1/2 bottom-[-20px] transform -translate-x-1/2 bg-[#FF7426] text-white py-2 px-4 rounded-full shadow-lg hover:bg-[#e5671f] transition duration-300">
            Join Course
          </button>
        </div>
        <div className="card relative">
          <img src="track-3.png" alt="Track 3" />
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-[12px] ">UI/UX Design</p>
            <StarRatings
              rating={4}
              starDimension="16px"
              starSpacing="5px"
              starRatedColor="rgba(255, 161, 53, 1)"
            />
          </div>
          <h3>UI/UX Design for Beginners</h3>
          <p className="text-left text-[#FF7426] price">$98</p>
          <div className="dotted-line"></div>
          <div className="flex items-center justify-between mb-10">
            <p className="flex justify-between items-center gap-2">
              <CiClock2 />
              <span className="">22hr 30min</span>
            </p>
            <p className="flex justify-between items-center gap-2">
              <CiVideoOn />
              <span className="">34 Courses</span>
            </p>
            <p className="flex justify-between items-center gap-2">
              <MdOutlineFileDownload />
              <span className="">250 sales</span>
            </p>
          </div>
          <button className="absolute left-1/2 bottom-[-20px] transform -translate-x-1/2 bg-[#FF7426] text-white py-2 px-4 rounded-full shadow-lg hover:bg-[#e5671f] transition duration-300">
            Join Course
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
