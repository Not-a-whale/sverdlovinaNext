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
    <div
      className="
    h-[70vh] lg:h-[75vh] xl:h-[80vh] 2xl:h-[90vh]"
    >
      <div
        className="absolute flex
        gap-6
        lg:gap-0
        flex-col
        lg:flex-row
        mx-auto
        justify-between md:w-[75%] lg:w-[90%] left-[5%] right-[5%]
        z-20 top-[35%] lg:top-1/2 transform -translate-y-1/2 lg:-translate-y-[75%]"
      >
        <div className="max-w-[90%] lg:max-w-[45%] mx-auto">
          <h1
            className="font-['Futura']
            text-[2rem]
            lg:text-left
            text-center
           md:text-[2rem] lg:text-[3rem] xl:text-[4rem] leading-[2.4rem] xl:leading-[3rem] 2xl:leading-[4rem] font-bold text-white"
          >
            {heading}
          </h1>
          <p
            className="my-8
            lg:text-left
            text-center text-white text-[1.4rem] md:text-xl lg:text-xl xl:text-xl"
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
