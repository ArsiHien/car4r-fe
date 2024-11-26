import React from "react";
import number1 from "../../assets/number1.png";

const ProgressBar1 = () => {
  return (
    <div className="mt-12 border-slate-950 flex w-2/4 h-20 align-middle bg-zinc-300 relative left-1/4 mb-8 items-center justify-center">
      <span className="bg-lime-500 h-12 w-1/5 text-center text white border-black mx-3">
        Step 1
      </span>
      <span className="bg-slate-100 h-12 w-1/5 text-center mx-3">Step 2</span>
      <span className="bg-slate-100 h-12 w-1/5 text-center border-black mx-3">
        Step 3
      </span>
      <span className="bg-slate-100 h-12 w-1/5 text-center border-black mx-3">
        Step 4
      </span>
    </div>
  );
};

export default ProgressBar1;
