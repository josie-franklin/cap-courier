import React, { createContext, Component } from "react";
import * as bottlecapApi from "../api/bottlecapApi";
import * as tagApi from "../api/tagApi";

export const CollectionContext = createContext();

class CollectionContextProvider extends Component {
  state = {
    bottlecapObj: [],
    tagObj: null,
    drinkCategoryArr: ["Soft Drink", "Hard Drink"],
    currFilterInfo: null,
    currInput: null,
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

  setCurrFilterInfo = (currFilterInfo) => {
    this.setState({ currFilterInfo });
  };

  setCurrInput = (currInput) => {
    console.log(currInput);
    this.setState({ currInput });
  };

  searchBottlecaps = async (data) => {
    // this.setState({ bottlecapObj: [] });
    let bottlecaps = await bottlecapApi.getBottlecapsBySearchAndFilter(data);
    this.setState({ bottlecapObj: bottlecaps });
  };

  render() {
    return (
      <CollectionContext.Provider
        value={{
          bottlecapObj: this.state.bottlecapObj,
          tagObj: this.state.tagObj,
          drinkCategoryArr: this.state.drinkCategoryArr,
          currFilterInfo: this.state.currFilterInfo,
          currInput: this.state.currInput,
          getAllTags: this.getAllTags,
          getAllBottlecaps: this.getAllBottlecaps,
          setCurrFilterInfo: this.setCurrFilterInfo,
          setCurrInput: this.setCurrInput,
          searchBottlecaps: this.searchBottlecaps,
        }}
      >
        {this.props.children}
      </CollectionContext.Provider>
    );
  }
}

export default CollectionContextProvider;
