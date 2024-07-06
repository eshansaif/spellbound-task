const PremiumLearning = () => {
  return (
    <section className="bg-[#FDF8EE] py-12 px-36">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="premium-learning-left.png"
            alt="Learning illustration"
            className="max-w-full w-[500px] "
          />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Premium <span className="text-orange-500">Learning</span> <br />{" "}
            Experience
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <div className="flex-shrink-0 bg-purple-500 p-2 rounded-full">
                {/* Icon for Easily Accessible */}
                <img
                  src="premium-icon-1.png"
                  alt="Easily Accessible Icon"
                  className="w-6 h-6"
                />
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold">Easily Accessible</p>
                <p className="text-gray-500">
                  Learning will feel very comfortable with Courselab.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="flex-shrink-0 bg-purple-500 p-2 rounded-full">
                {/* Icon for Fun learning experience */}
                <img
                  src="premium-icon-2.png"
                  alt="Fun Learning Experience Icon"
                  className="w-6 h-6"
                />
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold">Fun Learning Experience</p>
                <p className="text-gray-500">
                  Learning will feel very comfortable with Courselab.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PremiumLearning;
