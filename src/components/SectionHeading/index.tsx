type SectionHeadingProps = {
  title: string;
  isService?: boolean;
};

const SectionHeading = ({ title, isService }: SectionHeadingProps) => {
  return (
    <div
      className={`relative ${!isService ? "2xl:mt-72 xl:mt-64 lg:mt-56 md:mt-48 mt-36 2xl:mb-40 xl:mb-36 lg:mb-32 md:mb-28 mb-24" : "lg:mt-20 md:mt-20 mt-8 mb-4"} text-primary text-center pb-4 flex justify-center w-fit mx-auto`}
    >
      <div className="flex">
        <h2
          className={`font-['Futura'] ${!isService ? "text-4xl" : "text-3xl"} 2xl:text-3xl font-bold`}
        >
          {title}
        </h2>
        <div className="w-[62px] h-[3px] bg-background absolute bottom-[.5rem] right-[2%] hidden md:block"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
