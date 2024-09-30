import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Search } from "lucide-react";
import { useGetAllUsers } from "../services/MemberApi";
import MembersTable from "./MembersTable";
import AddMember from "./AddMember";
import { useState } from "react";

const MembersPage = () => {
    const {data:membersData}  = useGetAllUsers()
    console.log(membersData?.data)
    const [query, setQuery] = useState("")
    const filteredData = membersData?.data.map((member:any) => {
        if (query.toLowerCase().includes(member.username.toLowerCase()) || query.toLowerCase().includes(member.email.toLowerCase())){
            return member
        }
    })
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-[Neutral/700] font-bold text-[28px]">Team</h1>
        <span className="flex gap-[32px] items-center ">
          <Dialog>
            <DialogTrigger className="bg-[#5D9936] text-white px-[12px] py-[8px] rounded-[4px] flex items-center gap-2 text-sm font-medium  ">
              <Plus size={18} strokeWidth={3} />
              Add Members
            </DialogTrigger>
            <DialogContent>
             <h3>Add User</h3>
             <AddMember/>
            </DialogContent>
          </Dialog>

          <span className="relative text-[#737373]">
            <Search className="absolute left-4 top-2" size={20}/>
            <input
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
              type="text"
              className="bg-[#F5F5F5] border border-[#D4D4D4] rounded-[4px] px-[16px] py-[6px] min-w-[306px] pl-[50px] placeholder:text-[#A3A3A3]"
              placeholder="Search Members"
            />
          </span>
        </span>
      </div>

      <MembersTable members={membersData?.data}/>
    </section>
  );
};

export default MembersPage;
