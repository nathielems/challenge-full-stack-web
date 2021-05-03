async function actionUpdateStudent({ commit }, { id, student }) {
  try {
    const { data } = await studentsApi.update(id, student);
    return data;
  } 
  catch(err) {
    return err;
  }
}

module.exports = actionUpdateStudent;