import { refreshUI, localData } from "./index";

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export const hasStorage = (type) => (storageAvailable(type) ? true : false);

// replacer/reviver allow .stringify() with Map objects
const replacer = function (key, value) {
  if (value instanceof Map) {
    return {
      dataType: "Map",
      value: Array.from(value.entries()), // or with spread: value: [...value]
    };
  } else {
    return value;
  }
};

function reviver(key, value) {
  if (typeof value === "object" && value !== null) {
    if (value.dataType === "Map") {
      return new Map(value.value);
    } else if (value[0] === "dueDate" && value[1] !== "") {
      // Restore Date object from date string
      value[1] = new Date(value[1]);
      return value;
    }
  }

  return value;
}

export const saveLocalData = function () {
  console.log("hello from saveLocalData");

  if (!hasStorage("localStorage")) return;

  localStorage.setItem("localData", JSON.stringify(localData, replacer));
  refreshUI();
};

export const loadLocalData = function () {
  if (!localStorage.getItem("localData")) return;

  const localDataStr = localStorage.getItem("localData");
  const loadedLocalData = JSON.parse(localDataStr, reviver);
  localData.projects = loadedLocalData.projects;
  localData.config = loadedLocalData.config;
};

// delete me
export const printLocalStorage = function () {
  console.log("from printLocalStorage()");
  const localDataStr = localStorage.getItem("localData");
  console.log(localDataStr);
};
