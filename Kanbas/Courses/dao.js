import Database from "../Database/index.js";
export function findAllCourses() {
  return Database.courses;
};
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
    const newCourse = { ...course, _id: Date.now().toString() };
    Database.courses = [...Database.courses, newCourse];
    return newCourse;
  };
  export function deleteCourse(courseId) {
    const { courses, enrollments } = Database;
    Database.courses = courses.filter((course) => course._id !== courseId);
    Database.enrollments = enrollments.filter(
      (enrollment) => enrollment.course !== courseId
  );};
  export function updateCourse(courseId, courseUpdates) {
    const { courses } = Database;
    const course = courses.find((course) => course._id === courseId);
    Object.assign(course, courseUpdates);
    return course;
  };
  export function enrollUserInCourse(userId, courseId) {
    Database.enrollments = [...Database.enrollments, { _id: Date.now(), user: userId, course: courseId }];
  };
  export function unenrollUserInCourse(userId, courseId) {
    Database.enrollments = Database.enrollments.filter((enrollment) => enrollment.course !== courseId || enrollment.user !== userId);
  };
    