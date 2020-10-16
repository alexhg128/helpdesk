import React from 'react';
import { Ticket, TicketStatus } from '../models/ticket';

export const Card = (props: { ticket: Ticket }) => {

    var getBadge = (status: TicketStatus): JSX.Element => {
        switch(status) {
            case TicketStatus.Todo:
                return (
                    <span className="badge badge-pill badge-danger">To Do</span>
                );
            case TicketStatus.In_Progress:
                return (
                    <span className="badge badge-pill badge-warning">In Progress</span>
                );
            case TicketStatus.Done:
                return (
                    <span className="badge badge-pill badge-success">Done</span>
                );
            default:
                return (<></>);
        }
    }

    return (
        <div className="card" style={{
            backgroundColor: props.ticket.status == TicketStatus.Done ? "#f0f0f0" : "#ffffff"
        }}>
            <div className="card-body">
            <h5 className="card-title">{ props.ticket.title }</h5>
            <p className="card-text collapse-text">{ props.ticket.description }</p>
            <p>{ getBadge(props.ticket.status) }</p>
            <p className="card-text"><small className="text-muted">{ props.ticket.date.toDateString() }</small></p>
            </div>
        </div>
    );
}