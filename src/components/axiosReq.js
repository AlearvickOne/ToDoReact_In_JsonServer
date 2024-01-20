import axios from "axios";

// Использован Json server с переписанным присовением id
/** Server new id => 
 * File - json-server/lib/service.js
 *  
    function randomId(items) {
    let num = 0;

    if (items === undefined) return num;

    items.forEach((el, index) =>
      +el.id !== index + 1 ? (num = index + 1) : num
    );
    return num.toString();
    
    //   return randomBytes(2).toString("hex");
  }
 */

// Ссылка на бэк
const link = "http://localhost:4001/tasks";

// Импорт данных с сервера
async function importJson(funcSet) {
  return await axios
    .get(link)
    .then((res) => funcSet(res.data))
    .catch((err) => {
      console.warn(err), alert("Данные не загружены");
    });
}

// Отправка данных на сервер и синхронизация бэка с фронтом
async function postJson(value, onChangeValue, funcSet) {
  return await axios
    .post(link, {
      text: value,
      check: false,
    })
    .then(() => console.log("Данные отправлены"))
    .catch((err) => {
      console.warn(err);
      alert("Данные не отправлены");
    })
    .finally(() => {
      onChangeValue("");
      importJson(funcSet);
    });
}

// Изменение данных на сервере и синхронизация бэка с фронтом
async function patchJson(index, check, funcSet) {
  return await axios
    .patch(`${link}/${index}`, { check: !check })
    .then(() => console.log("Данные отправлены"))
    .catch((err) => {
      console.warn(err);
      alert("Данные не отправлены");
    })
    .finally(() => importJson(funcSet));
}

// Удаление данных из базы по индексу объекта в базе
async function deleteJson(index, funcSet) {
  return await axios
    .delete(`${link}/${index}`)
    .then(() => console.log(`Строка удалена`))
    .catch((err) => {
      console.warn(err);
      alert("Ошибка при удалении");
    })
    .finally(() => importJson(funcSet));
}

export { importJson, postJson, patchJson, deleteJson };
