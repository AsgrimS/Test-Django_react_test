import React from 'react';

function People({ people }) {
	return (
		<div>
			<center>
				<h1>Contact List</h1>
			</center>
			{people.map((person) => (
				<div key={person.id} className="card">
					<div className="card-body">
						<h5 className="card-title">{person.name}</h5>
						<h6 className="card-subtitle mb-2 text-muted">{person.age}</h6>
					</div>
				</div>
			))}
		</div>
	);
}

export default People;
