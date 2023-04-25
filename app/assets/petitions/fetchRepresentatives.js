import { fetchData } from "./fetchData";

const fetchRepresentatives = async (petitionMethod, backendURLBase, endpoint, clientId, params = '', setMp, setSenator, setShowLoadSpin, setShowList) => {
    const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params)
    let query = datos.data;
    let fill = await query.map((el) => {
      return el[0];
    });
    setMp(fill);
    setSenator(datos.statesFilter)
    setShowLoadSpin(false)
    setShowList(false)

}


export{
    fetchRepresentatives
}
