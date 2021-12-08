import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { compareCourses, Course } from "../model/course";

// This is known as the entity format.
// The entities are defined and the order is defined in the ids.
// This prevents ID lookups if using Course[{id: number, ...}]
// export interface CoursesState {
//   entities: {[key: number]: Course},
//   ids: number[]
// }

// Even better is using EntityState<Course>
export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses,
  // selectId: course => course.courseId // If using custom id name instead of id
});

export const initialCoursesState = adapter.getInitialState({
  allCoursesLoaded: false
});

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CourseActions.allCoursesLoaded, (state, action) => adapter.addAll(action.courses, {...state, allCoursesLoaded: true}))
);

export const {
  selectAll,
} = adapter.getSelectors();
