import React from 'react';
import { DetailCard } from '../components';
import { match, useHistory } from 'react-router-dom'
import { getTicket } from '../services/TicketService';
import { Ticket } from '../models/ticket';

export const Details = (props: { match: match }) => {

    var history = useHistory();
    var ticket = getTicket(Number((props.match.params as any).id));
    if(!ticket) {
        history.replace("/");
    } 
    ticket = ticket as Ticket;

    return(
        <DetailCard ticket={ticket} />
    );
}