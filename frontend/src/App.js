import React, { Component } from 'react';
import People from './components/people';

class App extends Component {
	state = {
		people: [],
	};

	componentDidMount() {
		fetch('http://127.0.0.1:8000/persons/')
			.then((res) => res.json())
			.then((data) => {
				this.setState({ people: data.results });
			})
			.catch(console.log);
	}

	render() {
		return <People people={this.state.people} />;
	}
}

export default App;
