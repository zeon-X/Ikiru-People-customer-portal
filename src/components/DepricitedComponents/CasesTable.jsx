import React from "react";

const CasesTable = () => {
  return (
    <div>
      <div className="p-6 bg-white rounded-2xl">
        <div className="overflow-x-auto">
          <table className="table  w-full mt-[26px]">
            <tbody>
              <tr>
                <td className="text-[12px] text-info font-[Manrope] uppercase">
                  TITLE
                </td>
                <td className="text-[12px] text-info font-[Manrope] uppercase">
                  REFERENCE
                </td>
                <td className="text-[12px] text-info font-[Manrope] uppercase">
                  STATUS
                </td>
                <td className="text-[12px] text-info font-[Manrope] uppercase">
                  PRIORITY
                </td>
                <td className="text-[12px] text-info font-[Manrope] uppercase">
                  CREATED ON
                </td>
                <td></td>
              </tr>
              <tr className="p-4"></tr>
              {casesData.map((x) => {
                return (
                  <>
                    <tr>
                      <td
                        style={{
                          padding: "0px 0px 20px 0px",
                          fontSize: "14px",
                        }}
                      >
                        {x?.caseName}
                      </td>
                      <td
                        style={{
                          padding: "0px 0px 20px 0px",
                          fontSize: "14px",
                        }}
                      >
                        {x?.reference}
                      </td>
                      <td
                        style={{
                          padding: "0px 0px 20px 0px",
                          fontSize: "14px",
                        }}
                      >
                        {x?.status}
                      </td>
                      <td
                        style={{
                          padding: "0px 0px 20px 0px",
                          fontSize: "14px",
                        }}
                      >
                        <PriorityBtnGenarator priority={x.priority} />
                      </td>
                      <td
                        style={{
                          padding: "0px 0px 20px 0px",
                          fontSize: "14px",
                        }}
                      >
                        {x?.createdOn}
                      </td>
                      <td
                        style={{
                          padding: "0px 0px 20px 0px",
                          fontSize: "14px",
                        }}
                      >
                        <button>{arrowDown}</button>
                      </td>
                    </tr>

                    <tr>
                      <div className="text-[14px] ">{x.description}</div>
                    </tr>
                  </>
                );
              })}
            </tbody>
            <div className="mb-2" />
          </table>
        </div>
      </div>
    </div>
  );
};

export default CasesTable;
