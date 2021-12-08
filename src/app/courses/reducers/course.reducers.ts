import { EntityState } from "@ngrx/entity";
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
