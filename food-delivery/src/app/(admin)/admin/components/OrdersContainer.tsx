import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Orders = () => {
  return (
    <div className="w-[1171px] h-[948px] flex flex-col gap-6 ">
      <div className="flex justify-end">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-full">
        <div className="w-full h-[76px] flex gap-auto px-4 py-4 ">
          <div className="w-[486px] h-11 bg-white">
            <p className="font-bold text-5">Orders</p>
            <p>32 items</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
