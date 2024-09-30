import { ArrowUpDown, Home, Search, StickyNote, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 flex flex-col w-[220px] bg-[#FAFAFA] h-screen py-[40px] px-[16px]">
      <span className="flex items-center justify-center text-[#525252] text-[19px] font-medium gap-3">
        <img src="/logo.svg" alt="" className="w-[32px] h-[32px]" />
        Calender
      </span>
      <nav className="text-[#737373] flex flex-col gap-y-[12px] mt-12">
        <NavLink to={"/"} className="flex gap-[8px] rounded-[4px] px-[12px] py-2">
          <Home /> Home
        </NavLink>
        <NavLink to={"/"} className="flex gap-[8px] rounded-[4px] px-[12px] py-2">
          <Search /> Search
        </NavLink>
        <NavLink to={"/"} className="flex gap-[8px] rounded-[4px] px-[12px] py-2">
          <Users /> Members
        </NavLink>
        <NavLink to={"/"} className="flex gap-[8px] rounded-[4px] px-[12px] py-2">
          <ArrowUpDown />Import/Export
        </NavLink>
        <NavLink to={"/"} className="flex gap-[8px] rounded-[4px] px-[12px] py-2">
          <StickyNote />Summary
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
