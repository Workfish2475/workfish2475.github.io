import swiftIcon from "../../static/swift.svg";
import cIcon from "../../static/c-plain.svg";
import pythonIcon from "../../static/python.svg";
import goIcon from "../../static/go.svg";

export const projects = [
  {
    id: 1,
    name: "Fini - PM",
    desc: "A lightweight project tracker built in <strong> Swift </strong>.  It lets users manage projects with kanban boards, track progress visually with heatmaps, and organize tasks using a flexible tagging system.",
    img: "imgPath",
    gitUrl: "https://github.com/Workfish2475/Project-Manager",
    languages: [swiftIcon],
  },
  {
    id: 2,
    name: "C-Minus Compiler",
    desc: "Custom compiler project demonstrating advanced parsing and code translation techniques. Implements lexical analysis, syntax parsing, and code generation using modern compiler design principles.",
    img: "imgPath",
    gitUrl: "https://github.com/Workfish2475/Compiler",
    languages: [cIcon],
  },
  {
    id: 3,
    name: "Web Scraper",
    desc: "Web scraping tool built with <strong>Python</strong> and <strong>Selenium</strong>, that performs automated data extraction from websites via element targeting. Scraped data is parsed into JSON and sent to lightweight REST APIs developed in <strong>Go</strong>. Currently, the API handles requests with payloads parsed from JSON or queried from a MySQL Database.",
    img: "imgPath",
    gitUrl: "https://github.com/Workfish2475/WebScraper",
    languages: [pythonIcon, goIcon],
  },
];
