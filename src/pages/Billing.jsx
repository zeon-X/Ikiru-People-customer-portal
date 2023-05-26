import React, { useState } from "react";
import BillingBtn from "../components/Billing/BillingBtn";

const billingButtonsInfo = [
  {
    name: "FFAnyWhere",
    id: 1,
  },
  {
    name: "Infinity",
    id: 2,
  },
  {
    name: "Mid Journey",
    id: 3,
  },
];

const Billing = () => {
  const [activeBtnNo, setActiveBtnNo] = useState(1);
  return (
    <div className=" ">
      <div>
        <div className="w-full bg-white p-[32px]">
          <p className="font-bold text-[24px] ">Billing</p>

          {/* BULLING BUTTONS */}
          <div className="mt-[29px] grid lg:grid-cols-4 sm:grid-cols-3 gap-6">
            {billingButtonsInfo.map((x, index) => {
              return (
                <BillingBtn
                  key={x?.id}
                  index={index}
                  btnText={x?.name}
                  isActive={activeBtnNo === x?.id ? 1 : 0}
                  onClickFunc={setActiveBtnNo}
                ></BillingBtn>
              );
            })}
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Billing;
