import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';
import Fade from "react-reveal/Fade";

const CommitteeCard = (props) => (
  <Fade right cascade>
    <Card style={{margin: "1em", maxWidth:"50vw"}}>
      <Image src={props.image} wrapped ui={false} centered={true} />
      <Card.Content textAlign='center' max-width="50px">
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.position}</span>
        </Card.Meta>
        <Card.Description>
          {props.fb && <a href={props.fb} target="_blank" rel="noopener noreferrer">
            <Icon name='facebook' size='big'/>
          </a>}
          {props.linkedin && <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
            <Icon name='linkedin' size='big'/>
          </a>}
        </Card.Description>
      </Card.Content>
    </Card>
  </Fade>
)

export default CommitteeCard;