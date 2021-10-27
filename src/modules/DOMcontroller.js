import DOMproject from './DOMproject';

const renderTitleBar = () => {
  const titleBar = document.createElement('div');
  titleBar.classList.add('title-bar');
  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerText = 'DODO LIST';
  titleBar.appendChild(title);
  return titleBar;
};

const renderHomePage = (projects) => {
  // create project element
  const content = document.querySelector('#content');
  content.appendChild(renderTitleBar());
  console.log(projects);
  projects.forEach((project) => {
    content.appendChild(DOMproject.renderProjectElement(project));
  });
};

// create task element of project
export default { renderHomePage };
