import React from 'react'
import { Layout, Row, Col } from 'antd';
import HeaderNav from './HeaderNav'
import ArticleCard from './ArticleCard'
import SiderRight from './SiderRight'
import { observer, inject } from 'mobx-react';

const { Header, Footer, Sider, Content } = Layout;

@inject('authStore')
@observer
export default class Home extends React.Component {
  render () {
    console.log(this.props.authStore)
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