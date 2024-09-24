import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import googleplay from "../../assets/googleplay.png";
import appstore from "../../assets/appstore.png";
import envanto from "../../assets/envanto.png";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href="https://play.google.com/store/apps/details?id=com.multipz.gpbo&hl=enIN"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3>GPBO : Global Patidar Business Organization</h3>
              <p>
                {" "}
                Developed a business and social networking React Native app
                designed to connect professionals and entrepreneurs. The app
                enables users to build networks, collaborate, sharing business
                internal wing wise, social media activities like social post ,
                stories upload and share insights, fostering both business
                growth and social interaction{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>PayUMoney</li> <li>API Integration</li> <li>Google Map</li>
                <li>Media Picker</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href="https://play.google.com/store/apps/details?id=com.sose.main&hl=en-IN"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3>SOSE : Sidha Kishan Se</h3>
              <p>
                {" "}
                Developed An organic product selling React Native app integrated
                with a Python-based ERP backend for seamless inventory and order
                management. The app provides users with a smooth shopping
                experience, connecting them to a variety of organic products.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Python Backend</li> <li>PayUMoney Payment</li>
                <li>Firebase</li> <li>API Integration</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href="https://play.google.com/store/apps/details?id=com.ommart&hl=en-IN"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3>Om Mart : B2B Vendor Distribution Channel App</h3>
              <p>
                {" "}
                Developed A B2B vendor distribution channel app built using
                React Native and Redux Toolkit for efficient state management.
                The app enhances vendor operations, streamlining inventory
                control, different login roles like distributor, dealer, ASM,
                area sales manager ordering feature with incentives and order
                processing for businesses.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>RazorPay</li> <li>SMS Gateway</li>
                <li>Firebase</li> <li>API Integration</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href="https://play.google.com/store/apps/details?id=com.indiainfluencer.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                {/* <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>
                Influenstar: Marketing, Business Promotion and hire influencer
                App
              </h3>
              <p>
                {" "}
                A marketing, business promotion, and influencer hiring platform
                that allows users or business owners or different influencer to
                send connect requests and engage through chat, developed using
                React Native, Redux Toolkit, and TypeScript. The app streamlines
                influencer collaborations to enhance brand promotion.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Chat</li> <li>Firebase</li>
                <li>Redux-Toolkit</li> <li>Media picker</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href="https://play.google.com/store/apps/details?id=com.rizbook&hl=en-IN"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3>RizBook: Service provider and service booking App</h3>
              <p>
                {" "}
                A service provider and service booking app developed using React
                Native, Redux Toolkit, and TypeScript. The app offers seamless
                booking functionality, near by services listing, appointment
                slot booking with date and time availability, booking history,
                booking status tracking, notifications connecting users with
                various service providers efficiently.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Stripe</li> <li>Google Map</li>
                <li>Redux-Toolkit</li> <li>TypeScript</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                <a
                  // href="https://github.com/CodeVinayak/Serverless-Voting-Application"
                  href="https://play.google.com/store/apps/details?id=com.vuub&hl=en-IN"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3>VuuB Memo: Story reel create and social media App</h3>
              <p>
                {" "}
                A story reel creation and social media app built with React
                Native, Redux Toolkit, and TypeScript. The app allows users to
                create, share, chat each other,follow and engage with dynamic
                story reels on a social platform.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Chat</li> <li>Firebase</li>
                <li>Redux-Toolkit</li> <li>Media picker</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              <div className="project-links">
                <a
                  href="https://codecanyon.net/item/restorder-android-a-single-restaurant-food-ordering-app/22900313"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={envanto}
                    alt="Visit site"
                    style={{
                      width: 80,
                      height: 40,
                      borderRadius: 20
                    }}
                  />
                </a>
                {/* <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>
                RestOrder (Product App): Restaurant Online Food Order
                Application
              </h3>
              <p>
                {" "}
                An online food ordering app developed in Android Native using
                Java and XML for the user interface. App is uploaded on the
                envanto market, codecenyon platform for project selling purpose.
                The app provides users with a seamless food ordering experience,
                from browsing menus to placing orders. Menu categories, Sub
                Categories, Add to cart, cart list, order history, order
                tracking status of order arrivals, payment options, Google
                AdMob, Banner , Interstitial Video Ads are integrated in this
                app.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>OneSignal</li> <li>Google AdsMob</li>
                <li>RazorPay</li> <li>Cart</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg> */}
              {/* <div className="project-links">
                <a
                  // href="https://play.google.com/store/apps/details?id=com.vuub&hl=en-IN"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "}
              </div> */}
            </header>
            <div className="body">
              <h3>
                Yuhuu TeleCaller App: One-to-one Video and Audio calling App{" "}
              </h3>
              <p>
                {" "}
                A one-to-one video and audio calling app developed in Android
                Native using Java and XML UI, leveraging the Agora SDK for
                real-time communication. The app provides high-quality audio and
                video interactions, enhancing connectivity between users. User
                can add money through Razorpay in the in-app Wallet and make
                call with users. This app is developed for the client as a
                product and personal usage.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Agora SDK</li> <li>Google AdsMob</li>
                <li>RazorPay</li> <li>Notification</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <div className="project-links">
                <a
                  // href="https://play.google.com/store/apps/details?id=com.vuub&hl=en-IN"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={googleplay}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>
                <a
                  href="https://vote.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Visit site"
                    style={{ width: 35, height: 35 }}
                  />
                </a>{" "}
              </div> */}
            </header>
            <div className="body">
              <h3>
                IoT App for Car Sensors Analysis: Using ESP32 Wifi-BT Chip
                Device
              </h3>
              <p>
                {" "}
                An Android Native app developed for analyzing car sensor data
                using the ESP32 WiFi-BT chip. The app enables users to monitor
                real-time sensor information, providing insights into vehicle
                performance and diagnostics. It facilitates data visualization
                and alerts for improved vehicle maintenance and safety. Using
                Arduino IDE and ESP32 device with Wifi- BT connection, app has
                been tested. This app was developed as a product for one of the
                US Client requirement.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>ESP32</li> <li>Arduino</li>
                <li>Wifi-BT data transfer</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/CodeVinayak/AI-Chatbot-Assistant"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />{" "}
                </a>
                <a
                  href="https://ai-chatbot-t8fn.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>GeniusBot: AI-Powered Assistance with PDF Insight</h3>
              <p>
                Developed an interactive chatbot application using Streamlit,
                OpenAI's GPT-3.5-turbo language model, and PyPDF2 for PDF text
                extraction, enabling users to ask context-based questions on
                uploaded PDFs and general queries.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Streamlit</li>
                <li>PyPDF2</li>
                <li>LangChain</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://github.com/CodeVinayak/Jupyter-Notebook/blob/main/Credit%20Risk%20Analysis/Credit_Risk_Analysis.ipynb"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Credit Risk Analysis Project</h3>
              <p>
                Developed a highly accurate credit risk classification model
                using XGBoost, achieving 100% precision, recall, and F1-scores
                for predicting loan defaults.Implemented rigorous data
                preprocessing, feature engineering, and hyperparameter tuning on
                imbalanced credit risk data, employing ensemble methods,
                cross-validation, and model interpretation techniques.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>XGBoost</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/CodeVinayak/MediBook-Medical-Appointment-Scheduler-with-Health-History"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://medibook.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>
                MediBook: Medical Appointment Scheduler with Health History
              </h3>
              <p>
                Developed a secure medical appointment management platform with
                CRUD functionality, utilizing role-based access control,
                encryption techniques, and a robust MySQL database with
                normalized schema design and stored procedures for efficient
                scheduling, data privacy, and reliable retrieval of patient
                records.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/CodeVinayak/Real-Time-Hand-Gesture-Driven-3D-Object-Manipulation"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://youtu.be/NOm-3MynPLE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Real-Time Hand Gesture-Driven 3D Object Manipulation</h3>
              <p>
                Developed a real-time hand gesture recognition system for
                intuitive 3D object manipulation. Leveraged a multimodal
                approach integrating OpenCV for video processing, MediaPipe for
                hand detection/landmark extraction, and scikit-learn for machine
                learning model training. Achieved 95.2% accuracy in hand gesture
                classification with efficient real-time performance.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>OpenCV</li>
                <li>MediaPipe</li>
                <li>scikit-learn</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://velocityai.vinayaksingh.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>VeloCityAI</h3>
              <p>
                VelocityAI is a website that allows users to get instant answers
                to any question and generate stunning AI pictures using OpenAI's
                GPT-3 and DALL-E model.With VelocityAI, users can type in
                text-based prompts and receive a corresponding response.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://justmedicalbooks.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MedicalBooks - Book Selling Site</h3>
              <p>
                This website sells medical books online and is popular with medical students. Medical students use it to buy books and acquire knowledge. The site has all kinds of medical books in one place.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://drrohitdamor.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dr.Rohit Damor - Online Appointment Booking Site</h3>
              <p>
                This website allows people to easily book appointments with you online. It takes just a minute to schedule a meeting. This kind of site is helpful for booking appointments and not missing any potential clients. You should try this website to see how convenient and efficient it is.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
                This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MadeWithLuv - HomeDecor Site</h3>
              <p>
                This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
      </div>
    </Container>
  );
}
