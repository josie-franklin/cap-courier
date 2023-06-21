import React, { createContext, Component } from "react";
import * as bottlecapApi from "../api/bottlecapApi";

export const CollectionContext = createContext();

class CollectionContextProvider extends Component {
  state = {
    bottlecapObj: null,
  };

  getAllBottlecaps = async () => {
    bottlecapApi.getAllBottlecaps().then(data => {
    this.setState({ bottlecapObj: data });
    })
  };

//   getbottlecapsBySearch = async (input) => {
//     let bottlecaps = await bottlecapApi.getbottlecapsBySearch(input);
//     return bottlecaps;
//   };

  render() {
    return (
      <CollectionContext.Provider
        value={{
          bottlecapObj: this.state.bottlecapObj,
          getAllBottlecaps: this.getAllBottlecaps,
          //getbottlecapsBySearch: this.getbottlecapsBySearch,
        }}
      >
        {this.props.children}
      </CollectionContext.Provider>
    );
  }
}

export default CollectionContextProvider;