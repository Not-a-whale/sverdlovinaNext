type TopProps = {
  children: React.ReactNode;
  heading: string;
  description: string;
};

const Top = ({ children, heading, description }: TopProps) => {
  return (
    <div className="flex relative">
      <div className="absolute container flex justify-between top-0 left-0 w-full h-full">
        <div></div>
        <div></div>
      </div>
      {children}
    </div>
  );
};
