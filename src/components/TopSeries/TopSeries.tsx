import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Carousel, Card } from "antd";
import { IStore } from "../../core/utilities/reducers";
import "./TopSeries.scss"

interface IProps {}

const onChange = (currentSlide: number) => {
  console.log(currentSlide);
};

const { Meta } = Card;

const TopFilms = (props: IProps) => {
  return (
    <div id="top-series">
      <h2 className="text-primary">IMDb Top 100 Tv Series</h2>
      <Carousel afterChange={onChange}>
        <div className="series">
          <Card
            hoverable
            className="cards"
            cover={
              <img
                alt="placeholder"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLnv5c0wq18JR5YRrFI6CC_B9kB5Zqz461ZqK-LyzR6-9RiE_W"
              />
            }
          >
            <Meta title="Minions 2: The Rise of Gru" description="July 1, 2022" />
          </Card>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </Carousel>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({}, dispatch);
};
const mapStateToProps = (store: IStore) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TopFilms);
