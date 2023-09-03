import { courseReducer, initialCourseState } from "./courseReducer";
import { uiReducer, initialUiState } from "./uiReducer";
import { notificationReducer, initialNotifState } from './notificationReducer';
import { Map } from "immutable";

export const initialState = {
  courses: Map(initialCourseState),
  notifications: Map(initialNotifState),
  ui: Map(initialUiState),
};

export const rootReducer = {
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer
};
