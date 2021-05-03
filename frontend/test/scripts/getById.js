async function actionGetStudent({ commit }, id) {
  try {
    const { data } = await studentsApi.getById(id);
    console.log(data)
    return data;
  }
  catch(err) {
    return err;
  }
}

module.exports = actionGetStudent;