import React, { Component } from 'react';


const RepoListItem = ({repoItem}) => {


	return (
			<ul className="col-md-4 list-group">
				<h4>Repo Name: {repoItem.fullName}</h4>
				<h4>Name: {repoItem.name}</h4>
				<h5>Repo ID: {repoItem.id}</h5>
				<h5>Description: {repoItem.description}</h5>
			</ul>
	);
};

export default RepoListItem;