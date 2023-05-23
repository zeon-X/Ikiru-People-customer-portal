import React from "react";
import successImage from "../../assets/invitation-sucess.png";

const InvitationSuccessModal = () => {
  return (
    <label htmlFor="invitationSuccessModal" className="modal cursor-pointer">
      <label className="modal-box relative" htmlFor="">
        <div className="p-6 min-h-[360px] min-w-[396px] flex flex-col justify-center items-center">
          <p className="text-[20px] font-bold">Invite Sent Successfully</p>
          <img width={274} height={182} src={successImage} alt="successImage" />
        </div>
      </label>
    </label>
  );
};

export default InvitationSuccessModal;
