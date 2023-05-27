import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PriorityBtnGenarator from "../components/PriorityBtnGenarator";
import StatusBtnGenarator from "../components/StatusBtnGenarator";
import ChatMessageRecieved from "../components/CaseUpdate/ChatMessageRecieved";
import ChatMessageSent from "../components/CaseUpdate/ChatMessageSent";
import attactmentPictureSample from "../assets/CaseUpdate/attactment.png";

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

const CaseUpdate = () => {
  const location = useLocation();
  const [caseUpdate, setCaseUpdate] = useState({});

  useEffect(() => {
    let id = location?.search?.split("=")[1];
    let cu = casesData.find((x) => x.id === id);
    setCaseUpdate(cu);
  }, [location]);

  console.log(caseUpdate?.updates);

  return (
    <div className="p-[32px]">
      <div>
        <div className="rounded-xl bg-white p-8">
          <div className="flex lg:flex-row sm:flex-col gap-4 justify-between items-start">
            {/* TITLE REF  */}
            <div>
              <p className="text-[16px] font-semibold">
                {caseUpdate?.caseTitle}
              </p>
              <div className="flex gap-4 text-[14px] text-info font-[Manrope] mt-2">
                <p>Reference : {caseUpdate?.reference}</p>
                <p>• Created on : {caseUpdate?.createdOn}</p>
              </div>
            </div>

            {/* PRIORITY BUTTONS & STATUS */}

            <div className="flex gap-4">
              <PriorityBtnGenarator priority={caseUpdate.priority} />
              <StatusBtnGenarator status={caseUpdate.status} />
            </div>
          </div>
          <div className="mt-8">
            <p className="text-[14px] font-semibold">Description</p>
            <p className="text-[14px] text-info font-[Manrope] mt-2">
              {caseUpdate?.description}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-white p-8 mt-10">
          {/* CASE UPDATE INFO AND ADD UPDATE BTN */}
          <div className="flex  justify-between items-center">
            <div>
              <p className="text-[16px] font-semibold">Case Updates</p>
              <p className="text-primary text-[14px] font-[Manrope] font-medium ">
                Total {caseUpdate?.updates?.length} updates
              </p>
            </div>
            <button className="px-4 py-1.5 text-[14px] font-semibold bg-primary text-white rounded-lg ">
              Add Update
            </button>
          </div>

          {/* UPDATE */}
          <div className="bg-accent lg:p-8 sm:p-2 rounded-xl mt-8 min-h-[406px] max-h-[700px] overflow-y-scroll">
            {caseUpdate?.updates?.length === 0 ? (
              <div className="h-[365px] w-full flex justify-center items-center">
                <p className="text-[20px] font-medium">No Updates</p>
              </div>
            ) : (
              <div>
                {caseUpdate?.updates?.map((x, index) => {
                  return x?.updateFrom == "" ? (
                    <ChatMessageSent x={x} key={index} />
                  ) : (
                    <ChatMessageRecieved x={x} key={index} />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseUpdate;
