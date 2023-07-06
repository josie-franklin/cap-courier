import React, { createContext, Component } from "react";
import * as bottlecapApi from "../api/bottlecapApi";
import * as tagApi from "../api/tagApi";

export const CollectionContext = createContext();

class CollectionContextProvider extends Component {
  state = {
    bottlecapObj: null,
    tagObj: null,
    drinkCategoryArr: ["Soft Drink", "Hard Drink"],
    currFilters: []
  };

  getAllTags = async () => {
    tagApi.getAllTags().then((data) => {
      this.setState({ tagObj: data });
    });
  };

  getAllBottlecaps = async () => {
    bottlecapApi.getAllBottlecaps().then((data) => {
      // console.log(data);
      this.setState({ bottlecapObj: data });
    });
  };

  searchBottlecaps = async (data) => {
    //data = {search: "", filter: [""]} || {search: ""} || {filter: [""]}
    let bottlecaps = await bottlecapApi.getBottlecapsBySearchAndFilter(data);
    // console.log(bottlecaps);
    this.setState({ bottlecapObj: bottlecaps });
  };

  render() {
    return (
      <CollectionContext.Provider
        value={{
          bottlecapObj: this.state.bottlecapObj,
          tagObj: this.state.tagObj,
          drinkCategoryArr: this.state.drinkCategoryArr,
          currFilters: this.state.currFilters,
          getAllTags: this.getAllTags,
          getAllBottlecaps: this.getAllBottlecaps,
          searchBottlecaps: this.searchBottlecaps,
        }}
      >
        {this.props.children}
      </CollectionContext.Provider>
    );
  }
}

export default CollectionContextProvider;
