import React from "react";

import reqRecImg from "../../assets/Home/reqReceivedSuccessModal.svg";
const RequestReceivedSuccessModal = () => {
  return (
    <label htmlFor="reqRecSuccess" className="modal cursor-pointer">
      <label className="modal-box relative" htmlFor="">
        <div className="p-6 min-h-[431px] flex flex-col justify-center items-center">
          <p className="text-[20px] font-bold  text-center">
            We have received your request
          </p>
          <p className="text-[16px] text-center my-2">
            Will Let you know the time for <br /> training shortly
          </p>
          <img width={274} height={182} src={reqRecImg} alt="successImage" />
        </div>
      </label>
    </label>
  );
};

export default RequestReceivedSuccessModal;
