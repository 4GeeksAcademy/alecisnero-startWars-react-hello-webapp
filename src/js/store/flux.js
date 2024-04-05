import { number } from "prop-types";
import { DiAtlassian } from "react-icons/di";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {

      page: 1,

      url: `https://www.swapi.tech/api/people?page=1&limit=10`,
      
      spinner: null,

      listPeople: [],

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

           console.log(dataListPeople)

            setStore({ ...storeCurrent, listPeople: dataListPeople.results });
            setStore( {...storeCurrent, pageTotal: dataListPeople.total_pages} )
            
 
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

      addFavorite: (name)=>{
        const strAdd = getStore()
        const { favorite } = strAdd
        const updatedFavorites = [...favorite, name]
        
        setStore( { favorite: updatedFavorites } )
      },

      spinner: (boolean) => {
        setStore({ spinner: boolean });
      },

      sumUrlPage: (number)=>{
        const storeSum = getStore()
        const newNumber = storeSum.page + number
        setStore( { page: newNumber } )
      }, 
      
      restaUrlPage: (number)=>{
        const storeResta = getStore()
        const newNumber2 = storeResta.page - number
        setStore( {page: newNumber2} )
      }
    },
    
  };
};

export default getState;
