import React from "react";
import HomePortals from "../components/Home/HomePortals";
import RecentCasesTableRow from "../components/Home/RecentCasesTableRow";
import WebminarTableRow from "../components/Home/WebminarTableRow";
import RequestTraining from "../components/Home/RequestTraining";

import icon1 from "../assets/Home/create_new_folder.svg";
import icon2 from "../assets/Home/model_training.svg";
import icon3 from "../assets/Home/support_agent.svg";
import icon4 from "../assets/Home/query_builder.svg";

import fill_icon1 from "../assets/Home/create_new_folder_fill.svg";
import fill_icon2 from "../assets/Home/people_alt_fill.svg";
import fill_icon3 from "../assets/Home/model_training_fill.svg";
import fill_icon4 from "../assets/Home/link_fill.svg";

const HomePortalInfo = [
  {
    icon: icon1,
    title: "Create Support Case",
    subtitle: "Register new case",
    nav: "",
  },
  {
    icon: icon2,
    title: "Request Training",
    subtitle: "Register new Training",
    nav: "",
  },
  {
    icon: icon3,
    title: "Contact Client Success",
    subtitle: "It allows to schedule meeting",
    nav: "",
  },
  {
    icon: icon4,
    title: "Finance Query",
    subtitle: "Ask Question",
    nav: "",
  },
];

const dataSampleCaseAndWebMinar = [
  {
    name: "Holiday Travel Safety Tips",
    status: "Active",
    priority: 3,
    date: "2020-08-08",
  },
  {
    name: "How to Save Money on Baby Essentials",
    status: "Active",
    priority: 3,
    date: "2020-08-08",
  },
  {
    name: "Back to School at Home – Tips for Parents",
    status: "Active",
    priority: 1,
    date: "2020-08-08",
  },
  {
    name: "Kids Fall Fashion Tips with Wendy Lam",
    status: "Resolved",
    priority: null,
    date: "2020-08-08",
  },
];

const dataSampleReqTraining = [
  {
    name: "Learn the new interface",
    reqDate: "26 May, 2023",
    acc: { date: "24 May, 2023", time: "05:00 GMT +6" },
    join: 1,
  },
  {
    name: "Learn the support access",
    reqDate: "24 May, 2023",
    acc: null,
    join: 0,
  },
];

const TableHeader = ({ icon, title, btnName, btnFunc }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-2">
        <img width={20} height={20} src={icon} alt="icon" />
        <p className="font-bold">{title}</p>
      </div>
      <button className="text-primary text-sm">{btnName}</button>
    </div>
  );
};

const Home = () => {
  return (
    <div className="p-[32px] ">
      <div>
        <p className="font-bold text-2xl mb-12">
          Welcome to the Ikiru People customer portal
        </p>

        <div className="mb-12 grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 justify-between items-start gap-5">
          {HomePortalInfo.map((x) => {
            return <HomePortals props={x} />;
          })}
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-x-[24px] gap-y-[32px] justify-start items-start">
          <div className="w-abc p-4 bg-white rounded-xl shadow">
            <TableHeader
              icon={fill_icon1}
              title="Recent Cases"
              btnName="View all cases"
              btnFunc=""
            />
            <div className="overflow-x-auto">
              <table className="table table-compact  w-full mt-[26px]">
                <tbody>
                  <tr>
                    <td className="text-sm text-gray-500">CASE NAME</td>
                    <td className="text-sm text-gray-500">STATUS</td>
                    <td className="text-sm text-gray-500">PRIORITY</td>
                  </tr>
                  <tr></tr>
                </tbody>
                {dataSampleCaseAndWebMinar.map((x) => {
                  return <RecentCasesTableRow x={x} />;
                })}
              </table>
            </div>
          </div>
          <div className="w-abc p-4 bg-white rounded-xl shadow">
            <TableHeader
              icon={fill_icon2}
              title="Webinars"
              btnName="View all"
              btnFunc=""
            />
            <div className="overflow-x-auto">
              <table className="table table-compact  w-full mt-[26px]">
                <tbody>
                  <tr>
                    <td className="text-sm text-gray-500">NAME</td>
                    <td className="text-sm text-gray-500">DATE</td>
                    <td></td>
                  </tr>
                  <tr></tr>
                </tbody>
                {dataSampleCaseAndWebMinar.map((x) => {
                  return <WebminarTableRow x={x} />;
                })}
              </table>
            </div>
          </div>
          <div className="w-abc p-4 bg-white rounded-xl shadow ">
            <TableHeader
              icon={fill_icon3}
              title="Requested Training"
              btnName="View all"
              btnFunc=""
            />

            <div className="overflow-x-auto">
              <table className="table table-compact  w-full mt-[26px] ">
                <tbody>
                  <tr>
                    <td className="text-sm text-gray-500">
                      PURPOSE & REQUEST TIME
                    </td>
                    <td className="text-sm text-gray-500">Date & Time</td>
                    <td></td>
                  </tr>
                  <tr></tr>
                </tbody>
                {dataSampleReqTraining.map((x) => {
                  return <RequestTraining x={x} />;
                })}
              </table>
            </div>
          </div>

          <div className="w-abc p-4 bg-white rounded-xl shadow">
            <TableHeader
              icon={fill_icon4}
              title="Useful links"
              btnName="View all"
              btnFunc=""
            />
            <div className="overflow-x-auto">
              <table className="table table-compact  w-full mt-[26px] ">
                <tbody>
                  <tr>
                    <td className="text-sm text-gray-500">List</td>

                    <td></td>
                  </tr>
                  <tr></tr>
                </tbody>
                {dataSampleCaseAndWebMinar.map((x) => {
                  return (
                    <tr>
                      <td>{x?.name}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// Developed By
// Md.Shefat Zeon
// 2023-05-23
