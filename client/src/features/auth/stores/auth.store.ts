import { User } from "@/types/user.types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";




interface AuthState {
    user:User | null,
    accessToken:string | null,
    refreshToken:string | null,
    isAuth:boolean,
    
    setAuth: (data: { user?: User | null; accessToken: string; refreshToken?: string | null }) => void;
    setUser: (user: User) => void;
    logout: () => void;
}


export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            accessToken: null,
            refreshToken: null,
            isAuth: false,

            setAuth: ({ user, accessToken, refreshToken }) =>
                set({
                    user,
                    accessToken,
                    refreshToken,
                    isAuth: true
                }),
            setUser:(user)=>set({user}),
            logout:()=>set({
                user:null,
                accessToken:null,
                refreshToken:null,
                isAuth:false
            })
        }),
        {
            name:"auth-storage",
            storage:createJSONStorage(()=>localStorage),
            partialize:(state)=>({
                user:state.user,
                accessToken:state.accessToken,
                refreshToken:state.refreshToken,
                isAuth:state.isAuth
            })
        }
    )
);

