const Footer = () => {
  return (
    <footer className="bg-[#FBF7F2] py-12 px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-1">
          <div className="flex items-center mb-4">
            <img src="logo.png" alt="Book Store Logo" className="w-8 h-8" />
            <h2 className="ml-2 text-lg font-bold text-gray-800">Book Store</h2>
          </div>
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li>About Us</li>
            <li>How to work?</li>
            <li>Popular Course</li>
            <li>Service</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Courses</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Categories</li>
            <li>Offline Course</li>
            <li>Video Course</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Career</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Contact Info
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>+0913-705-3875</li>
            <li>Elizabeth@jourrapide.com</li>
            <li>4808 Skinner Hollow Road Days Creek, OR 97429</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-600">
        <p>Spellbound All Right Reserved, 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
