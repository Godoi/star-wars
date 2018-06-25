import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { DataService } from "../data.service";
import { Films } from "../core/models/films";
import { People } from "../core/models/people";

@Component({
  selector: "app-root",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  public loaded = false;
  @Input() films: Films;
  peoples: People[] = [];
  itens: People[] = [];
  col: number = 3;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: DataService
  ) {}

  ngOnInit() {
    this.getFilm();
    this.getPeople(1);
  }

  getFilm(): void {
    let id = +this.route.snapshot.paramMap.get("id");
    let idPeople;
    this.service.getFilm(id).subscribe(films => {
      films["poster"] = films.title
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/&/g, "-and-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-");
      this.films = films;
      this.films.characters.map(elem => {
        idPeople = parseFloat(elem.split("/")[elem.split("/").length - 2]);
        this.getPeople(idPeople);
      });
    });
  }

  getPeople(id): void {
    this.service.getSpecificPeople(id).subscribe(people => {
      this.itens.push(people);
      this.peoples = this.itens.slice(0, 6);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
