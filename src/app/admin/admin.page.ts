import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-admin",
  templateUrl: "./admin.page.html",
  styleUrls: ["./admin.page.scss"],
})
export class AdminPage implements OnInit {

  constructor() {}

  ngOnInit() {}

  base64textString = [];
  base64textString2 = [];

  onUploadChange(evt: any) {
    const file = evt.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString.push(
      "data:image/png;base64," + btoa(e.target.result)
    )
    this.base64textString2.push(
      "data:image/png;base64," + btoa(e.target.result)
    )
  }
    
}
