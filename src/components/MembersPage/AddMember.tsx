import { useForm } from "react-hook-form";
import { useAddMembers } from "../services/MemberApi";
import toast from "react-hot-toast";

const AddMember = () => {
  const { register, handleSubmit } = useForm();
  const { mutate } = useAddMembers();

  const onSubmit = (data: any) => {
    console.log(data);
    const postData = { ...data, photo: data.photo[0].name };
    mutate(postData, {
      onSuccess: () => {
        console.log("Member added Successfully");
        toast.success("Member Added Successfully");
      },
      onError: () => {
        toast.error("Error adding member");
      },
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[32px]"
    >
      <input
        {...register("username", { required: true })}
        type="text"
        placeholder="Name"
        className=" border-b border-[#D4D4D4] w-full py-[8px] px-[12px]"
      />
      <span className="w-full flex-grow flex flex-col gap-2">
        <label htmlFor="">Profile</label>
        <input
          {...register("photo", { required: true })}
          type="file"
          id="profile"
          className="hidden"
        />
        <label
          htmlFor="profile"
          className="bg-[#EEEEEE] text-center py-[8px] flex-grow border border-[#CBD5E1] rounded-[4px]"
        >
          Upload Profile Picture
        </label>
      </span>

      <span className="w-full flex-grow flex flex-col gap-2">
        <label htmlFor="">Email</label>
        <input
          {...register("email", { required: true })}
          type="text"
          className="border border-[#CBD5E1] py-2 rounded-[4px]"
          placeholder="example mail"
        />
      </span>

      <span className="flex gap-2 items-center">
        <input
          type="radio"
          {...register("department", { required: true })}
          id="Finance"
          value="Finance"
        />
        <label htmlFor="Finance" className="">
          Finance
        </label>
        <input
          type="radio"
          {...register("department", { required: true })}
          id="IT"
          value="IT"
        />
        <label htmlFor="IT">IT</label>
        <input
          type="radio"
          {...register("department", { required: true })}
          id="Operations"
          value="Operations"
        />
        <label htmlFor="Operations">Operations</label>
        <input
          type="radio"
          {...register("department", { required: true })}
          id="Marketing"
          value="Marketing"
        />
        <label htmlFor="Marketing">Marketing</label>
      </span>
      <span className="flex flex-col">
        <label htmlFor="">Role</label>
        <select id="" {...register("role",{required: true})}>
          <option value="Employee">Employee</option>
          <option value="Manager">Manager</option>
          <option value="Department Head">Department Head</option>
        </select>
      </span>
      <span className="flex justify-end">
        <button className="bg-[#5D9936] text-white px-[12px] py-[8px] rounded-[4px] w-fit">
          Save
        </button>
      </span>
    </form>
  );
};

export default AddMember;
