import { Button } from "antd";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { MeDto } from "../../core/models/dtos/me.dto";
import logo from "../../assets/images/logo.png"
import { setMe } from "../../core/services/appService/setMe/actions";
import { IStore } from "../../core/utilities/reducers";
import "./AppHeader.scss"
import Search from "antd/lib/input/Search";

interface IProps {
  me?:MeDto;
  setMe: () => void;
}

const onSearch = (value: string) => console.log(value);

const AppHeader = (props: IProps) => {
  return (
    <div id="app-header">
      <img 
      className="logo"
      src={logo} 
      alt="logo" 
      />
      <Search
      className="search"
      placeholder="Search IMDb"
      enterButton 
      onSearch={onSearch}
    />
      <Button 
      className="app-button transparent" 
      onClick={() => props.setMe}
      >
        Logout
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators(
      {
        setMe,
      },
      dispatch
    );
  };
  const mapStateToProps = (store: IStore) => {
    return {

      me: store.setMe.me,
    }
  };

export default connect(mapStateToProps, mapDispatchToProps) (AppHeader);
