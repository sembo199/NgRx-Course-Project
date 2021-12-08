import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { Course } from "../model/course";

// This is known as the entity format.
// The entities are defined and the order is defined in the ids.
// This prevents ID lookups if using Course[{id: number, ...}]
// export interface CoursesState {
//   entities: {[key: number]: Course},
//   ids: number[]
// }

// Even better is using EntityState<Course>
export interface CoursesState extends EntityState<Course> {

}

export const adapter = createEntityAdapter<Course>();

export const initialCoursesState = adapter.getInitialState();

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CourseActions.allCoursesLoaded, (state, action) => adapter.addAll(action.courses, state))
);

export const {
  selectAll,
} = adapter.getSelectors();
