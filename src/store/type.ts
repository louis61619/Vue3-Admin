import { ILoginState } from './login/type'

interface IRootStore {
  name: string
}

interface IRootWithModule {
  login: ILoginState
}

function aaa() {}

type IStoreType = IRootStore & IRootWithModule

export { IRootStore, IStoreType }
