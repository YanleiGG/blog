import React from 'react'
import Editor from './Editor'
import HeaderNav from '../public/HeaderNav'
import { Layout, Row, Col } from 'antd';

export default class WriteArticle extends React.Component {
  render () {
    return (
      <Row>
        <HeaderNav/>
        <Col span={4}></Col>
        <Col span={16} style={ style.editor }>
          <Editor/>
        </Col>
      </Row>
    )
  }
}

const style = {
  editor: {
    marginTop: '50px'
  }
}
