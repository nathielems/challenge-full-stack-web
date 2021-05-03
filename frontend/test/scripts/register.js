async function actionAddStudent({ commit }, student) {
  try {
    const { data } = await studentsApi.add(student);
    return data;
  } 
  catch(err) {
    return err;
  }
}

module.exports = actionAddStudent;