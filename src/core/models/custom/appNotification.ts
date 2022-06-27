import {NotificationPlacement} from "antd/es/notification";
import {ReactNode} from "react";

export interface AppNotification {
  type: 'success' | 'error';
  message: ReactNode;
  description?: ReactNode;
  placement?: NotificationPlacement;
  durationInSec?: number;
  callbackClick?: VoidFunction;
  callbackClose?: VoidFunction;
}
