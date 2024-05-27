import "./style.css";
import { storageAvailable } from "./storageAvailable";

const hasStorage = (type) => (storageAvailable(type) ? true : false);

const projects = [];

function createProject(projectName) {
  return {
    projectName: projectName,
  };
}

function loadProjects() {
  if (localStorage.getItem("projects")) {
    const savedProjects = JSON.parse(localStorage.getItem("projects"));
  } else {
    console.log("No local save file found.");
  }
}

function saveProjects() {
  if (!hasStorage("localStorage")) return;

  localStorage.setItem("projects", JSON.stringify(projects));
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const projectName = document.querySelector("input").value;
  const newProject = createProject(projectName);
  projects.push(newProject);
  saveProjects();
});

loadProjects();
