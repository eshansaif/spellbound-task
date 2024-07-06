const Testimonials = () => {
  return (
    <section className="py-16 px-10 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What Students Say</h2>
        <p className="text-gray-500 mb-12">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4 text-gray-500 ">
              `Teachings of the great explore of truth, the master-builder of
              human happiness, no one rejects, dislikes, or avoids pleasure
              itself, pleasure itself`
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10">
                <img
                  className="w-10 h-10 rounded-full"
                  src="testimonial-1.png"
                  alt="Finlay Kirk"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold">Finlay Kirk</p>
                <p className="text-gray-500 text-sm">Web Developer</p>
              </div>
            </div>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4 text-gray-500">
              `Complete account of the system and expound the actual Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots`
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10">
                <img
                  className=" rounded-full"
                  src="testimonial-2.png"
                  alt="Danette P. Cervantes"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold">Danette P. Cervantes</p>
                <p className="text-gray-500 text-sm">Web Design</p>
              </div>
            </div>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4 text-gray-500">
              `There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour`
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10">
                <img
                  className=""
                  src="testimonial-3.png"
                  alt="Clara R. Altman"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold">Clara R. Altman</p>
                <p className="text-gray-500 text-sm">UI/UX Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
