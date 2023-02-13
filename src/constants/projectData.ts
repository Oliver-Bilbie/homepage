// Each entry will create a page in the carousel.
// Descriptions are provided as a list where each entry corresponds to a paragraph.
// Image values correspond to entries in "images" within the ProjectPage component. This is a work-around for the webpack limitation which only allows hard-coded file locations for imports.

export const PROJECTS = [
  {
    name: "Flight Guesser",
    description: [
      "Flight Guesser is a game which uses real-time FlightRadar24 data. The game is designed to be played when an aircraft is spotted overhead, and the objective is to correctly guess the origin and/or destination of the aircraft. Points are awarded based on the distance between the guess made and the correct location.",
      "Players may optionally join or create multiplayer lobbies, where other players' scores are displayed on a scoreboard.",
    ],
    image: "fg",
    host_url: "https://flight-guesser.net/",
    src_url: "https://github.com/Oliver-Bilbie/flight-guesser",
  },
  {
    name: "Learn Common Words",
    description: [
      "The Learn Common Words application is a tool for learning the German language. The user is presented with a German word along with three possible English translations, only one of which is correct, and must choose the correct one.",
      "Initially the words will be selected from the fifty most commonly used words, and as the user answers more questions correctly this number will be increased up to one thousand.",
    ],
    image: "lcw",
    host_url: "https://learn-common-words.net/",
    src_url: "https://github.com/Oliver-Bilbie/learn-common-words",
  },
];
