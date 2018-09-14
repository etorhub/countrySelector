import React from "react";

const CountryContext = React.createContext();

class CountryProvider extends React.Component {
  state = {
    country: null,
    countries: [
      { id: 'es', label: 'Spain' },
      { id: 'pt', label: 'Portugal' },
      { id: 'it', label: 'Italy' },
      { id: 'us', label: 'United States' }
    ]
  };
  
  updateCountry = c => {
    this.setState({ country: c });
  }
  resetCountry = c => {
    this.setState({ country: null });
  }
  
  render() {
    return (
      <CountryContext.Provider
        value={{
		      countries: this.state.countries,
		      country: this.state.country,
          updateCountry: this.updateCountry,
          resetCountry: this.resetCountry
        }}
      >
        {this.props.children}
      </CountryContext.Provider>
    );
  }
}

const CountryConsumer = CountryContext.Consumer;

export { CountryProvider, CountryConsumer };