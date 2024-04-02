import TopSlider from "@/components/TopSlider";
import Navigation from "@/components/Navigation";

type Props = {
  children: React.ReactNode;
};

export default function Home(props: Props) {
  const { children } = props;
  return (
    <main className="bg-red-200">
      <Navigation />
      <TopSlider />
      <div className="container mx-auto">{children}</div>
    </main>
  );
}
