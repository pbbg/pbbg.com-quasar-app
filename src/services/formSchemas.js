export const PERSON_SCHEMA = 'person'
export const USER_SCHEMA = 'user'
export const GAME_SCHEMA = 'game'
export const GAME_INFO_SCHEMA = 'gameInfo'

const person = {
  name: {},
  email: {},
}

const user = {
  ...person,
  password: {},
}

const game = {
  gameName: {},
  gameTags: {},
  gameShortDescription: {},
}

const gameInfo = {
  gameUrl: {},
}

const formSchemas = {
  [PERSON_SCHEMA]: person,
  [USER_SCHEMA]: user,
  [GAME_SCHEMA]: game,
  [GAME_INFO_SCHEMA]: gameInfo,
}

export function schema(schemaName) {
  return formSchemas[schemaName] ? formSchemas[schemaName] : throw new Error(`Form Schema ${schemaName} is not defined`)
}

export default () => {
  return formSchemas
}
