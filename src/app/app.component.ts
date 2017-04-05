import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public signature: object;
  public active: boolean = false;
  private signatureModel: object = {
    firstName: '',
    lastName: '',
    position: '',
    email: '',
    phone: '',
    skype: '',
    skypeURL: '',
    bannerEnabled: false,
    bannerURL: '',
    bannerLink: ''
  };

  constructor() { }

  public ngOnInit():void {
    this.reset();
    const bannerLink = this.getParameterByName('bannerLink', '');
    const bannerURL = this.getParameterByName('bannerURL', '');
    if (bannerURL) {
      this.signature['bannerEnabled'] = true;
      this.signature['bannerLink'] = bannerLink;
      this.signature['bannerURL'] = bannerURL;
    }
  }

  public reset():void {
    this.signature = Object.assign({}, this.signatureModel);
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
}
