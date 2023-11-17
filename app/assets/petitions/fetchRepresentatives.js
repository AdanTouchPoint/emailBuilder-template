import { fetchData } from "./fetchData";

const fetchRepresentatives = async (petitionMethod, backendURLBase, endpoint, clientId, params = '', setMp, setSenator, setShowLoadSpin, setShowList,sendMany,setAllDataIn) => {
    const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params)
    if(sendMany === "Si") {
      const emails = await mailerExtracter(datos.data)
      setAllDataIn(emails)
      setMp(datos.mpEmails)
      setShowLoadSpin(false)
      setShowList(false)
      return
     }
    let query = datos.data;
    let fill = await query.map((el) => {
      return el[0];
    });
    setMp(datos.mpEmails);
    setSenator(datos.data)
    setShowLoadSpin(false)
    setShowList(false)

}


export{
    fetchRepresentatives
}
