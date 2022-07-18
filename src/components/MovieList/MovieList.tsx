import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IStore } from "../../core/utilities/reducers";
import Search from "antd/lib/input/Search";
import "./MovieList.scss";

interface IProps {}

const MovieList = (props: IProps) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [value, setValue] = useState<any>("");

  const getMovieRequest = async (value: any) => {
    const url = `http://www.omdbapi.com/?s=${value}&apikey=6835da7c`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search) {
        setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(value);
  }, [value]);

  return (
    <div id="movie-list">
      <Search
        className="search"
        placeholder="Search IMDb"
        enterButton
        value={value}
        onChange={(event) => setValue(event.target.value)} 
      />
      {movies.map((movie, index) => (
        <Card
          hoverable
          className="cards"
          cover={<img alt="movie" src={movie.Poster} />}
        >
          <Meta
            title={movie.Title}
            description={`${movie.Year}-${movie.Type}`}
          />
        </Card>
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({}, dispatch);
};
const mapStateToProps = (store: IStore) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
