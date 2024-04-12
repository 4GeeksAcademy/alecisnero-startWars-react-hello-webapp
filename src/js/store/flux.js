import { array, element, number } from "prop-types";
import { DiAtlassian } from "react-icons/di";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {

      pagePeople: 1,
      pagePlanets: 1,
      
      spinner: false,

      spinnerPeople: null,
      spinnerPlanets: null,

      listPeople: [],
      listPlanets: [],

      listAnyThingsPeople: [],
      listAnyThingsPlanets: [],

      listDetailsPeople: [],
      listDetailsPlanets: [],

      favorite: [],
    },
    actions: {
      //FUNCION PARA OBTENER PERSONAJES
      getListPeople: async () => {
        getActions().spinnerPeople(true);
        getActions().spinner(true);
        const storeCurrent = getStore();
        
        setStore( {...storeCurrent, listPeople: []} )

        try {
          const resListPeople = await fetch(`https://www.swapi.tech/api/people?page=${storeCurrent.pagePeople}&limit=10`);

          if (resListPeople.ok) {
            const dataListPeople = await resListPeople.json();

            setStore({ ...storeCurrent, listPeople: dataListPeople.results });

            
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
          getActions().spinnerPeople(false);
          getActions().spinner(true)
        }
      },
      
      getListPlanets: async () => {
        getActions().spinner(true);
        const storePlanets = getStore();
        getActions().spinnerPlanets(true)
        getActions().spinner(false);
        setStore( {...storePlanets, listPlanets: [] } )

        try {
          const resListPlanets = await fetch(`https://www.swapi.tech/api/planets?page=${storePlanets.pagePlanets}&limit=10`);

          if (resListPlanets.ok) {
            const dataListPlanets = await resListPlanets.json();

            setStore({ ...storePlanets, listPlanets: dataListPlanets.results });
            

            
            
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
          getActions().spinner(true);
          getActions().spinnerPlanets(false)
        }
      },

      //FUNCION PARA OBTENER SIGUIENTES PERSONAJES
      getNextPeople: async () => {
        const store = getStore()
        getActions().spinnerPeople(true);
        getActions().spinner(true);
        getActions().sumUrlPagePeople(store.pagePeople)
        getActions().getListPeople()
        setStore( {...store, listPeople: []} )


        try{
          const resNext = await fetch(`https://www.swapi.tech/api/people?page=${store.pagePeople}&limit=10`)
          const dataNext = await resNext.json()
          setStore( {...store, listPeople: dataNext.results} )
        

        }catch(err){
          alert('Se ha presentando un error: ', err)
        }finally{
          getActions().spinnerPeople(false);
          getActions().spinner(false);
        }
      },

      getNextPlanets: async () => {
        const store = getStore()
        getActions().spinnerPlanets(true);
        getActions().spinner(true);
        getActions().sumUrlPagePlanets(store.pagePlanets)
        getActions().getListPlanets()
        setStore( {...store, listPlanets: []} )


        try{
          const resNext = await fetch(`https://www.swapi.tech/api/planets?page=${store.pagePlanets}&limit=10`)
          const dataNext = await resNext.json()
          setStore( {...store, listPlanets: dataNext.results} )
        

        }catch(err){
          alert('Se ha presentando un error: ', err)
        }finally{
          getActions().spinnerPlanets(false);
          getActions().spinner(false);
        }
      },

      //FUNCION PARA OBTENER PREVIOUS PERSONAJES
      getPreviousPeople: async () => {
        const storePrevious = getStore()
        getActions().spinnerPeople(true)
        getActions().spinner(true);
        getActions().restaUrlPagePeople(storePrevious.pagePeople)
        getActions().getListPeople()
        setStore( {...storePrevious, listPeople: []} )

        try{

          const resPrevious = await fetch(`https://www.swapi.tech/api/people?page=${storePrevious.pagePeople}&limit=10`)
          const dataPrevious = await resPrevious.json()
          setStore( {...storePrevious, listPeople: dataPrevious.results } )

        }catch(err){
          alert('Se ha presentado un error: ', err)
        }finally{
          getActions().spinnerPeople(false)
          getActions().spinner(false);
        }
      },
      getPreviousPlanets: async () => {
        const storePrevious = getStore()
        getActions().spinnerPlanets(true)
        getActions().spinner(true);
        getActions().restaUrlPagePlanets(storePrevious.pagePlanets)
        getActions().getListPlanets()
        setStore( {...storePrevious, listPlanets: []} )

        try{

          const resPrevious = await fetch(`https://www.swapi.tech/api/planets?page=${storePrevious.pagePlanets}&limit=10`)
          const dataPrevious = await resPrevious.json()
          setStore( {...storePrevious, listPlanets: dataPrevious.results } )

        }catch(err){
          alert('Se ha presentado un error: ', err)
        }finally{
          getActions().spinnerPlanets(false)
          getActions().spinner(false);
        }
      },

      //FUNCION PARA OBTENER LA DATA DE CADA PERSONAJE
      getDetailPeople: async (url)=>{
        const store = getStore()
        getActions().spinner(true);
        try{
          const resListDetailsPeople = await fetch(url)
          const dataListDetailsPeople = await resListDetailsPeople.json()
          setStore( {...store, listDetailsPeople: dataListDetailsPeople.result} )
          console.log(dataListDetailsPeople)
        }catch(err){
          alert('Ha ocurrido un erro: ', err)
        }finally{
          getActions().spinner(false);
        }
      },

      //FUNCION PARA OBTENER LA DATA DE CADA PERSONAJE
      getDetailPlanets: async (url)=>{
        const store = getStore()
        getActions().spinner(true)
        try{
          const resListDetailsPlanets = await fetch(url)
          const dataListDetailsPlanets = await resListDetailsPlanets.json()
          setStore( {...store, listDetailsPlanets: dataListDetailsPlanets.result} )
        }catch(err){
          alert('Ha ocurrido un erro: ', err)
        }finally{
          getActions().spinner(false);
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
        const {favCurrent} = store
        const newFavorite = store.favorite.filter( (ele, indexCurrent)=> {
          return indexCurrent !== index
        } )

        store.favorite = newFavorite
        setStore( {...favCurrent} )
      },

      //FUNCION DE SPINNER PARA MOSTRA 'CARGANDO'
      spinner: (boolean) => {
        const store = getStore()
        setStore({ ...store, spinner: boolean });
      },

      //SEGUNDO SPINNER ROJO
      spinnerPeople: (boolean2) => {
        const store = getStore()
        setStore({ ...store, spinnerPeople: boolean2})
      },

      spinnerPlanets: (boolean2) => {
        const store = getStore()
        setStore({ ...store, spinnerPlanets: boolean2})
      },

      //FUNCION PARA SUMA LA VARIABLE PAGE
      sumUrlPagePeople: (numberPeople)=>{
        const storeSum = getStore()
        const newNumber = storeSum.pagePeople + numberPeople
        console.log("Nuevo número de página sumado:", newNumber)
        setStore( { pagePeople: newNumber } )
      }, 
      
      //FUNCION PARA RESTAR LA VARIABLE PAGE
      restaUrlPagePeople: (numberPeople)=>{
        const storeResta = getStore()
        const newNumber2 = storeResta.pagePeople - numberPeople
        console.log("Nuevo número de página restado:", newNumber2)
        setStore( {pagePeople: newNumber2} )
      },
      //FUNCION PARA SUMA LA VARIABLE PAGE
      sumUrlPagePlanets: (numberPlanets)=>{
        const storeSum = getStore()
        const newNumber = storeSum.pagePlanets + numberPlanets
        console.log("Nuevo número de página sumado:", newNumber)
        setStore( { pagePlanets: newNumber } )
      }, 
      
      //FUNCION PARA RESTAR LA VARIABLE PAGE
      restaUrlPagePlanets: (numberPlanets)=>{
        const storeResta = getStore()
        const newNumber2 = storeResta.pagePlanets - numberPlanets
        console.log("Nuevo número de página restado:", newNumber2)
        setStore( {pagePlanets: newNumber2} )
      },
    },
    
  };
};

export default getState;
