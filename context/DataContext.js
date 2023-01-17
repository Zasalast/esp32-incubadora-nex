
import { createContext, useContext } from "react";
//import { useData } from "./../components/useData";
const DataContext = createContext([]);
export const DataProvider = ({ children }) => {
    console.log("DataProvider")
    const data = ({})// = useData();
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    return useContext(DataContext);
}

export default DataContext;




