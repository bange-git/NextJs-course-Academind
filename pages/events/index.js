import React, { Fragment} from 'react';
import EventList from '../../components/events/event-list';
import {getAllEvents} from '../../dummy-data';
import EventSearch from '../../components/events/event-search';
import { useRouter } from 'next/router';


function AllEvents() {

  const router = useRouter();
  function handleEventSearch(year, month){
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
  }

  const allEvents = getAllEvents();

  return (
    <Fragment>
       <EventSearch  onSearch={ handleEventSearch }/>
       <EventList  items={allEvents}/>
    </Fragment>
    
  )
}

export default AllEvents