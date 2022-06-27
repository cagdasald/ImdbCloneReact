import moment from "moment";
import 'moment/locale/tr';
import {State} from "../models/custom/state";
import {Constants} from "./constants";
import {history} from './history';

export class Helpers {
  static wait = (ms: number = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

  static isEnvProd(): boolean {
    const env: string = `${process.env.REACT_APP_ENV}`;
    return env === 'production';
  }

  static getQueryParam(query: string): string | null {
    const searchParams: URLSearchParams = new URLSearchParams(history.location.search);
    return searchParams.get(query);
  }

  static isFreshData(prevPropsState: State, propsState: State): boolean {
    if (prevPropsState.loading && !propsState.loading) {
      if (propsState.data) {
        return true;
      }
    }
    return false;
  }

  static getLocaleDate(date?: string, isTime: boolean = true): string {
    moment.locale('tr');
    return !!date ? moment(date).format(isTime ? Constants.dateTimeFormatUI : Constants.dateFormatUI) : '';
  }
}
