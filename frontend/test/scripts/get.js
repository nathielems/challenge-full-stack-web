async function actionFetchStudents() {
  try {
    const { data } = await studentsApi.fetch();
    return data;
  } 
  catch(err) {
    return err;
  }
}

module.exports = actionFetchStudents;