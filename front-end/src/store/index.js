import { observable } from "mobx";

class Store {
  @observable isLogin = false
}

let store = new Store()

export default store

