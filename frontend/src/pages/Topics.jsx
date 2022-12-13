import { Header, Navbar  } from "components"
  

export default function Topics() {

  const TopicLink = ({ topic }) => (
    <a
      target="_blank"
      href={topic.url}
      className="flex uppercase items-center justify-between text-base h-14 rounded-xl shadow text-gray-600 font-semibold px-5 py-2.5 dark:bg-gray-300 dark:hover:bg-amber-300 focus:outline-none dark:focus:ring-amber-400"
    >
      {topic.title}
      <img className="w-auto h-10 rounded-md" src={topic.logoUrl} />
    </a>
  );

  const topicLinks = [
  {
    title: "History of Computer",
    url:
    "https://www.toppr.com/guides/computer-aptitude-and-knowledge/basics-of-computers/history-of-computers/#:~:text=Early%20History%20of%20Computer,-Since%20the%20evolution&text=One%20of%20the%20earliest%20and,was%20a%20general%2Dpurpose%20computer",
    logoUrl: "../images/logo.png",
  },
  {
    title: "Data Science",
    url: "https://www.ibm.com/cloud/learn/data-science-introduction",
    logoUrl: "../images/logo.png",
  },
  {
    title: "Machine Learning",
    url: "https://www.ibm.com/cloud/learn/machine-learning",
    logoUrl: "../images/logo.png",
  },
  {
    title: "Introduction to Web Development",
    url: "https://www.theodinproject.com/lessons/foundations-introduction-to-web-development",
    logoUrl: "../images/logo.png",
  },
  {
    title: "Mobile Application Development",
    url: "https://www.ibm.com/cloud/learn/mobile-application-development-explained",
    logoUrl: "../images/logo.png",
  },
  {
    title: "Film 101",
    url: "https://www.masterclass.com/articles/film-101-what-is-cinematography-and-what-does-a-cinematographer-do",
    logoUrl: "../images/logo.png",
  },
  {
    title: "Natural Language Processing",
    url: "https://monkeylearn.com/blog/what-is-natural-language-processing/?fbclid=IwAR0oat74xjIG-oDZByCgQfBRfHmTjalvI5UScxI80573G7hZbcv_QC-XOs0",
    logoUrl: "../images/logo.png",
  },
  {
    title: "History of Programming Language",
    url: "https://devskiller.com/history-of-programming-languages/?fbclid=IwAR3vAmGyx6TndwXqQf4UOpKrqXkOSCklERazYnVfHyzDrYHYoJl4Min4-jY",
    logoUrl: "../images/logo.png",
  },
  {
    title: "Database",
    url: "https://www.computerscience.org/resources/computer-programming-languages/",
    logoUrl: "../images/logo.png",
  },
  {
    title: "Computer Languages",
    url: "https://appinventiv.com/blog/top-web-app-database-list/",
    logoUrl: "../images/logo.png",
  }
  ]

  return (
    <div className="grid-container bg-slate-50">
      <Header />
      <div className="m-auto h-full flex justify-between">
        <Navbar />
        <div className="flex w-full p-2 h-full justify-center bg-amber-200">
          <div className="flex flex-col mt-10 mb-10 gap-10 w-3/4 bg-white p-10 pr-20 pl-20 h-fit justify-between shadow-md rounded-xl">
            <div className="flex justify-evenly">
              <div className="w-full p-8">
                <ul className="flex flex-col gap-8">
                  {topicLinks.map((topic) => (
                    <TopicLink topic={topic} key={topic.title} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
