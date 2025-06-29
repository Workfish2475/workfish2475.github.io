import swiftIcon from "../../static/swift.svg";
import cIcon from "../../static/c-plain.svg";
import pythonIcon from "../../static/python.svg";
import goIcon from "../../static/go.svg";

export const projects = [
  {
    id: 1,
    name: "StickIt",
    desc: "A cross-platform sticky note app built in <strong>Swift</strong> for iOS, macOS, and iPadOS. Users can create, edit, and delete notes with support for <strong>CloudKit sync</strong>, <strong>SwiftData</strong> persistence, and interactive <strong>widgets</strong>. Designed with UIKit and platform-specific enhancements like drag-and-drop, Spotlight integration, and keyboard shortcuts.",
    img: "imgPath",
    gitUrl: "https://github.com/Workfish2475/StickIt",
    languages: [swiftIcon],
    pageUrl: "https://workfish2475.github.io/stickit",
  },
  {
    id: 2,
    name: "C-Minus Compiler",
    desc: "A full-featured compiler for the C-Minus language, built using <strong>C</strong>, <strong>Lex</strong>, and <strong>Yacc</strong>. Implements complete <strong>lexical analysis</strong>, <strong>syntax parsing</strong>, <strong>semantic checking</strong>, and <strong>MIPS assembly code generation</strong>. Includes custom error handling and symbol table management, showcasing strong low-level and systems programming skills.",
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
