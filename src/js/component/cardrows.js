import React, { useContext } from "react";
import "../../styles/home.scss";
import { CharacterCard } from "./charactercard.js";
import { PlanetCard } from "./planetcard.js";
import { Context } from "../store/appContext";

export const CharacterRow = () => {
	const { store } = useContext(Context);
	return (
		<div className="row m-5">
			<h3 className="text-white">Characters</h3>
			<div className="scrollmenu">
				{store.characters.map((item, index) => {
					return (
						<CharacterCard
							key={index}
							index={index}
							name={item.name}
							gender={item.gender}
							hair_color={item.hair_color}
							eye_color={item.eye_color}
						/>
					);
				})}
			</div>
		</div>
	);
};

export const PlanetRow = () => {
	const { store } = useContext(Context);
	return (
		<div className="row m-5">
			<h3 className="text-white">Planets</h3>
			<div className="scrollmenu">
				{store.planets.map((item, index) => {
					return (
						<PlanetCard
							key={index}
							name={item.name}
							index={index}
							population={item.population}
							terrain={item.terrain}
							surface_water={item.surface_water}
						/>
					);
				})}
			</div>
		</div>
	);
};
