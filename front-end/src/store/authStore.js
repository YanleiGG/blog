import { observable } from "mobx";

class AuthStore {
  @observable isLogin = false
}

let store = new AuthStore()

export default store

