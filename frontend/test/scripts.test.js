const register = require('./scripts/register');
const get = require('./scripts/get');
const put = require('./scripts/put');
const getById = require('./scripts/getById');
const deleteById = require('./scripts/delete');

test('register', async () => {
  const name = 'teste'
  const tax = '11122233377'
  const email = 'teste@teste.com'
      
  const item = {
    name,
    tax,
    email
  }

  const data = await register(item)
  expect(data).toBeTruthy();
});

test('get', async () => {
  
  const data = await get()
  expect(data).toBeTruthy();
});

test('put', async () => {
  const name = 'teste'
  const tax = '11122233377'
  const email = 'teste@teste.com'
  const id = '1'
      
  const item = {
    name,
    tax,
    email
  }

  const data = await put(id, item)
  expect(data).toBeTruthy();
});

test('getById', async () => {
  const id = '1'
  
  const data = await getById(id)
  expect(data).toBeTruthy();
});

test('deleteById', async () => {
  const id = '1'
  
  const data = await deleteById(id)
  expect(data).toBeTruthy();
});