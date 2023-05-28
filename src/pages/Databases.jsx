import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatabaseBtn from "../components/Databse/DatabaseBtn";
import DatabaseRow from "../components/Databse/DatabaseRow";
import UnassignedLicensesRow from "../components/Databse/UnassignedLicensesRow";

const Databases = () => {
  const navigate = useNavigate();
  const [activeBtnNo, setActiveBtnNo] = useState(1);
  const [unassignedLicenses, setUnassignedLicenses] = useState([
    {
      productName: "FF",
      licences: 5,
    },
    {
      productName: "MO",
      licences: 3,
    },
    {
      productName: "MOSVR",
      licences: 1,
    },
  ]);
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
  return (
    <div className=" ">
      <div>
        <div className=" bg-white border">
          <div className="w-full bg-white  p-[34px]   mx-auto max-w-[1190px] h-full">
            <p className="font-bold text-[24px] ">Database</p>

            {/* BULLING BUTTONS */}
            <div className="mt-[29px] grid lg:grid-cols-4 sm:grid-cols-1 gap-6">
              {billingButtonsInfo.map((x, index) => {
                return (
                  <DatabaseBtn
                    key={x?.id}
                    index={index}
                    btnText={x?.name}
                    isActive={activeBtnNo === x?.id ? 1 : 0}
                    onClickFunc={setActiveBtnNo}
                  ></DatabaseBtn>
                );
              })}
            </div>
          </div>
        </div>

        <div className=" flex flex-wrap justify-between items-start  p-[34px] mx-auto max-w-[1190px] h-full">
          <div className="p-8 bg-white rounded-xl mt-[26px] overflow-x-auto max-w-[700px] w-full">
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
                    Next Billing Date
                  </td>
                </tr>
                <tr className="" style={{ margin: "10px 0px" }}></tr>
              </tbody>
              {billingButtonsInfo[activeBtnNo - 1]?.data?.map((x) => {
                return <DatabaseRow x={x} />;
              })}
            </table>
          </div>

          <div className="p-8 bg-white rounded-xl mt-[26px] overflow-x-auto max-w-[350px] w-full">
            <p className="text-[16px] font-semibold mb-4">
              Unassigned Licenses
            </p>
            <table className="table w-full  ">
              <tbody>
                <tr>
                  <td className="text-[12px] font-semibold text-info font-[Manrope] uppercase">
                    Product
                  </td>
                  <td className="text-[12px] font-semibold text-info font-[Manrope] uppercase">
                    Licences
                  </td>
                </tr>
                <tr className="" style={{ margin: "10px 0px" }}></tr>
              </tbody>
              {unassignedLicenses?.map((x) => {
                return <UnassignedLicensesRow x={x} />;
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Databases;
