import { Menu } from "./components/Menu";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[#232323]">
      <div className="w-[1440px] bg-[#404040] flex flex-col items-center">
        <Header />
        <img src="/Hero.png"></img>
        <Categories />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}
