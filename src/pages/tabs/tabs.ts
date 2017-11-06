import { Component, ViewChild } from "@angular/core";
import { Nav, Tabs } from "ionic-angular";
import { HomePage } from "../home/home";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  @ViewChild("tabs") tabRef: Tabs;

  homeTab: any = HomePage;

  constructor() {}
}
