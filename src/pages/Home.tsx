import React, { useState } from 'react';
import { Card, Masonry } from '../components';
import { count, countStatus, filterTickets, getTickets } from '../services/TicketService';
import { Ticket, TicketStatus } from '../models/ticket';
import { Link } from 'react-router-dom';
import { TabButton } from '../components/TabButton';


export const Home = () => {

    const [elems, setElems] = useState<Ticket[]>(getTickets());

    return (
        <>
            <TabButton type="primary" callback={ () => setElems(getTickets()) } count={ count() }>All</TabButton>
            <TabButton type="danger" callback={ () => setElems(filterTickets(TicketStatus.Todo)) } count={ countStatus(TicketStatus.Todo) }>To Do</TabButton>
            <TabButton type="warning" callback={ () => setElems(filterTickets(TicketStatus.In_Progress)) } count={ countStatus(TicketStatus.In_Progress) }>In Progress</TabButton>
            <TabButton type="success" callback={ () => setElems(filterTickets(TicketStatus.Done)) } count={ countStatus(TicketStatus.Done) }>Done</TabButton>
            <div style={{ height: '3em' }}></div>
            <Masonry>
                {
                    elems.map(t => <Link key={t.id} to={"/detail/" + t.id}><Card ticket={t} /></Link>)
                }
            </Masonry>
        </>
    );
}