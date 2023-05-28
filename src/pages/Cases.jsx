import React from "react";
import { downloadFile, filterSvg } from "../assets/iconsSvg";
import CasesRow from "../components/Cases/CasesRow";
import attactmentPictureSample from "../assets/CaseUpdate/attactment.png";
import CasesFilter from "../components/Cases/CasesFilter";
import SearchBox from "../components/Cases/SearchBox";

const casesData = [
  {
    id: "1",
    caseName: "Case name 1",
    caseTitle: "The software is making crash whenever I am creating a new case",
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
        files: [attactmentPictureSample, attactmentPictureSample],
      },
      {
        updateFrom: "",
        messageTitle: "We have tried to solve the issue",
        message: "",
        time: "17 May, 2023, 17:56 ",
        files: [attactmentPictureSample],
      },
      {
        updateFrom: "",
        messageTitle: "The screen are still crashing in my side.",
        message:
          "You are responsible for operations, service, or customer support and face challenges trying to communicate complex procedures to a global market effectively. Traditional methods don’t work and are laborious, costly and error prone.",
        time: "17 May, 2023, 17:56 ",
        files: [attactmentPictureSample],
      },
    ],
  },
  {
    id: "2",
    caseName: "Case name 2",
    caseTitle: "The software is making crash whenever I am creating a new case",
    reference: "1085995-W",
    status: "Active",
    priority: 2,
    createdOn: "23-05-2023",
    description:
      "You are responsible for operations, service, or customer support and face challenges trying to communicate complex procedures to a global market effectively. Traditional methods don’t work and are laborious, costly and error prone.",
    updates: [],
  },
  {
    id: "3",
    caseName: "Case name 3",
    caseTitle: "The software is making crash whenever I am creating a new case",
    reference: "1085995-W",
    status: "Active",
    priority: 4,
    createdOn: "23-05-2023",
    description:
      "You are responsible for operations, service, or customer support and face challenges trying to communicate complex procedures to a global market effectively. Traditional methods don’t work and are laborious, costly and error prone.",
    updates: [],
  },
  {
    id: "4",
    caseName: "Case name 4",
    caseTitle: "The software is making crash whenever I am creating a new case",
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
        files: [attactmentPictureSample],
      },
      {
        updateFrom: "",
        messageTitle: "We have tried to solve the issue",
        message: "",
        time: "17 May, 2023, 17:56 ",
        files: [attactmentPictureSample],
      },
      {
        updateFrom: "",
        messageTitle: "The screen are still crashing in my side.",
        message:
          "You are responsible for operations, service, or customer support and face challenges trying to communicate complex procedures to a global market effectively. Traditional methods don’t work and are laborious, costly and error prone.",
        time: "17 May, 2023, 17:56 ",
        files: [attactmentPictureSample],
      },
    ],
  },
  {
    id: "5",
    caseName: "Case name 5",
    caseTitle: "The software is making crash whenever I am creating a new case",
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
        files: [attactmentPictureSample],
      },
      {
        updateFrom: "",
        messageTitle: "We have tried to solve the issue",
        message: "",
        time: "17 May, 2023, 17:56 ",
        files: [attactmentPictureSample],
      },
      {
        updateFrom: "",
        messageTitle: "The screen are still crashing in my side.",
        message:
          "You are responsible for operations, service, or customer support and face challenges trying to communicate complex procedures to a global market effectively. Traditional methods don’t work and are laborious, costly and error prone.",
        time: "17 May, 2023, 17:56 ",
        files: [attactmentPictureSample],
      },
    ],
  },
];
const Cases = () => {
  return (
    <div className="p-[32px] mx-auto max-w-[1190px] h-full">
      <div>
        <div className="mb-6 flex lg:flex-row sm:flex-col gap-2 justify-between items-start">
          <p className="font-bold text-[24px]">Cases</p>
          <div className="flex flex-wrap  items-center gap-3">
            {/* SEARCH */}
            <SearchBox />
            {/* FILTER*/}
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn m-1  w-[48px] h-[48px] p-1 bg-white"
              >
                {filterSvg}
              </label>
              <CasesFilter />
            </div>
            {/* DOWNLOAD BTN */}
            <button
              type=""
              className="btn btn-primary text-[14px] normal-case gap-2 lg:w-[212px] sm:w-auto text-white "
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
