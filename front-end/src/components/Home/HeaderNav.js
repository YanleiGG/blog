import React from 'react'
import { Row, Col, Menu, Dropdown } from 'antd';
import Avatar from '@material-ui/core/Avatar';


const userMenu = (
    <Menu>
      <Menu.Item key="0">
        写文章
      </Menu.Item>
      <Menu.Item key="1">
        消息
      </Menu.Item>
      <Menu.Item key="2">
        注销
      </Menu.Item>
    </Menu>
)

export default class Header extends React.Component {
  render () {
    return (
      <Row style={ style.header }>
        <Col span={4} style={style.logoContainer}>
          <img style={ style.logo } src={ require("../assets/blog-logo.png") }></img>
        </Col>
        <Col span={6}></Col>
        <Col style={ style.menuContainer } span={12}>
          <Menu style={ style.menu } mode="horizontal">
            {/* <Menu.Item key="app" style={ style.menuItem }>
              首页
            </Menu.Item> */}
          </Menu> 
        </Col>
        <Col span={2}>
          <Dropdown overlay={userMenu}>
            <Avatar style={ style.avatar } size="large">
              A
            </Avatar>
          </Dropdown>    
        </Col>
      </Row>
    )
  }
}

const style = {
  header: { 
    height: '70px', 
    boxShadow: '0 0 30px 0 black',
    backgroundColor: 'white'
  },
  logoContainer: { 
    textAlign: 'center'
  },
  logo: {
    width: "50%",
    height: "50%",
    marginTop: '20px',
  },
  menuContainer: {
    height: "100%"
  },
  menu: {
    height: "100%"
  },
  menuItem: {
    height: "100%",
    fontSize: "15px",
    paddingTop: "15px",
  },
  avatar: { 
    backgroundColor: "green", 
    verticalAlign: 'middle',
    textAlign: 'center',
    marginTop: '15px',
  }
}
