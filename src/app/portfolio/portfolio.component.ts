import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typeScript: boolean = false;
  angular: boolean = false;
  javaScript: boolean = false;
  java: boolean = false;
  cSharp: boolean = false;
  plSql: boolean = false;
  oracleDb: boolean = false;
  postgresQl: boolean = false;
  awsCodeDeploy: boolean = false;
  awsPipeLine: boolean = false;
  dataDog: boolean = false;
  awsCloudWatch: boolean = false;
  filtering: boolean = false;

  constructor (private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Hernan Salazar - Portfolio");
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter() {
    let filterTags: Tag[] = [];

    if(this.typeScript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if(this.awsCloudWatch) {
      filterTags.push(Tag.AWSCLOUDWATCH);
    }
    if(this.awsCodeDeploy) {
      filterTags.push(Tag.AWSCODEDEPLOY);
    }
    if(this.awsPipeLine) {
      filterTags.push(Tag.AWSCODEPIPELINE);
    }
    if(this.cSharp) {
      filterTags.push(Tag.CSHARP);
    }
    if(this.dataDog) {
      filterTags.push(Tag.DATADOG);
    }
    if(this.java) {
      filterTags.push(Tag.JAVA);
    }
    if(this.javaScript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.oracleDb) {
      filterTags.push(Tag.ORACLEDB);
    }
    if(this.plSql) {
      filterTags.push(Tag.PLSQL);
    }
    if(this.postgresQl) {
      filterTags.push(Tag.POSTGRESQL);
    }

    if (this.angular || this.awsCloudWatch || this.awsCodeDeploy || this.awsPipeLine || this.cSharp || this.dataDog
         || this.java || this.javaScript || this.oracleDb || this.plSql || this.postgresQl || this.typeScript) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }

  resetFilters() {
    this.typeScript = false;
    this.angular = false;
    this.javaScript = false;
    this.java = false;
    this.cSharp = false;
    this.plSql = false;
    this.oracleDb = false;
    this.postgresQl = false;
    this.awsCodeDeploy = false;
    this.awsPipeLine = false;
    this.dataDog = false;
    this.awsCloudWatch = false;
    this.filtering = false;

    this.projects = this.projectService.getProjects();
  
  }
}
