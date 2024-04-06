import { array, number } from "prop-types";
import { DiAtlassian } from "react-icons/di";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {

      page: 1,

      url: `https://www.swapi.tech/api/people?page=1&limit=10`,
      
      spinner: null,

      listPeople: [],

      listAnyThings: [],

      listDetailsPeople: [],

      favorite: [],
    },
    actions: {
      //FUNCION PARA OBTENER PERSONAJES
      getListPeople: async () => {
        getActions().spinner(true);
        const storeCurrent = getStore();
        
        setStore( {...storeCurrent, listPeople: []} )

        try {
          const resListPeople = await fetch(storeCurrent.url);

          if (resListPeople.ok) {
            const dataListPeople = await resListPeople.json();
            

            setStore({ ...storeCurrent, listPeople: dataListPeople.results });

            /* const arrayPeople = []

            dataListPeople.results.forEach( async (elements) => {
              let resArray = await fetch(elements.url)
              if(!resArray.ok) return
              let dataArray = await resArray.json()
              arrayPeople.push(dataArray)
            } )
            setStore({ ...storeCurrent, listPeople: arrayPeople });
            console.log(arrayPeople) */
            

 
          }else{
            alert('Ha ocurrido un error')
          }

        } catch (error) {
          console.error("Se ha presentado un ERROR: ", error);
          alert("Se ha presentado un ERROR: ", error);
        } finally {
          getActions().spinner(false);
        }
      },

      //FUNCION PARA OBTENER SIGUIENTES PERSONAJES
      getNextPeople: async () => {
        const store = getStore()
        getActions().spinner(true);
        getActions().sumUrlPage(1)
        setStore( {...store, listPeople: []} )
        console.log(store.page)


        try{
          const resNext = await fetch(`https://www.swapi.tech/api/people?page=${store.page}&limit=10`)
          const dataNext = await resNext.json()
          setStore( {...store, listPeople: dataNext.results} )
        

        }catch(err){
          alert('Se ha presentando un error: ', err)
        }finally{
          getActions().spinner(false);
        }
      },

      //FUNCION PARA OBTENER PREVIOUS PERSONAJES
      getPreviousPeople: async () => {
        const storePrevious = getStore()
        getActions().spinner(true)
        getActions().restaUrlPage(storePrevious.page)
        setStore( {...storePrevious, listPeople: []} )
        console.log(storePrevious.page)

        try{

          const resPrevious = await fetch(`https://www.swapi.tech/api/people?page=${storePrevious.page}&limit=10`)
          const dataPrevious = await resPrevious.json()
          setStore( {...storePrevious, listPeople: dataPrevious.results } )

        }catch(err){
          alert('Se ha presentado un error: ', err)
        }finally{
          getActions().spinner(false)
        }
      },

      //FUNCION PARA OBTENER LA DATA DE CADA PERSONAJE
      getDetail: async (url)=>{
        const store = getStore()
        getActions().spinner(true)
        try{
          const resListDetailsPeople = await fetch(url)
          const dataListDetailsPeople = await resListDetailsPeople.json()
          setStore( {...store, listDetailsPeople: dataListDetailsPeople.result.properties} )
          
          console.log(dataListDetailsPeople)
            /* setStore({ ...storeCurrent, listPeople: dataListPeople.results }); */
            

          
        }catch(err){
          alert('Ha ocurrido un erro: ', err)
        }finally{
          getActions().spinner(false)
        }
      },

      //  GUARDA LOS PERSONAJES "ME GUSTA"
      addFavorite: (name)=>{
        const strAdd = getStore()
        const { favorite } = strAdd
        const updatedFavorites = [...favorite, name]
        
        setStore( { favorite: updatedFavorites } )
      },

      //FUNCION DE SPINNER PARA MOSTRA 'CARGANDO'
      spinner: (boolean) => {
        setStore({ spinner: boolean });
      },

      //FUNCION PARA SUMA LA VARIABLE PAGE
      sumUrlPage: (number)=>{
        const storeSum = getStore()
        const newNumber = storeSum.page + number
        setStore( { page: newNumber } )
      }, 
      
      //FUNCION PARA RESTAR LA VARIABLE PAGE
      restaUrlPage: (number)=>{
        const storeResta = getStore()
        const newNumber2 = storeResta.page - number
        setStore( {page: newNumber2} )
      }
    },
    
  };
};

export default getState;
