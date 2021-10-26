import DOMproject from './DOMproject';

const renderHomePage = (projects) => {
  // create project element
  const content = document.querySelector('#content');
  console.log(projects);
  projects.forEach((project) => {
    content.appendChild(DOMproject.renderProjectElement(project));
  });
};

// create task element of project
export default { renderHomePage };
