import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const extra = (props) =>(
  <div>
    {props.fb && <a href={props.fb} target="_blank">
      <Icon name='facebook' size='big'/>
    </a> }

    {props.linkedin && <a href={props.linkedin} target="_blank">
      <Icon name='linkedin' size='big'/>
    </a>}
  </div>
)

const CommitteeCard = (props) => (
  <Card>
    <Image src={props.image} wrapped ui={false} />
    <Card.Content textAlign='center' max-width="50px">
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.position}</span>
      </Card.Meta>
      <Card.Description>
        {extra(props)}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default CommitteeCard;