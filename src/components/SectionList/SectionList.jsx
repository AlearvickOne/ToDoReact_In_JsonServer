import "./sectionList.css";
import { patchJson, deleteJson } from "../axiosReq";
import { useState } from "react";

export default function SectionList({ children, check, index, funcSet }) {
  const [isEdit, setIsEdit] = useState(false);
  const [textValue, setTextValue] = useState(children);
  const classListEl = `listEl-text ${check ? "active" : ""}`;

  return (
    <li className="listEl">
      {isEdit ? (
        <textarea
          rows={10}
          className={classListEl}
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
      ) : (
        <span className={classListEl}>{children}</span>
      )}

      <span className="line"></span>
      <span>
        <span className="listEl-btns">
          <button
            className="btn positive"
            onClick={() => patchJson({ check: !check }, index, funcSet)}
          >
            👍
          </button>
          <button
            className="btn negative"
            onClick={() => deleteJson(index, funcSet)}
          >
            👎
          </button>
          <button
            className="btn edit"
            onClick={() => {
              if (!isEdit) return setIsEdit(true);
              else if (isEdit) {
                patchJson({ text: textValue }, index, funcSet);
                setIsEdit(false);
              }
            }}
          >
            {isEdit ? "Сохранить" : "Редактировать"}
          </button>
        </span>
      </span>
    </li>
  );
}
