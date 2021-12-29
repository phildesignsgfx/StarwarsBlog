import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { CharacterRow, PlanetRow } from "../component/cardrows.js";
import { Demo } from "./demo.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="mtl-2">
				<div className="cardrow m-2">
					<div className="text-center mt-5 ">
						<CharacterRow />
					</div>
				</div>
				<div className="cardrow m-2">
					<div className="text-center mt-5 ">
						<PlanetRow />
					</div>
				</div>
			</div>
		</div>
	);
};
