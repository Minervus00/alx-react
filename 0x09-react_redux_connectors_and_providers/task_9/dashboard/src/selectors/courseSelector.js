export const getListCourses = (state) => {
  const crs = state.courses;
  if (crs) {
    const val = crs.valueSeq().toArray();
    return val;
  }
  return crs;
};
