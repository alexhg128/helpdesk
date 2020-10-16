export interface Ticket {
    id:number;
    title: string;
    asigner: string;
    asignee?: string;
    date: Date;
    status: TicketStatus;
    description?: string;
}

export enum TicketStatus {
    Todo,
    In_Progress,
    Done
}