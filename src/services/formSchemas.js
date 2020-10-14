export const GAME_SCHEMA = 'game'
export const GAME_INFO_SCHEMA = 'gameInfo'
export const USER_LOGIN_SCHEMA = 'userLogin'
export const USER_REGISTER_SCHEMA = 'userRegister'

const game = {
  gameName: {},
  gameTags: {},
  gameShortDescription: {},
}

const gameInfo = {
  gameUrl: {},
}

const userLogin = {
  email: {},
  password: {},
}

const userRegister = {
  name: {},
  email: {},
  password: {},
  confirmPassword: {},
}

const formSchemas = {
  [GAME_SCHEMA]: game,
  [GAME_INFO_SCHEMA]: gameInfo,
  [USER_LOGIN_SCHEMA]: userLogin,
  [USER_REGISTER_SCHEMA]: userRegister,
}

export function schema(schemaName) {
  return formSchemas[schemaName] ? formSchemas[schemaName] : throw new Error(`Form Schema ${schemaName} is not defined`)
}

export default () => {
  return formSchemas
}
