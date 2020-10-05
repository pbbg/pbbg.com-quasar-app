export const PERSON_SCHEMA = 'person'
export const USER_SCHEMA = 'user'
export const GAME_SCHEMA = 'game'

const person = {
  name: {},
  email: {},
}

const user = {
  ...person,
  password: {},
}

const game = {
  gameUrl: {},
  gameName: {},
  gameTags: {},
  gameShortDescription: {},
}

const formSchemas = {
  [PERSON_SCHEMA]: person,
  [USER_SCHEMA]: user,
  [GAME_SCHEMA]: game,
}

export function schema(schemaName) {
  return formSchemas[schemaName] ? formSchemas[schemaName] : throw new Error(`Form Schema ${schemaName} is not defined`)
}

export default () => {
  return formSchemas
}
