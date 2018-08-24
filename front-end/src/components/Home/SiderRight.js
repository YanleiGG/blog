import React from 'react';
import { Divider } from 'antd';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export default class SiderRight extends React.Component {
  render () {
    return (
      <Card style={style.card}>
        <CardContent>
          <div>标签</div>
          <Divider/>
        </CardContent>
      </Card>
    )
  }
}

const style = {
  card: {
    margin: "40px 20px 0 20px"
  }
}