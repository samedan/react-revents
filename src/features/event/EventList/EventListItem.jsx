import React, { Component } from 'react';
import { Segment, Icon, Item, List, Button, Label } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import format from 'date-fns/format';
import { Link } from 'react-router-dom';

class EventListItem extends Component {
  render() {
    const { event, deleteEvent } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{event.hostedBy}</a>
                </Item.Description>
                {event.cancelled && <Label style={{top: '-40px'}} ribbon='right' color='red' content='This event has been cancelled' />}
                
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />
            {/* {format(event.date.toDate(), 'dddd Do MMMM')} at{' '} */}
            {format(event.date, 'dddd Do MMMM')} at{' '}
            {format(event.date, 'HH:mm')} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              Object.values(event.attendees).map((attendee, index) => (
                <EventListAttendee attendee={attendee} key={index} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button
            onClick={deleteEvent(event.id)}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
            as={Link}
            to={`/event/${event.id}`}
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
