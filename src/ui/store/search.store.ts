import { create } from "zustand";
interface SearchState {
    search: string,
    addSearch: (search:string) => void,
    eraserSearch: () => void
}

const useSearchStore = create<SearchState>((set) => ({
        search: "", 
        addSearch: (search:string) => set({ search }),
        eraserSearch: () => set({ search: "" })
    }));

export default useSearchStore;