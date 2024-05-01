import MainForm from "@/components/partials/Top/Form";

type TopProps = {
  children?: React.ReactNode;
  heading: string;
  description: string;
};

const Top = ({ children, heading, description }: TopProps) => {
  const handleFormSubmit = (data: {
    name: string;
    phone: string;
    email: string;
  }) => {
    console.log(data);
  };

  return (
    <div className="h-[100vh] md:h-[90vh] 2xl:h-[90vh] relative">
      <div
        className="absolute flex
        gap-6
        lg:gap-0
        flex-col
        lg:flex-row
        mx-auto
        justify-between md:w-[75%] lg:w-[90%] left-[5%] right-[5%]
        z-20 lg:top-1/2 transform translate-y-1/4 lg:-translate-y-[50%]"
      >
        <div className="max-w-[90%] lg:max-w-[45%] mx-auto">
          <h1
            className="font-['Futura']
            text-[2rem]
            lg:text-left
            text-center
            mb-4
            lg:mb-0
           md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] leading-[2.4rem] xl:leading-[3rem] 2xl:leading-[4rem] font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
          >
            {heading}
          </h1>
          <p
            className="md:my-4 lg:my-8
            text-center text-white text-[1.3rem] md:text-[1.5rem]
            lg:text-left"
          >
            {description}
          </p>
        </div>
        <div className="flex w-[90%] lg:w-[45%] mx-auto">
          <MainForm />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Top;
