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
    }
  }
  return value;
}

export const saveProjects = function (projects) {
  if (!hasStorage("localStorage")) return;

  localStorage.setItem("projects", JSON.stringify(projects, replacer));
};

export const loadProjects = function (projects) {
  if (localStorage.getItem("projects")) {
    const projectsDataStr = localStorage.getItem("projects");
    const savedProjects = JSON.parse(projectsDataStr, reviver);
    savedProjects.forEach((savedProject) => projects.push(savedProject));
  }
};
