import { useEffect, useState } from "react";
// Context
import GeneralContext from ".";
// Utilities
import apiCall from "../../api/apiCall";

const GeneralContextProvider = ({ children }) => {
  const [data, setData] = useState("");

  const bringDataOnLoad = async (searchValue) => {
    try {
      const data = await apiCall({
        url: `https://api.wirestock.io/search?q=${`${searchValue}`}&page=1&per_page=5&types[]=photo&orientation=landscape&mature=0`,
      });
      setData(data);
    } catch (e) {
      alert("Un error ha ocurrido. Por favor actualice la página");
    }
  };

  useEffect(() => {
    bringDataOnLoad("cakes");
  }, []);

  return <GeneralContext.Provider value={{ data }}>{children}</GeneralContext.Provider>;
};

export default GeneralContextProvider;
