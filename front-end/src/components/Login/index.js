import React from 'react'
import { Row, Col, Card, Input } from 'antd';
import { Link } from "react-router-dom";
import { observer, inject } from 'mobx-react';
import Button from '@material-ui/core/Button';

@inject('authStore')
@observer
export default class Login extends React.Component {
  render () {
    const { activeTabKey, handleActiveTabKeyChange, sign_in_username, sign_in_password, handleSignInUsernameChange, handleSignInPasswordChange } = this.props.authStore
    return (
      <Row>
        <Col span={8} push={8}>
          <Card
            style={ style.loginCard }
            tabList={[{key: '登录', tab: '登录'},{key: '注册', tab: '注册'}]}
            activeTabKey={activeTabKey}
            onTabChange={(key) => { handleActiveTabKeyChange(key); }}
          > 
            <Input placeholder="账号" value={sign_in_username} onChange={e => handleSignInUsernameChange(e.target.value)} style={style.input}/>
            <Input placeholder="密码" value={sign_in_password} onChange={e => handleSignInPasswordChange(e.target.value)} style={style.input}/>
            {/* {contentListNoTitle[this.state.noTitleKey]} */}
            <Col span={24} style={style.footerBtn}>
              <Button color="" variant="outlined" style={style.btn}>登录</Button>
              <Button color="" variant="outlined" style={style.btn}>取消</Button>
            </Col>
          </Card>
        </Col>
      </Row>
    )
  }
}

const style = {
  loginCard: { 
    width: '100%',
    textAlign: 'center',
    marginTop: '30%'
  },
  btn: {
    marginRight: '15px'
  },
  input: {
    marginBottom: '15px'
  }
}

