import React from "react";

const ProgressBar1 = () => {
    return (
        <div className="mt-12 border-slate-950 flex w-96 h-20 align-middle bg-zinc-300 relative left-1/4 mb-8 items-center justify-center">
            <span className="bg-lime-500 h-12 w-12 text-white text-center mx-3">Step 1</span>
            <span className="bg-slate-100 h-12 w-12 text-center border-black mx-3">Step 2</span>
            <span className="bg-slate-100 h-12 w-12 text-center border-black mx-3">Step 3</span>
            <span className="bg-slate-100 h-12 w-12 text-center border-black mx-3">Step 4</span>
        </div>
    );
}

export default ProgressBar1;