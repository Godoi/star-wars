import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { People } from "../core/models/people";
import { Films } from "../core/models/films";
import { DataService } from "../data.service";
import * as ScrollMagic from "ScrollMagic";

@Component({
  selector: "app-root",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  peoples: People[] = [];
  films: Films[] = [];
  public loaded = false;

  constructor(
    private service: DataService,
    config: NgbCarouselConfig,
    private router: Router
  ) {
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = false;
    this.getPeople();
    this.getFilms();
  }
  ngOnInit() {
    this.startSccrollMagic();
  }
  detail(url): void {
    url = url.split("/")[url.split("/").length - 2];
    this.router.navigate(["detail/", url]);
  }
  startSccrollMagic() {
    let controller = new ScrollMagic.Controller({
      globalSceneOptions: { duration: 100 }
    });
    // build scenes
    new ScrollMagic.Scene({ triggerElement: "#secFilms" })
      .setClassToggle("#Films", "active")
      .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#secPeople" })
      .setClassToggle("#People", "active")
      .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#secStarships" })
      .setClassToggle("#Starships", "active")
      .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#secVehicles" })
      .setClassToggle("#Vehicles", "active")
      .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#secSpecies" })
      .setClassToggle("#Species", "active")
      .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#secPlanets" })
      .setClassToggle("#Planets", "active")
      .addTo(controller);
  }
  getPeople(): void {
    this.service.getPeople().subscribe(peoples => (this.peoples = peoples));
  }
  getFilms(): void {
    this.service.getFilms().subscribe(films => (this.films = films));
  }
}