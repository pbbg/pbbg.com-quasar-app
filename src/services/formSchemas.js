const person = {
  name: {},
  email: {},
}

const user = {
  ...person,
  password: {},
}

const formSchemas = {
  person,
  user,
}

export function schema(schemaName) {
  return formSchemas[schemaName] ? formSchemas[schemaName] : throw new Error(`Form Schema ${schemaName} is not defined`)
}

export default () => {
  return formSchemas
}
