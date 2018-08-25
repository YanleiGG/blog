import { observable, action } from "mobx";

class writeArticleStore {
  @observable article = {
    title: '',
    content: ''
  }

  @action handleEditorChange = (value) => {
    this.article.content = value
  }

  @action handleTitleChange = (e) => {
    this.article.title = e.target.value
  }
}

let store = new writeArticleStore()

export default store

