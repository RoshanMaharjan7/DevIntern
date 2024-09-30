import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import { useDeleteMember } from "../services/MemberApi";
import toast from "react-hot-toast";
import { QueryClient } from "@tanstack/react-query";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"
import EditMember from "./EditMember";

const MembersTable = ({ members }: { members: any }) => {
  const { mutate: deleteMutate } = useDeleteMember();
  const queryClient = new QueryClient();

  const handleDelete = (id: string) => {
    const postData = { id: id };
    deleteMutate(postData, {
      onSuccess: () => {
        toast.success("Deleted SuccessFully");
        queryClient.invalidateQueries();
      },
      onError: () => {
        toast.error("Error deleting member");
      },
    });
  };
  console.log("Members:", members);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[400px]">Name</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="">Edit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members &&
          members.map((member: any) => (
            <TableRow key={member._id}>
              <TableCell className="font-medium flex items-center gap-4">
                <img
                  src={member.photo}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
                <span className="flex flex-col ">
                  <p>{member.username}</p>
                  <p className="text-[#525252] text-[13px]">{member.email}</p>
                </span>
              </TableCell>
              <TableCell>{member.department}</TableCell>
              <TableCell>{member.role}</TableCell>
              <TableCell className="flex items-center gap-8">
                <Dialog>
                  <DialogTrigger asChild><button className="text-[#5D9936]">
                  <Pencil size={18} />
                </button></DialogTrigger>
                  <DialogContent>
                   <h3>Edit User</h3>
                   <EditMember member={member}/>
                  </DialogContent>
                </Dialog>
                
                <button
                  className="text-[#FF746B]"
                  onClick={() => handleDelete(member._id)}
                >
                  <Trash2 size={18} />
                </button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default MembersTable;
