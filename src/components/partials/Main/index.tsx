import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import SideSlider from "@/components/SideSlider";

const Main = () => {
  return (
    <div className="text-[32px]">
      <SectionHeading title={"Про компанію"} />
      <div className="flex justify-between">
        <div className="w-1/2">
          <SideSlider />
        </div>
        <div>
          <h2>
            Якісне буріння від <Link href="/services">надійної компанії</Link>
          </h2>
          <p>
            З моменту свого заснування у 1996 році, наша спеціалізована компанія
            здійснює якісне гідрогеологічне буріння свердловин будь-якої
            складності. Кваліфіковані фахівці компанії
            <span className="text-background">«СВЕРДЛОВИНА»</span> ефективно
            користуються багаторічним досвідом і науковим підходом до проведення
            бурових операцій. У нашому розпорядженні є сучасна техніка, яка
            значно підвищує продуктивність робіт.{" "}
            <span className="text-background">
              Ми постійно займаємося проектуванням
            </span>
            , бурінням і капітальним ремонтом свердловин, за весь період
            професійної діяльності компанія виконала роботи на більш ніж трьох
            тисячах об'єктах.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
