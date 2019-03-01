import React, { Component } from 'react';
// importing DataSearch here
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';
import Results from './components/Results';
import theme from './theme';
import './App.css';

class App extends Component {

constructor(props) {
		super(props);
		this.state = {
			currentTopics: [],
		};
	}

	setTopics = (currentTopics) => {
		this.setState({
			currentTopics: currentTopics || [],
		});
	}

	toggleTopic = (topic) => {
		const { currentTopics } = this.state;
		const nextState = currentTopics.includes(topic)
			? currentTopics.filter(item => item !== topic)
			: currentTopics.concat(topic);
		this.setState({
			currentTopics: nextState,
		});
}


  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="breach"
          url="http://localhost:9200"
        >
          <nav className="navbar">
            <div className="title">Breach</div>
	    <div className="subtitle">By SD Security</div>
          </nav>



	// Adding the DataSearch here
    	<div className="flex row-reverse app-container" id="search">
        <div className="results-container">
            <DataSearch
                componentId="user"
                filterLabel="Search"
                dataField={['user', 'pass']}
                placeholder="Search Domains"
                autosuggest={true}
                iconPosition="left"
                URLParams
                className="data-search-container results-container"
                innerClass={{
                    input: 'search-input',
                }}
            />
		<Results currentTopics={this.state.currentTopics} toggleTopic={this.toggleTopic} />
        </div>
    </div>
	

        </ReactiveBase>
      </section>
    );
  }
}

export default App;




