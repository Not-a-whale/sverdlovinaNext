type SectionHeadingProps = {
  title: string;
};

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <div className="relative mb-40 mt-72 text-primary h-[55px] flex justify-center w-fit mx-auto">
      <div>
        <h2 className="font-['Futura'] text-5xl font-bold">{title}</h2>
        <div className="w-[62px] h-[3px] bg-background absolute bottom-0 right-[2%]"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
