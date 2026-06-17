import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import { toast } from "react-hot-toast";

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("theme") || "dark",
    setTheme: (theme) => {
        localStorage.setItem("blab-theme", theme);
        set({theme});
    },
}));