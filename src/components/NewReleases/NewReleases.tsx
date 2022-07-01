import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IStore } from "../../core/utilities/reducers";
import "./AppHeader.scss"

interface IProps {
}


const NewReleases = (props: IProps) => {
  return (
    <div id="releases">
        <h2 className="text-primary">New Releases</h2>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators(
      {
      },
      dispatch
    );
  };
  const mapStateToProps = (store: IStore) => {
    return {
    }
  };

export default connect(mapStateToProps, mapDispatchToProps) (NewReleases);
