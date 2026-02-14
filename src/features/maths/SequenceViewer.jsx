import { useState } from "react";

function SequenceViewer() {

  const [sequenceType, setSequenceType] = useState("counting");

  const sequences = {
    counting: [1,2,3,4,5,6,7,8,9,10],
    odd: [1,3,5,7,9,11,13,15,17,19],
    even: [2,4,6,8,10,12,14,16,18,20]
  };

  const colors = ["#ff6b6b","#4ecdc4","#f7c948","#f78fb3","#786fa6"];

  return (
    <div>
      <div className="sequence-buttons">
        <button onClick={()=>setSequenceType("counting")}>Counting</button>
        <button onClick={()=>setSequenceType("odd")}>Odd</button>
        <button onClick={()=>setSequenceType("even")}>Even</button>
      </div>

      <div className="sequence-display">
        {sequences[sequenceType].map((num,i)=>(
          <div
            key={i}
            className="circle"
            style={{background: colors[i % colors.length]}}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SequenceViewer;
