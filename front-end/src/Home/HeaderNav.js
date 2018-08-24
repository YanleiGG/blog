import React from 'react'
import { Row, Col, Menu, Avatar, Dropdown } from 'antd';

const userMenu = (
    <Menu>
      <Menu.Item key="0">
        <a target="_blank" rel="noopener noreferrer">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" rel="noopener noreferrer">2nd menu item</a>
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
            <Menu.Item key="app" style={ style.menuItem }>
              首页
            </Menu.Item>
          </Menu> 
        </Col>
        <Col span={2}>
          <Dropdown overlay={userMenu}>
            <Avatar style={ style.avatar } size="large">
              测试
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
    boxShadow: '0 0 15px 0 #e8e8e8',
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
