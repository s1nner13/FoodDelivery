import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
export const Foodmenu = () => {
  const buttons = [
    { name: "All Dishes", quantity: 49 },
    { name: "Appetizers", quantity: 6 },
    { name: "Salads", quantity: 3 },
    { name: "Pizzas", quantity: 5 },
    { name: "Lunch favorites", quantity: 5 },
    { name: "Main dishes", quantity: 5 },
    { name: "Fish & Sea foods", quantity: 5 },
    { name: "Brunch", quantity: 5 },
    { name: "Side dish", quantity: 5 },
    { name: "Desserts", quantity: 5 },
    { name: "Beverages", quantity: 5 },
  ];
  return (
    <div className="w-[1171px] h-[236px] flex flex-col gap-6  ">
      <div className="flex justify-end">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-[1171px] h-[176px] flex flex-col gap-4 px-6 py-6 rounded-2xl bg-white">
        <div className="ml-6 font-semibold text-[20px] text-black">
          Dishes category
        </div>
        <div className="w-[1123px] h-[84px] flex flex-wrap gap-3">
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant={"outline"}
              className="rounded-[9999px]"
            >
              {button.name}
              <Badge className="rounded-[9999px]">{button.quantity}</Badge>
            </Button>
          ))}
          <Button size="icon" className="rounded-full  bg-[#ef4444]">
            <Plus className="text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};
