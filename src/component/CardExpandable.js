import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExpandable = (props) => (
  <Card className="col-md-3">
    <CardHeader
      title={props.name}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <h3>SubTotal is:  {props.total}  </h3>
    </CardActions>
    <CardText expandable={true}>

        <ul>
          {props.items.map((item) => {
            return (<li key={item.sku}>{`${item.name}   $${item.price}`}</li>);
          })}
        </ul>

    </CardText>
  </Card>
);

export default CardExpandable;
