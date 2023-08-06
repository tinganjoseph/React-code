const InfoSection = () => {
  const steps = [
    { title: 'STEP 1. GET IN TOUCH', text: 'Contact us to learn more about how Kany Path can assist...' },
    { title: 'STEP 2. COMPUTER AUDIT', text: 'There will be desktop audits on every farm...' },
    { title: 'STEP 3. SIGNING A SUPPLY AGREEMENT', text: 'The GLAA requires that KanyPath and the Employer...' },
    { title: 'STEP 4. MEETING / FARM INSPECTION', text: 'We enjoy meeting with consumers in person...' },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h4 className="font-semibold text-2xl text-gray-700 text-center mb-5">customers process</h4>
        <h2 className="font-semibold text-4xl text-gray-900 text-center mb-5">STEP BY STEP</h2>
        <p className="text-center mb-8">
          <span className="text-gray-700">We made our process simple, fast and effective.</span>
        </p>
        <div className="grid grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'md:ml-36' : 'md:mr-36'}`}>
              <div className="relative">
                <div className="absolute z-10 bg-green-900 w-16 h-16 rounded-full flex items-center justify-center text-yellow-50" style={{ left: '-27px', top: '50%', transform: 'translateY(-50%)' }}>
                  {/* Icon goes here */}
                  <span>Icon</span>
                </div>
                <div className="bg-gray-800 py-12 px-10 rounded-lg shadow-md flex-grow relative ">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold text-yellow-50">{step.title}</h3>
                  </div>
                  <p className="text-white font-light">{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;