import Image, { StaticImageData } from "next/image";

interface PricingProps {
  bgImage: StaticImageData;
  textColor: string;
  title: string;
  boyImage: StaticImageData;
  listItems: string[][];
  buttons: string[];
  bulletColor: string;
}

const Pricing: React.FC<PricingProps> = ({
  bgImage,
  textColor,
  title,
  boyImage,
  listItems,
  buttons,
  bulletColor,
}) => {
  return (
    <section
      className={`relative w-full h-auto flex flex-col items-center justify-center ${textColor} py-16`}
    >
      <Image
        src={bgImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto text-center px-4">
        <h1 className="text-5xl font-inter font-bold">{title}</h1>
      </div>

      <div className="container mx-auto p-0 sm:px-6 px-12 md:px-12 md:py-10">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-x-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={boyImage}
              width={392}
              height={313}
              alt="Boy"
              className="w-full max-w-[392px] h-auto"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <div className="flex flex-col md:flex-row">
              {listItems.map((column, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 flex flex-col font-inter space-y-4"
                >
                  <ul className="list-disc list-inside text-lg space-y-3">
                    {column.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span
                          className={`w-3 h-3 ${bulletColor} rounded-full inline-block`}
                        ></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row w-full justify-center md:justify-between mt-10 md:mt-20 gap-4 md:gap-6">
              {buttons.map((btn, idx) => (
                <button
                  key={idx}
                  className="bg-[#FF8D1A] hover:bg-[#d28335] rounded-lg py-3 px-10 md:px-16 w-full md:w-auto text-white font-semibold text-center"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
