import React from 'react'
import { Row, Col } from 'antd';

export default class Home extends React.Component {
  render () {
    return (
      <Row style={ style.header }>
        <Col span={4} style={style.logoContainer}>
          <img style={ style.logo } src={ require("../assets/blog-logo.png") }></img>
        </Col>
        <Col span={12}></Col>
      </Row>
    )
  }
}

const style = {
  header: { 
    height: '70px', 
    borderBottom: '1px solid grey' 
  },
  logoContainer: { 
    textAlign: 'center'
  },
  logo: {
    width: "50%",
    height: "50%",
    marginTop: '20px'
  }
}
