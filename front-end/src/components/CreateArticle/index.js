import React from 'react'
import Editor from './Editor'
import HeaderNav from '../public/HeaderNav'
import { Layout, Row, Col } from 'antd';
import Button from '@material-ui/core/Button';

export default class CreateArticle extends React.Component {
  render () {
    return (
      <Row>
        <HeaderNav/>
        <Col span={16} push={4} style={ style.editor }>
          <Editor/>
        </Col>
        <Col span={24} style={style.footerBtn}>
          <Button color="primary" variant="outlined" style={style.btn}>提交</Button>
          <Button color="primary" variant="outlined" style={style.btn}>暂存</Button>
          <Button color="primary" variant="outlined" style={style.btn}>取消</Button>
        </Col>
      </Row>
    )
  }
}

const style = {
  editor: {
    marginTop: '50px'
  },
  footerBtn: {
    textAlign: 'center',
    marginTop: '20px'
  },
  btn: {
    marginRight: '15px'
  }
}
