import React from 'react';
import CollectionOverview from '../../components/collections-overview/collections.overview';
import { Route } from "react-router-dom";
import CategoryPage from '../category/category.component';

const Shop = ({ match }: any) => {

	return (
		<div className='shop-page'>
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route path={`${match.path}/:categoryId`} component={CategoryPage} />
		</div>
	);

};

export default Shop;
