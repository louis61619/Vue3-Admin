import { ILoginState } from './login/type'
import { ISystemState } from './main/system/type'

interface IRootStore {
  roleList: any[]
  departmentList: any[]
}

interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

type IStoreType = IRootStore & IRootWithModule

enum MutaionTypes {
  CHNAGE_DEPARTMENT_LIST = 'CHNAGE_DEPARTMENT_LIST',
  CHANGE_ROLE_LIST = 'CHANGE_ROLE_LIST'
}

export { IRootStore, IStoreType, MutaionTypes }
