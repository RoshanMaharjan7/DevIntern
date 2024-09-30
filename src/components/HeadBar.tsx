import { Bell } from "lucide-react";

const HeadBar = () => {
  return (
    <header className="flex items-center justify-end gap-8 my-4 mb-8">
      <span className="relative">
        <Bell size={24} />
        <p className="absolute -top-1 -right-1 bg-[#FA3E3E] text-[10px] text-white font-medium px-1.5 rounded-full">
          1
        </p>
      </span>
      <span className="flex items-center gap-2">
        <img src="/profile.svg" alt="" />
        <p className="text-[#525252] font-medium">Roshan M.</p>
      </span>
    </header>
  );
};

export default HeadBar;
