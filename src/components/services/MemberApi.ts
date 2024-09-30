import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Endpoints } from "./Endpoints";

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `https://assessment-api-biay.onrender.com${Endpoints.users}`
        );
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
};

export const useAddMembers = () => {
  return useMutation({
    mutationFn: async (postData: any) => {
      const response = await axios.post(
        `https://assessment-api-biay.onrender.com${Endpoints.users}`,
        postData
      );
      return response.data;
    },
  });
};

export const useDeleteMember = () => {
  return useMutation({
    mutationFn: async (postData: any) => {
      const response = await axios.delete(
        `https://assessment-api-biay.onrender.com${Endpoints.users}/${postData.id}`,
        postData
      );
      return response.data;
    },
  });
};

export const useEditMember = () => {
  return useMutation({
    mutationFn: async (postData: any) => {
        console.log(postData)
      const response = await axios.put(
        `https://assessment-api-biay.onrender.com${Endpoints.users}/${postData.id}`,
        postData
      );
      return response.data;
    },
  });
};

