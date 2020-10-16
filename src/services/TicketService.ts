import { Ticket, TicketStatus } from "../models/ticket";

let tickets: Ticket[] = [
    {
        id: 1,
        title: "Become a Certified Sky Diver",
        asignee: "Jared Robbins",
        asigner: "Hanna Bush",
        date: new Date(2020, 6, 30),
        status: TicketStatus.Done,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo dolor, venenatis ut ultrices in, feugiat a ipsum. Fusce pretium lacus leo, vitae sollicitudin nisi venenatis nec. Integer vestibulum mauris sit amet purus iaculis, aliquet laoreet risus interdum. Integer vel neque dapibus, pellentesque turpis ut, rutrum libero. Morbi euismod suscipit sapien vitae porttitor. Maecenas sollicitudin purus ac est ultrices porttitor. In hac habitasse platea dictumst. Ut suscipit nisl purus, non convallis tellus egestas ut."
    },
    {
        id: 2,
        title: "Drive the Hawaiian Coast",
        asignee: "Murray Maguire",
        asigner: "Phoenix Cantrell",
        date: new Date(2020, 6, 30),
        status: TicketStatus.Done,
        description: "Ut quis felis nisl. Donec sed dui massa. Integer risus lorem, tincidunt fermentum eleifend non, commodo accumsan urna. Quisque eleifend mauris quis blandit eleifend. Morbi nulla felis, eleifend vel aliquet et, aliquam eget est. Sed tellus dui, volutpat id tincidunt et, finibus quis justo. Suspendisse iaculis ante vitae ornare condimentum. Sed nunc enim, interdum ut tempus vitae, tincidunt vel magna."
    },
    {
        id: 3,
        title: "Go to a Party on a Fort in the Sea",
        asigner: "Samah Shields",
        date: new Date(2020, 6, 30),
        status: TicketStatus.Todo,
        description: "Donec ultrices malesuada ipsum, a vestibulum sem pulvinar a. Donec ac magna molestie, pulvinar lectus vehicula, molestie ipsum. Quisque bibendum lorem quis mollis malesuada. Nunc pulvinar condimentum metus, congue accumsan nunc semper eget. Praesent ut risus euismod, efficitur neque ac, ornare leo. Morbi vehicula porta lacus quis sagittis. Mauris pharetra turpis dolor, ut facilisis nulla varius quis. Mauris vitae tempor quam. Sed tortor diam, semper condimentum ultricies in, fermentum et nisl."
    },
    {
        id: 4,
        title: "Learn to Draw",
        asignee: "Kaci Pollard",
        asigner: "Rumaisa Gray",
        date: new Date(2020, 6, 30),
        status: TicketStatus.In_Progress,
        description: "Vivamus eleifend consequat efficitur. Proin lacinia ac risus vel ullamcorper. Maecenas id varius nulla, at maximus est. Aliquam in velit sed mauris faucibus ornare eu et nibh. Nulla rhoncus vulputate quam ut viverra. Aenean ut mollis massa, vitae feugiat ligula. Cras et lacinia turpis. Ut volutpat quam ac mauris varius, ut molestie orci mattis. Cras dignissim nisi ante, tempor laoreet neque egestas vitae. Vivamus sed nisi dapibus, eleifend enim in, placerat nisi. Nulla ac arcu turpis. Nulla leo neque, tincidunt cursus tellus id, rhoncus gravida est. Morbi at malesuada felis. In ante mauris, posuere in velit sit amet, scelerisque interdum nisl. Quisque nunc enim, pulvinar et tortor id, scelerisque pulvinar diam."
    },
    {
        id: 5,
        title: "Go Cliff Diving",
        asigner: "Abby Brooks",
        date: new Date(2020, 6, 30),
        status: TicketStatus.Todo,
        description: "Vivamus aliquet at sapien at rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet leo ex. Cras finibus laoreet blandit. Sed laoreet enim et rutrum consectetur. Cras mollis diam nisl, placerat sagittis urna maximus id. Curabitur sodales justo ac dolor auctor tristique. Quisque venenatis mi vel dolor volutpat scelerisque. Aenean faucibus ante ac nibh scelerisque, vel vehicula ex efficitur. Donec fringilla ligula nec leo commodo facilisis. Duis convallis, tortor vitae varius faucibus, nibh nibh lobortis felis, ac imperdiet dolor erat at sem. Duis eget malesuada nulla."
    },
    {
        id: 6,
        title: "Have my Own Company",
        asigner: "Samual Beasley",
        date: new Date(2020, 6, 30),
        status: TicketStatus.Todo,
        description: "Curabitur finibus quam at porttitor mollis. Ut mollis erat tristique tellus pharetra, non congue elit pulvinar. Sed vitae odio enim. Vestibulum ac pretium metus. Nam tincidunt venenatis libero. Praesent consequat ante libero, ut maximus purus sagittis id. Vestibulum sed urna vel neque convallis efficitur et et tellus."
    },
    {
        id: 7,
        title: "Hand Write and Send Anonymous Letters",
        asignee: "Rachael York",
        asigner: "Kaylan Heath",
        date: new Date(2020, 6, 30),
        status: TicketStatus.In_Progress,
        description: "Morbi venenatis ornare rhoncus. Pellentesque luctus vitae leo id commodo. Morbi tempus, purus eu egestas convallis, nulla orci fringilla nibh, ac tempor lorem lorem quis risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis dapibus molestie. Vivamus euismod vestibulum gravida. Etiam leo urna, rhoncus in vulputate vestibulum, vestibulum non dui. In vitae lorem nec justo porttitor placerat sed sit amet dolor. Nulla aliquet posuere magna, consectetur scelerisque enim scelerisque a. In suscipit viverra sodales. Sed sit amet velit eget nibh consequat sagittis vel id nisi. Nulla blandit tellus commodo egestas volutpat. Nunc congue enim vel elit dictum blandit. Praesent nulla leo, tincidunt id feugiat in, commodo et lacus. Praesent tempor arcu nec eleifend fermentum. Phasellus tempor ornare nunc."
    },
    {
        id: 8,
        title: "Break a Guinness World Record",
        asignee: "Keiren Jordan",
        asigner: "Hugo Gentry",
        date: new Date(2020, 6, 30),
        status: TicketStatus.In_Progress,
        description: "Praesent sed rutrum libero. Aenean aliquam id est ac semper. Nam ornare mattis eros, a dictum metus rhoncus ac. Maecenas volutpat semper nisl nec tristique. Mauris finibus risus auctor, maximus quam at, condimentum lectus. Suspendisse euismod, leo sed viverra volutpat, ante metus hendrerit arcu, quis venenatis ex magna in augue. Integer mattis enim et fermentum suscipit. Nulla dictum, lectus in consequat efficitur, tellus libero pretium neque, a mollis urna libero id orci. Suspendisse urna sem, fermentum sed diam eget, dictum blandit turpis. Fusce finibus justo eget orci dapibus malesuada. Aenean consequat viverra tortor ornare cursus. Sed in dui et dolor sollicitudin ornare at vitae enim. Sed aliquam sem et nibh posuere vulputate. Fusce pulvinar gravida convallis."
    }
];

export const getTickets = () : Ticket[] => {
    return tickets;
}

export const filterTickets = (status: TicketStatus) : Ticket[] => {
    return tickets.filter((x => x.status == status));
}

export const countStatus = (status: TicketStatus) : number => {
    return filterTickets(status).length;
}

export const count = () : number => {
    return tickets.length;
}

export const getTicket = (id: number) => {
    return tickets.find(x => x.id == id);
}