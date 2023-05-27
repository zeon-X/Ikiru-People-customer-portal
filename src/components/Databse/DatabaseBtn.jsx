const DatabaseBtn = ({ btnText, isActive, index, onClickFunc }) => {
  return isActive ? (
    <button
      onClick={() => {
        onClickFunc(index + 1);
      }}
      className="flex justify-between items-center gap-4 bg-[#FF8A00] rounded-lg px-8 py-4 text-white"
    >
      <p className="text-[14px] font-medium">{btnText}</p>
      <div className="rounded-full text-[12px] px-2 border border-white bg-[#FFAF51]">
        Active
      </div>
    </button>
  ) : (
    <button
      onClick={() => {
        onClickFunc(index + 1);
      }}
      className="flex justify-start items-center gap-4 bg-white rounded-lg px-8 py-4 text-info border border-gray-200"
    >
      <p className="text-[14px] font-medium">{btnText}</p>
    </button>
  );
};
export default DatabaseBtn;
