import 'firebase/analytics';
import firebase from 'firebase/app';
import 'firebase/remote-config';
import {Helpers} from '../../utilities/helpers';

export default class FirebaseService {
  private static readonly config = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    databaseURL: `${process.env.REACT_APP_FIREBASE_DATABASE_URL}`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
    measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`,
  };

  private static readonly firebaseApp: firebase.app.App = firebase.initializeApp(FirebaseService.config);
  private static readonly analytics: firebase.analytics.Analytics = FirebaseService.firebaseApp.analytics();
  private static readonly remoteConfig: firebase.remoteConfig.RemoteConfig = FirebaseService.firebaseApp.remoteConfig();

  constructor() {
    FirebaseService.remoteConfig.defaultConfig = {
      test_key: 'test_key',
    };
  }

  public async fetchAndActivateRemoteConfig(): Promise<void> {
    await FirebaseService.firebaseApp
      .remoteConfig()
      .fetchAndActivate();
  }

  public static getValue(key: string): string | undefined {
    const value = this.remoteConfig.getValue(key).asString();
    return value.trim().length > 0 ? value.trim() : undefined;
  }

  public static logEvent(key: string): void {
    if (!Helpers.isEnvProd()) {
      console.log(`>> EVENT: ${key}`);
    }
    this.analytics.logEvent(key);
  }

  // KEYS
  public static readonly test_key = 'test_key';

  // EVENTS
  public static readonly test_event = 'test_event';
}
