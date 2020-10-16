import React from 'react';
import { Ticket, TicketStatus } from '../models/ticket';
import './Card.scss';

export const DetailCard = (props: { ticket: Ticket }) => {

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
            <h5 className="card-title">{ props.ticket.title } { getBadge(props.ticket.status) }</h5>
            {
                props.ticket.asignee &&
                <p className="card-text"><small className="text-muted">Asignee</small></p>
            }
            {
                props.ticket.asignee &&
                <p className="card-text">{ props.ticket.asignee }</p>
            }
            <p className="card-text"><small className="text-muted">Asigner</small></p>
            <p className="card-text">{ props.ticket.asigner }</p>
            <p className="card-text"><small className="text-muted">Date</small></p>
            <p className="card-text">{ props.ticket.date.toDateString() }</p>
            <p className="card-text"><small className="text-muted">Description</small></p>
            <p className="card-text">{ props.ticket.description }</p>
            </div>
        </div>
    ); 
}