import { useContext, useState, createContext } from "react";





const SearchContext = createContext();

const SearchProvider = ({ children }) => {

    const [search, setSearch] = useState({
        keyword : "",
        results : []
    });
    



    return (
        <SearchContext.Provider value={[search,setSearch]}>
            {children}
        </SearchContext.Provider>
    )
}


//hook for auth

const useSearch = () => useContext(SearchContext);



export {SearchProvider,useSearch};