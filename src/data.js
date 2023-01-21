import class1 from "./images/yoga-class.jpg";
import class2 from "./images/crossfit-class.jpg";
import class3 from "./images/cardio-class.jpg";
import team1 from "./images/team-image.jpg";
import team2 from "./images/team-image01.jpg";

export const pageLinks = [
  {
    id: 1,
    name: "home",
    href: "#home",
  },
  {
    id: 2,
    name: "about",
    href: "#about",
  },
  {
    id: 3,
    name: "classes",
    href: "#classes",
  },
  {
    id: 4,
    name: "schedule",
    href: "#schedule",
  },
  {
    id: 5,
    name: "contact",
    href: "#contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.twitter.com",
    icon: "fab fa-twitter",
    showInheader: true,
  },
  {
    id: 2,
    href: "https://www.facebook.com",
    icon: "fab fa-facebook",
    showInheader: true,
  },
  {
    id: 3,
    href: "https://www.instagram.com",
    icon: "fab fa-instagram",
    showInheader: true,
  },
];
export const team = [
  {
    id: 1,
    name: "Mary Yan",
    position: "Yoga Instructor",
    image: team1,
    socials: [
      {
        id: 1,
        sociallink: "https://www.twitter.com",
        icon: "fab fa-twitter",
      },
      {
        id: 2,
        sociallink: "https://www.instagram.com",
        icon: "fab fa-instagram",
      },
    ],
  },
  {
    id: 2,
    name: "Catherina",
    position: "Body trainer",
    image: team2,
    socials: [
      {
        id: 1,
        sociallink: "https://www.instagram.com",
        icon: "fab fa-instagram",
      },
      {
        id: 2,
        sociallink: "https://www.facebook.com",
        icon: "fab fa-facebook",
      },
    ],
  },
];

export const trainingClasses = [
  {
    id: 1,
    name: "Yoga",
    instructor: "Bella",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    price: 50,
    image: class1,
  },
  {
    id: 2,
    name: "Areobic",
    instructor: "Mary",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    price: 66,
    image: class2,
  },
  {
    id: 3,
    name: "Cardio",
    instructor: "Cathe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    price: 77,
    image: class3,
  },
];

export const scheduleData = [
  {
    id: 1,
    row: [
      {
        col1: "7:00 am",
        col2: "Cardio <span>7:00 AM - 8:00 AM</span>",
        col3: "Power Fitness <span>7:00 AM - 9:00 AM</span>",
        col4: "",
        col5: "",
        col6: "Yoga Section <span>7:00 AM - 8:00 AM</span>",
        col7: "",
      },
    ],
  },
  {
    id: 2,
    row: [
      {
        col1: "9:00 am",
        col2: "",
        col3: "",
        col4: "Boxing <span>9:00 AM - 11:00 AM</span>",
        col5: "Areobic <span>9:00 AM - 10:00 AM</span>",
        col6: "",
        col7: "Cardio <span>9:00 AM - 10:00 AM</span>",
      },
    ],
  },
  {
    id: 3,
    row: [
      {
        col1: "11:00 am",
        col2: "",
        col3: "Boxing <span>11:00 AM - 12:10 PM</span>",
        col4: "Areobic <span>11:00 AM - 12:30 PM</span>",
        col5: "",
        col6: "Body work <span>11:00 AM - 12:30 PM</span>",
        col7: "",
      },
    ],
  },
  {
    id: 4,
    row: [
      {
        col1: "2:00 pm",
        col2: "Boxing <span>2:00 PM - 3:00 PM</span>",
        col3: "Power lifting <span>2:00 PM - 3:00 PM</span>",
        col4: "",
        col5: "Cardio <span>2:00 PM - 4:00 PM</span>",
        col6: "",
        col7: "Crossfit <span>2:00 PM - 3:00 PM</span>",
      },
    ],
  },
];
export const columsData = [
  {
    header: "Mon",
    accessor: "col1",
  },
  {
    header: "TUE",
    accessor: "col2",
  },
  {
    header: "Wed",
    accessor: "col3",
  },
  {
    header: "Thu",
    accessor: "col4",
  },
  {
    header: "Fri",
    accessor: "col5",
  },
  {
    header: "Sat",
    accessor: "col6",
  },
];
