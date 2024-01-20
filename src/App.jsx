import { useEffect, useState } from "react";

import { importJson } from "./components/axiosReq";
import SectionAdd from "./components/SectionAdd/SectionAdd";
import SectionList from "./components/SectionList/SectionList";

const start = (setTasks) =>
  useEffect(() => {
    const fetchData = async () => await importJson(setTasks);
    fetchData();
  }, []);

export default function App() {
  const [textInput, setTextInput] = useState("");
  const [tasks, setTasks] = useState([]);

  start(setTasks);

  return (
    <>
      <div className="container">
        <SectionAdd
          value={textInput}
          onChangeValue={setTextInput}
          funcSet={setTasks}
        />
        <div className="list">
          <ul>
            {tasks.map((item, index) => {
              return (
                <SectionList
                  key={index}
                  check={item.check}
                  index={item.id}
                  funcSet={setTasks}
                >
                  {item.text}
                </SectionList>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
