import { produce } from "immer";
import { create } from "zustand";

type StoreData = {
  user: { id: string; name: string } | null;
  data: any[];
  isLoading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
  loginUser: (userName: string, userPass: string, email?: string) => void;
  logoutUser: () => void;
};

export const useStore = create<StoreData>((set) => ({
  user: null,
  data: [],
  isLoading: false,
  error: null,
  fetchData: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      set({ data: result, isLoading: false });
      console.log("data has been updated!");
    } catch (err) {
      set({ error: "Failed to fetch data", isLoading: false });
    }
  },
  loginUser: (userName, userPass, email) => {},
  logoutUser: () => {},
}));
