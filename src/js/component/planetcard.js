import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import "../../styles/home.scss";
import { AiOutlineHeart } from "react-icons/ai";

export const PlanetCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card p-2 m-2 " style={{ width: "16rem" }}>
			<img className="card-img-top" src="https://via.placeholder.com/100" alt="Image" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<div className="card-info">
					<p className="card-text">
						Population: {props.population}
						<br />
						Terrain: {props.terrain}
						<br />
						Surface Water: {props.surface_water}
					</p>
				</div>
				<div className="card-bottom ptb-2">
					<div className="card-bottom-left float-left ptb-2">
						<a href="#" className="btn btn-outline-primary">
							More Info!
						</a>
					</div>
					<div
						className="card-bottom-right float-right btn btn-outline-warning"
						onClick={() => {
							console.log("This is the onclick");
							let obj = {
								index: props.index,
								name: props.name
							};
							actions.addFavorites(obj);
						}}>
						<AiOutlineHeart />
					</div>
				</div>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	name: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string,
	surface_water: PropTypes.string,
	index: PropTypes.number
};
