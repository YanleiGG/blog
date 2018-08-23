import React from 'react'
import { Row, Col } from 'antd';

export default class Home extends React.Component {
  render () {
    return (
      <Row style={ style.header }>
        <Col span={4} style={ style.titleContainer }>
          <span style={ style.title }>A Blog</span>
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
  titleContainer: { 
    fontSize: '20px', 
    color: 'black', 
    textAlign: 'center'
  },
  title: {
    display: 'inline-block',
    marginTop: '20px'
  }
}
