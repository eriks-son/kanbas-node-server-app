import model from "./model.js";
export function findAllCourses() {
  return model.find();
};
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
 }
 
export function findAllCoursesWithEnrollments(userId) {
  const coursesWithEnrollments = Database.courses.map((course) => { return {
    ...course,
    enrolled: Database.enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id)
  }});
  return coursesWithEnrollments;
};
export function findCoursesForEnrolledUser(userId) {
    const enrolledCourses = Database.courses.filter((course) =>
      Database.enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
    return enrolledCourses;
  };
  export function createCourse(course) {
    delete course._id;
    return model.create(course);
  };
  export function deleteCourse(courseId) {
    return model.deleteOne({ _id: courseId });
   };
   
  export function updateCourse(courseId, courseUpdates) {
    return model.updateOne({ _id: courseId }, { $set: courseUpdates });
  };
  export function enrollUserInCourse(user, course) {
    return model.create({ user, course });
   }
   export function unenrollUserFromCourse(user, course) {
    return model.deleteOne({ user, course });
   }
   
    