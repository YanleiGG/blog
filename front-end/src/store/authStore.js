import { observable, action } from "mobx";

class AuthStore {
  @observable isLogin = false
  @observable activeTabKey = '登录'
  @observable sign_in_username = ''
  @observable sign_in_password = ''

  @action handleActiveTabKeyChange = value => this.activeTabKey = value
  @action handleSignInUsernameChange = value => this.sign_in_username = value
  @action handleSignInPasswordChange = value => this.sign_in_password = value
}

let store = new AuthStore()

export default store

