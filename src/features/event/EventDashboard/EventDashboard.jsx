import React, { Component } from 'react';
import { Grid, GridColumn, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../EventList/EventList';
import { deleteEvent } from '../eventActions';

const mapState = state => ({
  events: state.events
});

const actions = {
  deleteEvent
};

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  // this.handleFormOpen = this.handleFormOpen.bind(this);

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { events } = this.props;
    return (
      <div>
        <Grid>
          <GridColumn width={10}>
            <EventList deleteEvent={this.handleDeleteEvent} events={events} />
          </GridColumn>
          <GridColumn width={6} />
        </Grid>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(EventDashboard);
