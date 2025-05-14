import { useEffect } from "react";
import { Input } from "../../shared";
import useSearchStore from "../../store/search.store";
import { memo } from "react";
export const Search = memo(() => {
    const url = new URL(window.location.href);
    const { addSearch, eraserSearch, search} = useSearchStore(state => state);    
    const handleSearch = (e: HTMLInputElement) => {
        const search = e.value;
        addSearch(search);
        url.searchParams.set('q', search);
        window.history.replaceState(null, '', url.toString());
    }
    useEffect(() => {
        addSearch(url.searchParams.get('q') || '');
        return () => {
            eraserSearch();
        }
    }, [])
    return (
        <div className="w-full md:w-1/5 m-4">
            <Input
                name="search"
                placeholder="Buscar..."
                variant="inp-normal"
                className="py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                onChange={handleSearch}
                value={search || ''}
            />            
        </div>
    )
})
