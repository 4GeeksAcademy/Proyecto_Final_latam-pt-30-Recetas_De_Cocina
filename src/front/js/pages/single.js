import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import {Navbar} from '../component/navbar';
import {Header} from '../component/header';
import {Categories} from '../component/categories';
import { Footer} from "../component/footer";



export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="jumbotron">
		

			<Navbar />
		<Header />
		<Categories />
		<Footer />
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
