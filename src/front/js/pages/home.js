import React, { useContext } from "react";
import {Navbar} from '../component/navbar';
import {Header} from '../component/header';
import {Categories} from '../component/categories';
import { Footer} from "../component/footer";



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
