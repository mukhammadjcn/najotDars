import React, { useState } from "react";
import MyWorker from "./worker?worker";

export const InputComponents = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState<number>();
  const [loading, setLoading] = useState(false);

  const consumeData = () => {
    setLoading(true);
    const myWorker = new MyWorker();
    myWorker.postMessage(Number(input));

    myWorker.onmessage = function (ev: MessageEvent<number>) {
      setData(ev.data);
      setLoading(false);
    };
  };

  return (
    <div>
      {loading && <h2>Fibonachi sonla hisoblanqmoda</h2>}
      <div style={{ display: "flex", gap: 36 }}>
        <div style={{ backgroundColor: "#EE82EE50", padding: 24 }}>
          <input type="number" onChange={(val) => setInput(val.target.value)} />
          <h3>
            Input value: <br /> {input}
          </h3>
        </div>

        <div style={{ backgroundColor: "#00800050", padding: 24 }}>
          <button onClick={consumeData}>Huge data consume</button>
          <p>Data result: {data}</p>
        </div>
      </div>
    </div>
  );
};
