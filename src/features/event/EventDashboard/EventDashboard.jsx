import React, { Component } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import EventList from '../EventList/EventList';
import { deleteEvent } from '../eventActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventActivity from '../EventActivity/EventActivity';

const mapState = state => ({
  events: state.firestore.ordered.events,
  loading: state.async.loading
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
    const { events, loading } = this.props;
    if (loading) return <LoadingComponent inverted={true} />;
    return (
      <div>
        <Grid>
          <GridColumn width={10}>
            <EventList deleteEvent={this.handleDeleteEvent} events={events} />
          </GridColumn>
          <GridColumn width={6}>
            <EventActivity />
          </GridColumn>
        </Grid>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(firestoreConnect([{ collection: 'events' }])(EventDashboard));
