import { LayoutDashboard, Settings, TruckIcon } from "lucide-react";
import { Orders } from "./components/OrdersContainer";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[#232323] ">
      <div className="w-[1440px] h-screen bg-[#f4f4f5] flex">
        <div className="w-[205px] h-full bg-white flex flex-col gap-10 px-5 py-9">
          <div className="w-[146px] h-11 flex gap-3">
            <img src="/nomnomLogo.png" />
            <div className="w-22 h-11">
              <p className="font-semibold text-5 text-black">NomNom</p>
              <p className="text-[12px] text-[#71717a]">Swift delivery</p>
            </div>
          </div>
          <div className="w-[165px] h-[168px] flex flex-col gap-6">
            <div className="w-full h-10 flex gap-[10px] px-6 py-2 items-center">
              <LayoutDashboard></LayoutDashboard>
              <p className="font-medium text-[14px] ">Food menu</p>
            </div>
            <div className="w-full h-10 flex gap-[10px] px-6 py-2 items-center">
              <TruckIcon></TruckIcon>
              <p className="font-medium text-[14px] ">Orders</p>
            </div>
            <div className="w-full h-10 flex gap-[10px] px-6 py-2 items-center">
              <Settings></Settings>
              <p className="font-medium text-[14px] ">Orders</p>
            </div>
          </div>
        </div>
        <div className="mt-[110px] ml-[24px] mr-[40px] ">
          <Orders />
        </div>
      </div>
    </div>
  );
}
