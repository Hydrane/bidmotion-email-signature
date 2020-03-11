import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  };

  public config = {
    linkedin: 'https://www.linkedin.com/company/homa-games',
    twitter: 'https://www.instagram.com/homagames/',
    facebook: 'https://www.facebook.com/homagames/',
    color: '#47D7AC',
    address: '76, rue Faubourg Saint-Denis 75010 Paris',
    companyName: 'Homa Games',
    companyWebsite: 'http://homagames.com',
    logo: 'assets/HOMA_GAMES_icon_1024.png',
    logoLink: 'http://homagames.com/',
    bannerEnabled: false,
    bannerURL: '',
    bannerLink: '',
  };

  constructor() { }

  public ngOnInit():void {
    this.reset();
    const bannerLink = this.getParameterByName('bannerLink', '');
    const bannerURL = this.getParameterByName('bannerURL', '');
    if (bannerURL) {
      this.config['bannerEnabled'] = true;
      this.config['bannerLink'] = bannerLink;
      this.config['bannerURL'] = bannerURL;
    }
    const logoURL = this.getParameterByName('logoURL', '');
    if (logoURL) {
      this.config.logo = logoURL;
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
