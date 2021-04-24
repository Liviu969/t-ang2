import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ICopilParinte } from "./interf";

@Component({
  selector: "sel-copil",
  templateUrl: "copil.component.html"
})
export class CopilComponent {
  @Input("num_p") num_px: string;
  nrApasari: number = 0;
  c_emit: ICopilParinte = <ICopilParinte>{};
  @Output("apasaClickedP") apasaClickedPx: EventEmitter<
    ICopilParinte
  > = new EventEmitter<ICopilParinte>();
  constructor() {
    this.num_px = '';
  }
  OnClick() {
    this.nrApasari++;
    this.c_emit.msg =
      "[COPIL]: Ati apasat " +
      this.num_px +
      " " +
      (this.nrApasari == 1 ? " o " : " de ") +
      (this.nrApasari <= 1 ? "" : this.nrApasari) +
      (this.nrApasari == 1 ? " data" : " ori");
    this.c_emit.cnt = this.nrApasari;
    this.apasaClickedPx.emit(this.c_emit);
  }
}
