import TopSlider from "@/components/TopSlider";
import Navigation from "@/components/Navigation";
import Top from "../../../components/partials/Top";
import Main from "@/components/partials/Main";
import Services from "@/components/partials/Services";
import Clients from "@/components/partials/Clients";

type Props = {
  children: React.ReactNode;
};

export default function Home(props: Props) {
  const { children } = props;
  const heading = "Буріння свердловин на воду будь-якої складності";
  const description =
    "В м.Києві, Київській, Житомирській, Черкаській, Вінницькій, Кіровоградській, Рівненській, Полтавській, Сумській, Чернігівській Областях.";
  return (
    <main>
      <Navigation />
      <Top heading={heading} description={description}>
        <TopSlider />
      </Top>
      <Main />
      <Services />
      <Clients />
    </main>
  );
}
