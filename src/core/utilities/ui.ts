import {notification} from "antd";
import React from 'react';
import {AppNotification} from "../models/custom/appNotification";

export class UI {
  public static modalMaskStyle(): React.CSSProperties {
    return {backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)'};
  }

  public static showNotification(appNotification: AppNotification): void {
    notification[appNotification.type]({
      message: appNotification.message,
      description: appNotification.description,
      placement: appNotification.placement ?? 'bottomRight',
      duration: appNotification.durationInSec ?? 3,
      onClick: appNotification.callbackClick,
      onClose: appNotification.callbackClose,
    });
  }
}
