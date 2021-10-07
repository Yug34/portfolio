import allbotImg from "./images/Projects/discord-small.png";
import covidImg from "./images/Projects/coronavirus.png";
import seamlessImg from "./images/Projects/volume.png";
import portfolioGenImg from "./images/Projects/portfolioGen.png";

const userDetails = {
  projectList: [
    {
      name: "AllBOT",
      keywords: ["All", "BOT"],
      image: allbotImg,
      description: [
        "Discord bot written in Node.js",
        "Stream music from YouTube",
        "Currency system with Mongoose",
        "..and a shop too!",
        "Snarky.",
        "Kanye quotes in case you need them",
        "Aren't you sold already?",
      ],
      link: "https://github.com/Yug34/allBOT",
    },
    {
      name: "CoviDetect",
      keywords: ["COV", "Detect"],
      image: covidImg,
      description: [
        "Made a DNN off ResNet50v2 to classify X-rays of human lungs into normal, pneumonia and covid cases.",
        "~94.5% accuracy on the validation set",
        "... and ~96.6 on the test set!",
        "Oh and only 0.78% false negatives.",
        "And hey, this project also won our team the IBM innovation camp 2021.",
      ],
      link: "https://github.com/Yug34/cov-detect",
    },
    {
      name: "Seamless",
      keywords: ["Music", "Player"],
      image: seamlessImg,
      description: ["Soon ^-^"],
    },
    {
      name: "PortfolioGen",
      image: portfolioGenImg,
      description: [
        "React.js web application that takes user data as input",
        "Stores data as a JSON object",
        "Produces a website as output from the JSON",
        "Output website is a react app, hostable on gh pages",
        "...which basically this site, just less personalised.",
      ],
    },
    {
      name: "CSVQL",
      image: allbotImg,
      description: [
        "React.js web application to make SQL queries against CSV (and other) files.",
        "Used AlaSQL.js to download, store, and operate on data stored in client's memory.",
        "Has functionality to upload CSV files directly from client's system",
        "..or fetch through an external link",
        "..or even just type in data as input and operate on that.",
        "Ability to download data and the queried results directly to PC as a CSV file, neat!",
        "And the best part, this is all client-side, magic! :)",
      ],
      link: "https://github.com/Yug34/sql-csv-editor",
    },
  ],
  nameTitles: [
    "Software Engineer",
    "Student Researcher",
    "<i class='greentext'>Future colleague of yours maybe?</i>",
    "Machine Learning guy",
    "Open sourcerer",
  ],
};

export default userDetails;
