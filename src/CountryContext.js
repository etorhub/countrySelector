import React from "react";

const CountryContext = React.createContext();
const CountryConsumer = CountryContext.Consumer;

class CountryProvider extends React.Component {
  state = {
	country: 'es',
	countries: [
		{ id: 'es', label: 'Spain' },
		{ id: 'pt', label: 'Portugal' },
		{ id: 'it', label: 'Italy' },
		{ id: 'us', label: 'United States' }
	]
  };

  updateCountry = c => this.setState({ country: c });

  render() {
    return (
      <CountryContext.Provider
        value={{
		      countries: this.state.countries,
		      country: this.state.country,
          updateCountry: this.updateCountry
        }}
      >
        {this.props.children}
      </CountryContext.Provider>
    );
  }
}

export { CountryProvider, CountryConsumer };