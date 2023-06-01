import React, { useState } from "react";
import BillingBtn from "../components/Billing/BillingBtn";
import { useNavigate } from "react-router-dom";
import BillingRow from "../components/Billing/BillingRow";

const Billing = () => {
  const navigate = useNavigate();
  const [activeBtnNo, setActiveBtnNo] = useState(1);
  const [billingButtonsInfo, setBillingButtonsInfo] = useState([
    {
      name: "FFAnyWhere",
      id: 1,
      data: [
        {
          productName: "FFAnyWhere Product",
          billableLicences: 5,
          activeLicences: 2,
          price: 500,
          discount: 200,
          billingFrequency: "Annually",
          nextBillingDate: "1 June, 2023",
        },
        {
          productName: "FFAnyWhere Product",
          billableLicences: 5,
          activeLicences: 2,
          price: 500,
          discount: 200,
          billingFrequency: "Annually",
          nextBillingDate: "1 June, 2023",
        },
        {
          productName: "FFAnyWhere Product",
          billableLicences: 5,
          activeLicences: 2,
          price: 500,
          discount: 200,
          billingFrequency: "Annually",
          nextBillingDate: "1 June, 2023",
        },
      ],
    },
    {
      name: "Infinity",
      id: 2,
      data: [
        {
          productName: "Infinity Product",
          billableLicences: 5,
          activeLicences: 2,
          price: 500,
          discount: 200,
          billingFrequency: "Annually",
          nextBillingDate: "1 June, 2023",
        },
        {
          productName: "Infinity Product",
          billableLicences: 5,
          activeLicences: 2,
          price: 500,
          discount: 200,
          billingFrequency: "Annually",
          nextBillingDate: "1 June, 2023",
        },
        {
          productName: "Infinity Product",
          billableLicences: 5,
          activeLicences: 2,
          price: 500,
          discount: 200,
          billingFrequency: "Annually",
          nextBillingDate: "1 June, 2023",
        },
      ],
    },
    {
      name: "Mid Journey",
      id: 3,
      data: [
        {
          productName: "Mid Journey Product",
          billableLicences: 5,
          activeLicences: 2,
          price: 500,
          discount: 200,
          billingFrequency: "Annually",
          nextBillingDate: "1 June, 2023",
        },
        {
          productName: "Mid Journey Product",
          billableLicences: 5,
          activeLicences: 2,
          price: 500,
          discount: 200,
          billingFrequency: "Annually",
          nextBillingDate: "1 June, 2023",
        },
        {
          productName: "Mid Journey Product",
          billableLicences: 5,
          activeLicences: 2,
          price: 500,
          discount: 200,
          billingFrequency: "Annually",
          nextBillingDate: "1 June, 2023",
        },
      ],
    },
  ]);

  const [accountManager, setAccountManager] = useState({
    contactReference: "126790-090",
    status: "Active",
    accountManager: "Chris Caw",
    renewalDate: "1 May 2024",
  });

  return (
    <div className="">
      <div>
        <div className="w-full bg-white border">
          <div className="w-full  p-[34px]  mx-auto max-w-[1190px] h-full">
            <p className="font-bold text-[24px] ">Billing</p>

            {/* BULLING BUTTONS */}
            <div className="mt-[29px] flex flex-row pb-6 overflow-x-auto gap-6">
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
        </div>

        <div className="p-[34px] mx-auto max-w-[1190px] h-full">
          <div className="p-8 bg-white rounded-xl mt-[26px] overflow-x-auto">
            <table className=" overflow-x-auto w-full  min-w-[500px]">
              <tbody>
                <tr>
                  <td className="text-[12px] font-semibold text-info font-[Manrope] pb-4 ">
                    Contact Reference
                  </td>
                  <td className="text-[12px] font-semibold text-info font-[Manrope] pb-4">
                    Status
                  </td>
                  <td className="text-[12px] font-semibold text-info font-[Manrope] pb-4">
                    Account Manager
                  </td>
                  <td className="text-[12px] font-semibold text-info font-[Manrope] pb-4">
                    Renewal Date
                  </td>
                </tr>

                <tr>
                  <td className=" text-[14px] font-medium ">
                    {accountManager?.contactReference}
                  </td>
                  <td className=" text-[14px] font-medium">
                    {accountManager?.status}
                  </td>
                  <td
                    onClick={() => navigate("/my-profile")}
                    className=" text-[14px] font-medium text-[#2006FC] cursor-pointer"
                  >
                    {accountManager?.accountManager}
                  </td>
                  <td className="text-[14px] font-medium">
                    {accountManager?.renewalDate}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-8 bg-white rounded-xl mt-[26px] overflow-x-auto">
            <table className="table w-full  ">
              <tbody>
                <tr>
                  <td className="text-[12px] font-semibold text-info font-[Manrope] uppercase">
                    Product Name
                  </td>
                  <td className="text-[12px] font-semibold text-info font-[Manrope] uppercase">
                    Billable Licences
                  </td>
                  <td className="text-[12px] font-semibold text-info font-[Manrope] uppercase">
                    Active Licenses
                  </td>
                  <td className="text-[12px] font-semibold text-info font-[Manrope] uppercase">
                    Price
                  </td>
                  <td className="text-[12px] font-semibold text-info font-[Manrope] uppercase">
                    Discount
                  </td>
                  <td className="text-[12px] font-semibold text-info font-[Manrope] uppercase">
                    Billing frequency
                  </td>
                  <td className="text-[12px] font-semibold text-info font-[Manrope] uppercase">
                    Next Billing Date
                  </td>
                </tr>
                <tr className="" style={{ margin: "10px 0px" }}></tr>
              </tbody>
              {billingButtonsInfo[activeBtnNo - 1]?.data?.map((x) => {
                return <BillingRow x={x} />;
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
