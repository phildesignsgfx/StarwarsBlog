const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			myURL: "https://swapi.dev/api",
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [
				{ index: 0, name: "Luke Skywalker" },
				{ index: 2, name: "R2-D2" },
				{ index: 0, name: "Tatooine" }
			],
			demo: []
		},
		actions: {
			// fetchCharacterData: () => {
			// 	const store = getStore(); // <-- Save current "Store"
			// 	fetch(getStore().myURL + "/people/") // <-- fetch url
			// 		.then(response => response.json()) // <-- take return of fetch and modify to json
			// 		.then(data => (store.characters = data)) // <-- update store
			// 		.then(() => console.log(store.characters));
			// },

			fetchCharacterData: async () => {
				const store = getStore();
				try {
					let waitForCharacters = await fetch(store.myURL + "/people/");
					let jsonOfCharacters = await waitForCharacters.json();
					setStore({ characters: jsonOfCharacters.results });
				} catch (error) {
					console.log(error);
				}
				// console.log(store.characters);
				// if (i === index) name = character.name;
				// console.log(name);
			},
			fetchPlanetData: async () => {
				const store = getStore();
				try {
					let waitForPlanets = await fetch(store.myURL + "/planets/");
					let jsonOfPlanets = await waitForPlanets.json();
					setStore({ planets: jsonOfPlanets.results });
				} catch (error) {
					console.log(error);
				}
				// console.log(store.planets);
			},
			addFavorites: onclickObj => {
				const store = getStore();
				let array = store.favorites;
				// EXAMPLE OF HOW TO GET TRUE //
				// const resFindSearch1 = !!listOfObjecs.find(item => JSON.stringify(item) === JSON.stringify(search1));
				// const isFavorite = onclickObj => {
				const isFavorite = !!array.find(item => JSON.stringify(item) === JSON.stringify(onclickObj));

				const favoriteIndex = array.findIndex(function(array) {
					return array.name === onclickObj.name;
				});
				// console.log("This is the favorite index: ", favoriteIndex);
				// console.log("This is the onclickObj: ", onclickObj);

				if (isFavorite) {
					array.splice(favoriteIndex, 1);
				} else array.push(onclickObj);

				console.log(array);
				setStore(array);
			}
		},

		// fetch(url)
		//     .then(response => response.text())
		//     .then(data => console.log(data));

		// Use getActions to call a function within a fuction
		exampleFunction: () => {
			getActions().changeColor(0, "green");
		},
		loadSomeData: () => {
			/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
		},
		changeColor: (index, color) => {
			//get the store
			const store = getStore();

			//we have to loop the entire demo array to look for the respective index
			//and change its color
			const demo = store.demo.map((elm, i) => {
				if (i === index) elm.background = color;
				return elm;
			});

			//reset the global store
			setStore({ demo: demo });
		}
	};
};

export default getState;
