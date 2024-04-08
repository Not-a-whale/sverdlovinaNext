type SectionHeadingProps = {
  title: string;
};

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <div className="relative mb-32 mt-60 text-primary h-[42px] flex justify-center">
      <div>
        <h2 className="font-['Futura']">{title}</h2>
        <div className="w-[62px] h-[3px] bg-background absolute bottom-0 left-1/2 transform translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
