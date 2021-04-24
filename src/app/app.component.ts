import { Component, VERSION } from "@angular/core";
import { ICopilParinte } from "./interf";

@Component({
  selector: "test_bind-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  p_nume_vers = "A Angular " + VERSION.full;
  p_stil = "p3";
  c_stil = "p2";
  lista: Array<string>;
  nrTotalApasari: number;
  apasaMesaj: string;
  constructor() {
    this.lista = [
      "Element A",
      "Element B",
      "Element C",
      "Element D",
      "Element E"
    ];
    this.nrTotalApasari = 0;
    this.apasaMesaj = "";
    this.val="";
  }

  onParinteClicked(c_sosit: ICopilParinte): void {
    this.nrTotalApasari++;
    this.apasaMesaj = c_sosit.msg;
  }

  pNumeVers(): string {
    return "M Angular " + VERSION.full;
  }
  val: string;
  actualizeaza(ax: { value: string; })
  { this.val= ax.value}
}
