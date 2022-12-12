import { Header, Navbar } from "components";

export default function AboutUs() {
  return (
    <div className="grid-container w-screen h-full bg-slate-50  ">
      <Header />
      <div className="m-auto h-full flex justify-between">
        <Navbar />
        <div className="flex m-0  justify-center w-full h-full bg-amber-200  ">
          <div className="flex flex-col mt-10 mb-10 gap-10 w-3/4 bg-white p-10 pr-20 pl-20 h-fit justify-between shadow-md rounded-xl">
            <div className="flex flex-col space-y-2 bg-white shadow-sm p-4 border rounded-xl opacity-80">
              <h1 className="font-bold bg-gray-200 p-2 rounded-md">ABOUT US</h1>
              <span className="p-3">
                {" "}
                Study Buddy is a web application that uses natural language
                processing to help students study more effectively. It can be
                used for reviewing for exams or for general self-improvement.
                The app provides immediate feedback on answers, allowing users
                to improve their studying. Some students prefer to study alone
                while others prefer to study in groups. Study Buddy can help
                both types of students improve their performance.{" "}
              </span>
            </div>

            <div className="flex flex-col space-y-2 bg-white shadow-sm p-4 border rounded-xl opacity-80">
              <h1 className="font-bold bg-gray-200 p-2 rounded-md">FAQ’s</h1>
              <div className="p-3 flex flex-col gap-3">
                <div>
                  <h3 className="font-semibold">1. What is Study Buddy? </h3>
                  <ul className="flex items-baseline gap-2 pl-5">
                    <li>
                      <div className="w-2 h-2 bg-black rounded-full justify-self-start"></div>
                    </li>
                    <li>
                      <span>
                        Study Buddy is a web app that can help you review alone
                        without study partner.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">
                    2. How does Study Buddy Work?{" "}
                  </h3>
                  <ul className="flex items-baseline gap-2 pl-5">
                    <li>
                      <div className="w-2 h-2 bg-black rounded-full justify-self-start"></div>
                    </li>
                    <li>
                      {" "}
                      <span>
                        Study Buddy is fine-tune from T5 model, a language model
                        that trained to produce text.
                      </span>
                    </li>
                  </ul>
                  <ul className="flex items-baseline gap-2 pl-5">
                    <li>
                      <div className="w-2 h-2 bg-black rounded-full justify-self-start"></div>
                    </li>
                    <li>
                      {" "}
                      <span>
                        {" "}
                        It was optimized to produce question to later on answer
                        by a user using T5 model or text-to-text transform
                        transformer.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">3. Can I see my history? </h3>
                  <ul className="flex items-baseline gap-2 pl-5">
                    <li>
                      <div className="w-2 h-2 bg-black rounded-full justify-self-start"></div>
                    </li>
                    <li>
                      <span>
                        You can see your history on the history page and review
                        your progress afterwards.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-1 bg-white shadow-sm p-4 border rounded-xl opacity-80">
              <h1 className="font-bold bg-gray-200 p-2 rounded-md">
                FOR MORE INFO CONTACT US:
              </h1>
              <ul className="flex items-baseline gap-2 pl-5">
                <li>
                  <div className="w-2 h-2 bg-black rounded-full justify-self-start"></div>
                </li>
                <li>
                  <span>deo.dangaran@students.isatu.edu.ph</span>
                </li>
              </ul>
              <ul className="flex items-baseline gap-2 pl-5">
                <li>
                  <div className="w-2 h-2 bg-black rounded-full justify-self-start"></div>
                </li>
                <li>
                  <span>jordiadelacruz8@gmail.com </span>
                </li>
              </ul>
              <ul className="flex items-baseline gap-2 pl-5">
                <li>
                  <div className="w-2 h-2 bg-black rounded-full justify-self-start"></div>
                </li>
                <li>
                  <span>serranoriajaphne@gmail.com </span>
                </li>
              </ul>
              <ul className="flex items-baseline gap-2 pl-5">
                <li>
                  <div className="w-2 h-2 bg-black rounded-full justify-self-start"></div>
                </li>
                <li>
                  <span>paulyn.nocidad@students.isatu.edu.ph</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
