import { array, element, number } from "prop-types";
import { DiAtlassian } from "react-icons/di";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {

      page: 1,
      
      spinner: null,

      spinner2: true,

      listPeople: [],
      listPlanets: [],

      listAnyThingsPeople: [],
      listAnyThingsPlanets: [],

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
          const resListPeople = await fetch(`https://www.swapi.tech/api/people?page=${storeCurrent.page}&limit=10`);

          if (resListPeople.ok) {
            const dataListPeople = await resListPeople.json();

            setStore({ ...storeCurrent, listPeople: dataListPeople.results });

            //PRUEBAS
            getActions().spinner2(false)
            const arrayPeoplePromises = dataListPeople.results.map(async (element) => {
              const resArray = await fetch(element.url);
              if (resArray.ok) {
                const dataArray = await resArray.json();
                return dataArray;
              }
            });
          
            const arrayPeople = await Promise.all(arrayPeoplePromises);
          
            const array2Promise = arrayPeople.map( (ele)=>ele.result.properties) 

            const arrayPeople2 = await Promise.all(array2Promise)
            setStore( {...storeCurrent, listAnyThingsPeople: arrayPeople2} )
            
          }else{
            alert('Ha ocurrido un error')
          }

        } catch (error) {
          console.error("Se ha presentado un ERROR: ", error);
          alert("Se ha presentado un ERROR: ", error);
        } finally {
          getActions().spinner(false);
          getActions().spinner2(true)
        }
      },
      
      getListPlanets: async () => {
        getActions().spinner(true);
        const storePlanets = getStore();
        
        setStore( {...storePlanets, listPlanets: [] } )

        try {
          const resListPlanets = await fetch(`https://www.swapi.tech/api/planets?page=${storePlanets.page}&limit=10`);

          if (resListPlanets.ok) {
            const dataListPlanets = await resListPlanets.json();

            setStore({ ...storePlanets, listPlanets: dataListPlanets.results });
            dataListPlanets.results

            //PRUEBAS
            getActions().spinner2(false)
            const arrayPlanetsPromises = dataListPlanets.results.map(async (element) => {
              const resArray = await fetch(element.url);
              if (resArray.ok) {
                const dataArray = await resArray.json();
                return dataArray;
              }
            });
          
            const arrayPlanets = await Promise.all(arrayPlanetsPromises);
          
            const array2Promise = arrayPlanets.map( (ele)=>ele.result.properties) 

            const arrayPlanets2 = await Promise.all(array2Promise)
            setStore( {...storePlanets, listAnyThingsPlanets: arrayPlanets2} )
            
          }else{
            alert('Ha ocurrido un error')
          }

        } catch (error) {
          console.error("Se ha presentado un ERROR: ", error);
          alert("Se ha presentado un ERROR: ", error);
        } finally {
          getActions().spinner(false);
          getActions().spinner2(true)
        }
      }
      
      ,

      //FUNCION PARA OBTENER SIGUIENTES PERSONAJES
      getNextPeople: async () => {
        const store = getStore()
        getActions().spinner(true);
        getActions().sumUrlPage(1)
        getActions().getListPeople()
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
        getActions().getListPeople()
        setStore( {...storePrevious, listPeople: []} )

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
          setStore( {...store, listDetailsPeople: dataListDetailsPeople.result} )
          
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
      deleteFavorite: (index) => {
        const store = getStore()
        const newFavorite = store.favorite.filter( (ele, indexCurrent)=> {
          return indexCurrent !== index
        } )

        store.favorite = newFavorite 
        console.log(store.favorite)
      },

      //FUNCION DE SPINNER PARA MOSTRA 'CARGANDO'
      spinner: (boolean) => {
        const store = getStore()
        setStore({ ...store, spinner: boolean });
      },

      //SEGUNDO SPINNER ROJO
      spinner2: (boolean2) => {
        const store = getStore()
        setStore({ ...store, spinner2: boolean2})
      },

      //FUNCION PARA SUMA LA VARIABLE PAGE
      sumUrlPage: (number)=>{
        const storeSum = getStore()
        const newNumber = storeSum.page + 1
        console.log("Nuevo número de página sumado:", newNumber)
        setStore( { page: newNumber } )
      }, 
      
      //FUNCION PARA RESTAR LA VARIABLE PAGE
      restaUrlPage: (number)=>{
        const storeResta = getStore()
        const newNumber2 = storeResta.page - 1
        console.log("Nuevo número de página restado:", newNumber2)
        setStore( {page: newNumber2} )
      }
    },
    
  };
};

export default getState;
