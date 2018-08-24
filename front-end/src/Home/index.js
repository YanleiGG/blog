import React from 'react'
import { Layout } from 'antd';
import HeaderNav from './HeaderNav'
import ArticleCard from './ArticleCard'

const { Header, Footer, Sider, Content } = Layout;

export default class Home extends React.Component {
  render () {
    return (
      <Layout>
        <HeaderNav/>
        <Layout>
          <Content>
            <ArticleCard/>
          </Content>
          {/* <Sider>Sider</Sider> */}
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    )
  }
}