import { postJson } from "../axiosReq";
import "./sectionAdd.css";

/* Код отвечающий за добавление элементов в список */

export default function SectionAdd({ value, onChangeValue, funcSet }) {
  return (
    <form className="formAdd">
      <input
        className="inputText"
        type="text"
        placeholder="Введите текст"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
      />
      <button
        onClick={() => postJson(value, onChangeValue, funcSet)}
        type="button"
        className="btn_add"
        disabled={value.length === 0 ? true : false}
      >
        Добавить
      </button>
    </form>
  );
}
