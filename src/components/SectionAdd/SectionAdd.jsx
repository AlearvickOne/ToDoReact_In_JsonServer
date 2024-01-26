import { postJson } from "../axiosReq";
import "./sectionAdd.css";

/* 
// Код на сервер json для нумерации id
function randomId(items) {
  let num = 0;

  if (items === undefined) return num;

  items.forEach((el, index) =>
    +el.id !== index + 1 ? (num = index + 1) : num
  );
  return num.toString();
}
*/


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
