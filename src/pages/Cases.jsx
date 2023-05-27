import React from "react";
import { downloadFile, filterSvg } from "../assets/iconsSvg";
import CasesRow from "../components/Cases/CasesRow";

const casesData = [
  {
    id: "1",
    caseName: "Case name 1",
    caseTitle: "",
    reference: "1085995-W",
    status: "Active",
    priority: 1,
    createdOn: "23-05-2023",
    description:
      "You are responsible for operations, service, or customer support and face challenges trying to communicate complex procedures to a global market effectively. Traditional methods don’t work and are laborious, costly and error prone.",
    updates: [
      {
        updateFrom: "Update from ikiru",
        messageTitle: "We have tried to solve the issue",
        message: "",
        time: "17 May, 2023, 17:56 ",
        files: ["attatchment.jpg"],
      },
      {
        updateFrom: "Me",
        messageTitle: "We have tried to solve the issue",
        message: "",
        time: "17 May, 2023, 17:56 ",
        files: ["attatchment.jpg"],
      },
      {
        updateFrom: "Me",
        messageTitle: "The screen are still crashing in my side.",
        message:
          "You are responsible for operations, service, or customer support and face challenges trying to communicate complex procedures to a global market effectively. Traditional methods don’t work and are laborious, costly and error prone.",
        time: "17 May, 2023, 17:56 ",
        files: ["attatchment.jpg"],
      },
    ],
  },
  {
    id: "2",
    caseName: "Case name 2",
    caseTitle: "",
    reference: "1085995-W",
    status: "Active",
    priority: 2,
    createdOn: "23-05-2023",
    description:
      "You are responsible for operations, service, or customer support and face challenges trying to communicate complex procedures to a global market effectively. Traditional methods don’t work and are laborious, costly and error prone.",
    updates: [
      {
        updateFrom: "Update from ikiru",
        messageTitle: "We have tried to solve the issue",
        message: "",
        time: "17 May, 2023, 17:56 ",
        files: ["attatchment.jpg"],
      },
      {
        updateFrom: "Me",
        messageTitle: "We have tried to solve the issue",
        message: "",
        time: "17 May, 2023, 17:56 ",
        files: ["attatchment.jpg"],
      },
      {
        updateFrom: "Me",
        messageTitle: "The screen are still crashing in my side.",
        message:
          "You are responsible for operations, service, or customer support and face challenges trying to communicate complex procedures to a global market effectively. Traditional methods don’t work and are laborious, costly and error prone.",
        time: "17 May, 2023, 17:56 ",
        files: ["attatchment.jpg"],
      },
    ],
  },
  {
    id: "3",
    caseName: "Case name 3",
    caseTitle: "",
    reference: "1085995-W",
    status: "Active",
    priority: 4,
    createdOn: "23-05-2023",
    description:
      "You are responsible for operations, service, or customer support and face challenges trying to communicate complex procedures to a global market effectively. Traditional methods don’t work and are laborious, costly and error prone.",
    updates: [
      {
        updateFrom: "Update from ikiru",
        messageTitle: "We have tried to solve the issue",
        message: "",
        time: "17 May, 2023, 17:56 ",
        files: ["attatchment.jpg"],
      },
      {
        updateFrom: "Me",
        messageTitle: "We have tried to solve the issue",
        message: "",
        time: "17 May, 2023, 17:56 ",
        files: ["attatchment.jpg"],
      },
      {
        updateFrom: "Me",
        messageTitle: "The screen are still crashing in my side.",
        message:
          "You are responsible for operations, service, or customer support and face challenges trying to communicate complex procedures to a global market effectively. Traditional methods don’t work and are laborious, costly and error prone.",
        time: "17 May, 2023, 17:56 ",
        files: ["attatchment.jpg"],
      },
    ],
  },
  {
    id: "4",
    caseName: "Case name 4",
    caseTitle: "",
    reference: "1085995-W",
    status: "Resolved",
    priority: 4,
    createdOn: "23-05-2023",
    description:
      "You are responsible for operations, service, or customer support and face challenges trying to communicate complex procedures to a global market effectively. Traditional methods don’t work and are laborious, costly and error prone.",
    updates: [
      {
        updateFrom: "Update from ikiru",
        messageTitle: "We have tried to solve the issue",
        message: "",
        time: "17 May, 2023, 17:56 ",
        files: ["attatchment.jpg"],
      },
      {
        updateFrom: "Me",
        messageTitle: "We have tried to solve the issue",
        message: "",
        time: "17 May, 2023, 17:56 ",
        files: ["attatchment.jpg"],
      },
      {
        updateFrom: "Me",
        messageTitle: "The screen are still crashing in my side.",
        message:
          "You are responsible for operations, service, or customer support and face challenges trying to communicate complex procedures to a global market effectively. Traditional methods don’t work and are laborious, costly and error prone.",
        time: "17 May, 2023, 17:56 ",
        files: ["attatchment.jpg"],
      },
    ],
  },
  {
    id: "5",
    caseName: "Case name 5",
    caseTitle: "",
    reference: "1085995-W",
    status: "Resolved",
    priority: 3,
    createdOn: "23-05-2023",
    description:
      "You are responsible for operations, service, or customer support and face challenges trying to communicate complex procedures to a global market effectively. Traditional methods don’t work and are laborious, costly and error prone.",
    updates: [
      {
        updateFrom: "Update from ikiru",
        messageTitle: "We have tried to solve the issue",
        message: "",
        time: "17 May, 2023, 17:56 ",
        files: ["attatchment.jpg"],
      },
      {
        updateFrom: "Me",
        messageTitle: "We have tried to solve the issue",
        message: "",
        time: "17 May, 2023, 17:56 ",
        files: ["attatchment.jpg"],
      },
      {
        updateFrom: "Me",
        messageTitle: "The screen are still crashing in my side.",
        message:
          "You are responsible for operations, service, or customer support and face challenges trying to communicate complex procedures to a global market effectively. Traditional methods don’t work and are laborious, costly and error prone.",
        time: "17 May, 2023, 17:56 ",
        files: ["attatchment.jpg"],
      },
    ],
  },
];

const Cases = () => {
  return (
    <div className="p-[32px] ">
      <div>
        <div className="mb-6 flex justify-between items-start">
          <p className="font-bold text-[24px] ">Create Case</p>
          <div className="flex justify-center items-center gap-3">
            <button className="btn  w-[48px] h-[48px] p-1 bg-white">
              {filterSvg}
            </button>
            <button
              type=""
              className="btn btn-primary text-[14px] normal-case gap-2 lg:w-[212px] sm:w-auto"
            >
              {downloadFile}
              <p> Download ISL Client</p>
            </button>
          </div>
        </div>

        <div className="p-8 bg-white rounded-xl">
          <div className="overflow-x-auto">
            <div className="grid grid-cols-5 justify-center items-center lg:min-w-[1026px] sm:min-w-[700px]">
              <p className="text-[12px] text-info font-[Manrope] uppercase">
                TITLE
              </p>
              <p className="text-[12px] text-info font-[Manrope] uppercase">
                REFERENCE
              </p>
              <p className="text-[12px] text-info font-[Manrope] uppercase">
                STATUS
              </p>
              <p className="text-[12px] text-info font-[Manrope] uppercase">
                PRIORITY
              </p>
              <p className="text-[12px] text-info font-[Manrope] uppercase">
                CREATED ON
              </p>
              <p></p>
            </div>
            <div className="border-b my-6 lg:min-w-[1026px] sm:min-w-[700px]"></div>

            <div>
              {casesData.map((x, index) => {
                return (
                  <CasesRow
                    x={x}
                    len={casesData.length}
                    index={index}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-[24px]">
          <div></div>
          <div>
            <div className="btn-group">
              <button className="btn">1</button>
              <button className="btn">2</button>
              <button className="btn btn-disabled">...</button>
              <button className="btn">99</button>
              <button className="btn">100</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
