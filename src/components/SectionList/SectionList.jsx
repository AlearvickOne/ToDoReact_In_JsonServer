import "./sectionList.css";
import { patchJson, deleteJson } from "../axiosReq";

export default function SectionList({ children, check, index, funcSet }) {
  return (
    <li className="listEl">
      <span className={`listEl-text ${check ? "active" : ""}`}>{children}</span>
      <span className="line"></span>
      <span>
        <span className="listEl-btns">
          <button
            className="btn positive"
            onClick={() => patchJson(index, check, funcSet)}
          >
            👍
          </button>
          <button
            className="btn negative"
            onClick={() => deleteJson(index, funcSet)}
          >
            👎
          </button>
        </span>
      </span>
    </li>
  );
}
