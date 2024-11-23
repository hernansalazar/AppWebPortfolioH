import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: 'Ticnow', pictures: ['../../assets/Image1.png','../../assets/Image2.png','../../assets/Image3.png'], projectLink: '//www.github.com', summary: 'Python project that analyzes stock market data.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', tags: [Tag.ORACLEDB]},
    {id: 1, name: 'Coomeva Emergencia Medica', pictures: ['../../assets/Image1.png','../../assets/Image2.png','../../assets/Image3.png'], projectLink: '//www.github.com', summary: 'Fullstack web app developed using Angular and Node.JS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.JAVASCRIPT]},
    {id: 2, name: 'Bancolombia', pictures: ['../../assets/Image1.png','../../assets/Image2.png','../../assets/Image3.png'], projectLink: '//www.github.com', summary: 'Fullstack web app developed using React and ASP.NET', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', tags: [Tag.POSTGRESQL ,Tag.CSHARP, Tag.DATADOG]},
    {id: 3, name: 'Personal Soft', pictures: ['../../assets/Image1.png','../../assets/Image2.png','../../assets/Image3.png'], projectLink: '//www.github.com', summary: 'Web API Project that was developed for a class project.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', tags: [Tag.CSHARP, Tag.AWSCLOUDWATCH]},
    {id: 4, name: 'Banco W', pictures: ['../../assets/Image1.png','../../assets/Image2.png','../../assets/Image3.png'], projectLink: '//www.github.com', summary: 'Developed a chrome extension that tracks the prices of furniture.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', tags: [Tag.AWSCODEDEPLOY,Tag.AWSCODEPIPELINE]},
    {id: 5, name: 'Service Finantial Experts - Servifex', pictures: ['../../assets/Image1.png','../../assets/Image2.png','../../assets/Image3.png'], projectLink: '//www.github.com', summary: 'Mobile app developed in java that tracks the departure and arrival of trains.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', tags: [Tag.JAVA]},
    {id: 6, name: 'Banco W', pictures: ['../../assets/Image1.png','../../assets/Image2.png','../../assets/Image3.png'], projectLink: '//www.github.com', summary: 'Developed a chrome extension that tracks the prices of furniture.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', tags: [Tag.AWSCODEDEPLOY,Tag.AWSCODEPIPELINE]},
  ];

  constructor() { }

  getProjects(){
    return this.projects;
  }

  getProjectsById(id: number) : Project{
    
    let project = this.projects.find(project => project.id === id);
    
    if(project===undefined){
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }

  getProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project){
      let foundAll = true;
      let countTags = 0;

      filterTags.forEach(function (filterTag) {
        if(project.tags.includes(filterTag) == true){
          countTags += 1;          
        }

      });
      
      if (countTags == 0) {
        foundAll = false;
      }

      if(foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }

}
