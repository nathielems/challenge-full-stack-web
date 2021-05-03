async function actionDeleteStudent({ commit }, id) {
  try {
    const { data } = await studentsApi.delete(id);
    return data;
  } 
  catch(err) {
    return err;
  }
}

module.exports = actionDeleteStudent;