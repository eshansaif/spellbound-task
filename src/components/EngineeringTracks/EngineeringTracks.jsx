const EngineeringTracks = () => {
  return (
    <section className="bg-[#FDF8EE] py-12 px-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Tracks</h2>
        <p className="text-gray-600 mb-12">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="et-1.png"
              alt="Matthew E. McNatt"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-left">Matthew E. McNatt</h3>
            <p className="text-gray-500  text-left">
              Professor @George Brown College
            </p>
            <p className="text-gray-600 mt-4 mb-6  text-left">
              Ut enim ad minim veniam, quis nost exercitation ullamco laboris
              nisi ut aliquip ex commodo.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-[#FF7426] font-semibold mb-4">
                Engineering physics
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#">
                  <img src="insta.png" alt="Social Icon" />
                </a>
                <a href="#">
                  <img src="linkedin.png" alt="Social Icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="et-2.png"
              alt="Tracy D. Wright"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold  text-left">Tracy D. Wright</h3>
            <p className="text-gray-500  text-left">
              Professor @George Brown College
            </p>
            <p className="text-gray-600 mt-4 mb-6 text-left">
              Ut enim ad minim veniam, quis nost exercitation ullamco laboris
              nisi ut aliquip ex commodo.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-[#FF7426] font-semibold mb-4">
                Engineering physics
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#">
                  <img src="insta.png" alt="Social Icon" />
                </a>
                <a href="#">
                  <img src="linkedin.png" alt="Social Icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="et-3.png"
              alt="Cynthia A. Nelson"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-left">Cynthia A. Nelson</h3>
            <p className="text-gray-500 text-left">
              Professor @George Brown College
            </p>
            <p className="text-gray-600 mt-4 mb-6 text-left">
              Ut enim ad minim veniam, quis nost exercitation ullamco laboris
              nisi ut aliquip ex commodo.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-[#FF7426] font-semibold mb-4">
                Engineering physics
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#">
                  <img src="insta.png" alt="Social Icon" />
                </a>
                <a href="#">
                  <img src="linkedin.png" alt="Social Icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringTracks;
