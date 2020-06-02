import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from "@angular/core";
import { projectData } from "../utils/mock-data"

@Component({
    selector: "ns-project-list",
    templateUrl: "./project-list.component.html",
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
    projectList
    constructor() {
    }

    ngOnInit(): void {
        this.projectList = projectData.projects;
    }
}
