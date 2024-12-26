const FAQ = () => (
  <section className="">
    <div className=" w-[80%] mx-auto">
      <h1 className="text-4xl font-bold mb-12 border-l-4 border-yellow-500 pl-4 ml-8 ">FAQ</h1>
      <div className="space-y-4">
        {[
          {
            question: 'How does the gym equipment generate electricity?',
            answer:
              'Our gym equipment generates electricity through the energy you expend while exercising. The equipment is equipped with generators that convert your mechanical energy into electrical energy. This electricity can be used to power lights, equipment, or even stored for later use.',
          },
          {
            question: 'Is the equipment easy to maintain?',
            answer:
              'Yes, the equipment is designed to be user-friendly and low-maintenance. The components are durable, and regular cleaning and occasional servicing are all that is needed to keep the equipment running smoothly. We also provide maintenance guidelines and support to ensure the longevity of the equipment.',
          },
          {
            question: 'What are the costs of the equipment?',
            answer:
              'The cost of the equipment varies based on the type and size. We offer a range of options from compact machines for home use to larger, more sophisticated machines for commercial gyms. Please contact us directly for a personalized quote based on your needs and location.',
          },
          {
            question: 'Can the electricity generated be stored?',
            answer:
              'Yes, the electricity generated can be stored in batteries or used immediately for the gym’s lighting or equipment. We provide energy storage solutions to maximize the efficiency of the energy generated during workouts.',
          },
          {
            question: 'Is the equipment suitable for all fitness levels?',
            answer:
              'Absolutely! Our gym equipment is designed to be adjustable and adaptable to all fitness levels. Whether you are a beginner or an advanced athlete, the resistance and settings can be easily customized to suit your needs.',
          },
        ].map((faq, index) => (
          <details key={index} className="border-b-2 p-4">
            <summary className="font-semibold cursor-pointer text-lg">{faq.question}</summary>
            <p className="mt-2 p-6">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
