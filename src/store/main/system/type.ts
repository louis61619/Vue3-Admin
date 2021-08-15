export interface ISystemState {
  userList: any[]
  userCount: number
}

export enum MutaionTypes {
  CHANGE_USER_LIST = 'CHANGE_USER_LIST',
  CHANGE_USER_COUNT = 'CHANGE_USER_COUNT'
}
