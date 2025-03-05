import { FAQS, FAQ_TITLE } from "../constants";

const FAQComponent = () => {
  return (
    <section className="text-white my-8">
      <div className="w-full text-center pb-6">
        <h2 className="text-2xl sm:text-5xl font-bold text-black">
          {FAQ_TITLE}
        </h2>
      </div>

      <div className="container mx-auto p-0 sm:px-6 md:px-12 md:py-10">
        <div className="flex flex-col gap-5 w-full bg-[#003366] p-4 md:px-16 md:py-16">
          {FAQS.map((faq, index) => (
            <details key={index} className="border-b border-white w-full group">
              <summary className="w-full text-left text-white text-2xl font-bold p-5 flex justify-between items-center cursor-pointer">
                {faq.question}
                <span className="group-open:rotate-180 transition-transform">
                  +
                </span>
              </summary>
              <div className="p-5 bg-white text-black">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;
