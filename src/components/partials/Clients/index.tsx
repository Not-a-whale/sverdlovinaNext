import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import Image from "next/image";

import Image1 from "@/assets/images/partners/UkrCom.png";
import Image2 from "@/assets/images/partners/Renome.png";
import Image3 from "@/assets/images/partners/Pan_Kurchak.png";
import Image4 from "@/assets/images/partners/LutskSantekhMontazh.png";
import Image5 from "@/assets/images/partners/Zhitlobud.png";

const Clients = () => {
  return (
    <>
      <SectionHeading title={"Нам довіряють"} />
      {/*Grid container with one row for as many items as possible, for tablet - 2 rows, mobile - 1 column*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center justify-items-center gap-10 md:gap-20 mx-[10%]">
        <Link href="http://pankurchak.ua/">
          <Image src={Image3} alt="Pan kurchak image" />
        </Link>
        <Link href="http://www.zb2.com.ua/">
          <Image src={Image5} alt="Zhitlobud Image" />
        </Link>
        <Link href="https://evrobud.renome.ua/">
          <Image src={Image2} alt="Renome image" />
        </Link>
        <Link href="http://www.lstm.com.ua/">
          <Image src={Image4} alt="Lutsk santekh montazh image" />
        </Link>
        <Link href="http://www.ukrcom.net/">
          <Image src={Image1} alt="UkrCom" />
        </Link>
      </div>
    </>
  );
};

export default Clients;
