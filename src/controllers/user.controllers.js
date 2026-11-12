export function getUsers(req, res) {
  res.json('Todos los usuarios')
}

export function postUser(req, res) {
  res.status(201).json('Usuario creado')
}

export function putUser(req, res) {
  res.json('Usuario actualizado')
}

export function deleteUser(req, res) {
  res.json('Usuario eliminado')
}
