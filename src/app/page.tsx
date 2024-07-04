import Image from "next/image";
import One from "../../public/1.svg";
import Two from "../../public/2.svg";
import Three from "../../public/3.svg";
import Four from "../../public/4.svg";
import Five from "../../public/5.svg";
import Six from "../../public/6.svg";
import Seven from "../../public/7.svg";
import Eight from "../../public/8.svg";
import Nine from "../../public/9.svg";
import Ten from "../../public/10.svg";
import Eleven from "../../public/11.svg";
import Twelve from "../../public/12.svg";
import Avatar from "../../public/avatar.jpg";

const cards = [
  {
    image: "",
    title: "Break down silos between marketing, design, and development",
    description:
      "Give your marketing and design team greater control to add, edit, and update content and free your engineering team to focus on bigger challenges.",
  },
  {
    image: "",
    title: "Backed by enterprise-grade security",
    description:
      "Webflow Enterprise is backed by SOC-2 certification and comes with advanced security features like single sign on, custom security headers, custom SSL certificates, and much more.",
  },
  {
    image: "",
    title: "We’ll partner with you to ensure success",
    description:
      "Our sales and solutions team is here to help onboard your team, provide technical consulting on critical integrations, and connect you to Webflow Experts who can help you get up and running.",
  },
  {
    image: "",
    title: "Harness the power of code — without writing it",
    description:
      "Webflow’s visual development tool means you can build any layout for any page, visually, without having to write a single line of code.",
  },
  {
    image: "",
    title: "Publish directly to world-class hosting",
    description:
      "Push your website changes live in a single click to a scalable, secure, and globally-distributed hosting network.",
  },
  {
    image: "",
    title: "World-class performance",
    description:
      "Fast page loads powered by Fastly CDN and enterprise-level uptime SLAs make for seamless hosting.",
  },
];

const forms = [
  {
    name: "First Name",
    type: "text",
    placeholder: "Enter your first name",
  },
  {
    name: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
  },
  {
    name: "Business Email",
    type: "text",
    placeholder: "Enter your email",
  },
  {
    name: "Phone Number",
    type: "text",
    placeholder: "Enter phone number",
  },
  {
    name: "Company",
    type: "text",
    placeholder: "Where do you work?",
  },
];

const images = [
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven,
  Twelve,
];

export default function Home() {
  return (
    <main className="flex flex-col w-full text-black">
      <div className="flex w-full bg-white items-center justify-center">
        <div className="w-1/2 p-20">
          <h1 className="text-8xl font-semibold mb-5">
            Contact our sales team
          </h1>
          <p className="text-xl">
            Build better websites — faster — with the power of Webflow. Backed
            by advanced security, custom traffic scaling, guaranteed uptime, and
            much more.
          </p>
          <div className="grid grid-cols-3 gap-20 my-10">
            {images.map((item, index) => (
              <Image key={index} src={item} alt="" />
            ))}
          </div>
        </div>
        <div className="w-1/2 flex flex-col p-20">
          <div className="grid grid-cols-2 gap-10">
            {forms.map((item, index) => (
              <div key={index} className="border p-4">
                <h1 className="uppercase text-sm"> {item.name}</h1>
                <input
                  type={item.type}
                  className="bg-transparent"
                  placeholder={item.placeholder}
                />
              </div>
            ))}
            <div className="border p-4">
              <h1 className="uppercase text-sm">Company Size</h1>
              <select
                name=""
                id=""
                className="bg-transparent w-full p-2 border-none !important appearance-none !important"
              >
                <option value="">1-10</option>
                <option value="">11-50</option>
                <option value="">51-200</option>
                <option value="">201-500</option>
                <option value="">500+</option>
              </select>
            </div>
            <div className="border p-4">
              <h1 className="uppercase text-sm">Title</h1>
              <input
                type="text"
                className="bg-transparent"
                placeholder="What is your job title?"
              />
            </div>
            <div className="border p-4">
              <h1 className="uppercase text-sm">Country</h1>
              <select
                name=""
                id=""
                className="bg-transparent w-full p-2 border-none !important appearance-none !important"
              >
                <option value="">United States</option>
                <option value="">Canada</option>
                <option value="">Mexico</option>
                <option value="">Brazil</option>
                <option value="">Argentina</option>
              </select>
            </div>
            <div className="border p-4">
              <h1 className="uppercase text-sm">
                How can we best support you?
              </h1>
              <select
                name=""
                id=""
                className="bg-transparent w-full p-2 border-none !important appearance-none !important"
              >
                <option value="">1-10</option>
                <option value="">11-50</option>
                <option value="">51-200</option>
                <option value="">201-500</option>
                <option value="">500+</option>
              </select>
            </div>
          </div>
          <button className="bg-blue-500 w-1/4 rounded-md text-white font-semibold p-3 mt-5">
            Contact sales
          </button>
          <div className="bg-gray-700 h-[0.5px] w-full my-10"></div>
          <p>
            By submitting this form, you agree to Webflow’s Terms of Service and
            Privacy Policy.
          </p>
          <div className="bg-gray-500 h-[0.5px] w-full my-5"></div>
          <p>Looking for help with the product? Go to the help center</p>
        </div>
      </div>
      <div className="h-screen bg-white flex items-center justify-center">
        <div className="bg-stone-100 container flex flex-col">
          <div className="flex p-10">
            <div className="w-1/2 space-y-24 ">
              <Image src={Ten} width={100} height={100} alt="" />
              <div>
                <h1 className="text-9xl font-bold">3x</h1>
                <p className="text-2xl font-semibold">faster time to launch</p>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between space-y-20">
              <h1 className="text-2xl">
                “Our design and development teams are much more integrated
                during the build process. Designers have more autonomy, and
                engineers can focus on the most impactful work — allowing us to
                deliver new web pages faster.”
              </h1>
              <div className="flex items-center space-x-3">
                <Image
                  src={Avatar}
                  width={50}
                  height={50}
                  alt=""
                  className="rounded-full"
                />
                <div>
                  <h1 className="font-semibold">Daniel Dawson</h1>
                  <p>Senior Manager of Digital Properties, NCR</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-stone-200 p-5">
            <h1 className="text-center text-lg">Read customer story </h1>
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-gray-100 w-full"></div>
      <div className="bg-white flex flex-col p-20 justify-center ">
        <h1 className="text-8xl font-semibold mb-10">Why choose Webflow?</h1>
        <div className="grid grid-cols-3 gap-20">
          {cards.map((item, index) => (
            <div key={index} className="">
              <Image src="/images/icon-1.png" width={50} height={50} alt="" />
              <h1 className="text-2xl font-semibold mb-8">{item.title}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
