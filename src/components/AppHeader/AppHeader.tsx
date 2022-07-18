import { Button } from "antd";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { MeDto } from "../../core/models/dtos/me.dto";
import logo from "../../assets/images/logo.png";
import { setMe } from "../../core/services/appService/setMe/actions";
import { IStore } from "../../core/utilities/reducers";
import "./AppHeader.scss";

interface IProps {
  me?: MeDto;
  setMe: () => void;
}

const AppHeader = (props: IProps) => {

  return (
    <div id="app-header">
      <img className="logo" src={logo} alt="logo" />
      <Button className="app-button transparent" onClick={() => props.setMe}>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
