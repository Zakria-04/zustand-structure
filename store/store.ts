import { DataType, UserDataType } from "@/res/types";
import { produce } from "immer";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type StoreData = {
  // store
  data: DataType[];
  isLoading: boolean;
  error: string | null;

  // user data from db
  user: UserDataType | null;
  auth: boolean;

  // user data from store
  cartList: DataType[];
  favoriteList: DataType[];
  ordersHistory: DataType[];

  // functions
  fetchData: () => Promise<void>;
  addToCart: (data: DataType) => void;
};

export const useStore = create<StoreData>()(
  persist(
    (set) => ({
      // store
      data: [],
      isLoading: false,
      error: null,

      // user data from db
      user: null,
      auth: false,

      // user data from store
      cartList: [],
      favoriteList: [],
      ordersHistory: [],

      // functions
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

      addToCart: (data) => {
        set(
          produce((state) => {
            const cartStorage = (activeUser: DataType[]) => {
              const checkIfInCart = activeUser.find(
                (itemID: any) => itemID.id === data.id
              );
              if (checkIfInCart) {
                console.log("item is inside");
              } else {
                activeUser.unshift(data);
              }
            };
            if (state.auth) {
              cartStorage(state.user.cartList);
            } else {
              cartStorage(state.cartList);
            }
          })
        );
      },
    }),
    {
      name: "storage-name",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
