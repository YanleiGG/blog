import React from 'react'
import { Layout, Row, Col } from 'antd';
import HeaderNav from './HeaderNav'
import ArticleCard from './ArticleCard'
import SiderRight from './SiderRight'

const { Header, Footer, Sider, Content } = Layout;

export default class Home extends React.Component {
  render () {
    return (
      <Layout>
        <HeaderNav/>
        <Row>
          <Col span={16}>
            <ArticleCard/>
          </Col>
          <Col span={8}>
            <SiderRight/>
          </Col>
        </Row>
      </Layout>
    )
  }
}