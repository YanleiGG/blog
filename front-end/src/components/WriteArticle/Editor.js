import React from 'react'
import ReactQuill from 'react-quill'
import './editor.css'
import { observer, inject } from 'mobx-react';
import { Input } from 'antd';

@inject('writeArticleStore')
@observer
class Editor extends React.Component {
  
  render () {
    let { article, handleEditorChange, handleTitleChange } = this.props.writeArticleStore
    return (
      <div>
        <Input
          value={ article.title }
          placeholder="输入标题..."
          onChange={handleTitleChange}
        />
        <ReactQuill 
          theme = 'snow'
          onChange={handleEditorChange}
          value={article.content}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={'.editor'}
         />
       </div>
     )
  }
}

// Editor 的基础配置，由于与其它组件的数据无关，为了维护方便写在组件内
Editor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false,
  }
}

Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

export default Editor