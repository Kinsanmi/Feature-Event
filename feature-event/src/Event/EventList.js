export const EventList = [
  {
    id: "1",
    /* Image: */
    names: "Wizkid in Warri",
    location: "Lagos",
    date: "8th December, 2021",
    duration: "Starting from",
    price: "₦15,000",
    ticket: "Buy Ticket",
  },
  {
    id: "2",
    /* Image: */
    names: "Movie X: Halloween",
    location: "Lagos",
    date: "31st Oct, 2021",
    duration: "Starting from",
    price: "₦15,000",
    ticket: "Buy Ticket",
  },
]

export const AllEvent = [
  {
    id: "1",
    /* Image: */
    names: "Event 1",
    location: "Lagos",
    date: "31 Oct",
    duration: "Starting from",
    price: "₦15,000",
    ticket: "Buy Ticket",
  },
  {
    id: "2",
    /* Image: */
    names: "Event 2",
    location: "Lagos",
    date: "31 Oct",
    duration: "Starting from",
    price: "₦15,000",
    ticket: "Buy Ticket",
  },
  {
    id: "3",
    /* Image: */
    names: "Event 3",
    location: "Lagos",
    date: "31 Oct",
    duration: "Starting from",
    price: "₦15,000",
    ticket: "Buy Ticket",
  },
  {
    id: "4",
    /* Image: */
    names: "Movie X: Halloween",
    location: "Lagos",
    date: "31 Oct",
    duration: "Starting from",
    price: "₦15,000",
    ticket: "Buy Ticket",
  },
  {
    id: "5",
    /* Image: */
    names: "Movie X: Halloween",
    location: "Lagos",
    date: "31 Oct",
    duration: "Starting from",
    price: "₦15,000",
    ticket: "Buy Ticket",
  },
  {
    id: "6",
    /* Image: */
    names: "Movie X: Halloween",
    location: "Lagos",
    date: "31 Oct",
    duration: "Starting from",
    price: "₦15,000",
    ticket: "Buy Ticket",
  },
  {
    id: "7",
    /* Image: */
    names: "Movie X: Halloween",
    location: "Lagos",
    date: "31 Oct",
    duration: "Starting from",
    price: "₦15,000",
    ticket: "Buy Ticket",
  },
  {
    id: "8",
    /* Image: */
    names: "Movie X: Halloween",
    location: "Lagos",
    date: "31 Oct",
    duration: "Starting from",
    price: "₦15,000",
    ticket: "Buy Ticket",
  },
]

export const fetchEvents = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ eventList: EventList, allEvents: AllEvent })
    //   reject({msg:"Request failed"})
    }, 3000)
    
  })
}
