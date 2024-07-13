import React, { useContext } from "react";
import {Navbar} from '../component/Navbar';
import {Header} from '../component/Header';
import {Categories} from '../component/Categories';
import {Footer} from '.../component/Footer';



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
		<Navbar />
		<Header />
		<Categories />
		<Footer />
	</div>
	);
};
