import { create } from "zustand";

export const useUserStore = create((set) => ({
  users: [],
  setUsers: (data) => set(() => ({ users: data })),
  //   addUser: (newUser) => set((state) => ({ users: [...state.users, newUser] })),
  //   updateUser: (userID, newUser) =>
  //     set((state) => {
  //       return {
  //         users: state.users.map((user) =>
  //           user.id === userID
  //             ? {
  //                 id: newUser.id,
  //                 name: newUser.name,
  //                 email: newUser.email,
  //               }
  //             : user
  //         ),
  //       };
  //     }),
  //   deleteUser: (userID) =>
  //     set((state) => ({
  //       users: state.users.filter((user) => user.id !== userID),
  //     })),
}));
