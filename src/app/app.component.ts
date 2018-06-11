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
    bannerLink: '',
    isHomaGames: false
  };

  public bidmotionConfig = {
    linkedin: 'https://www.linkedin.com/company/bidmotion',
    twitter: 'https://twitter.com/bidmotion',
    facebook: 'https://www.facebook.com/bidmotion',
    color: 'rgb(88, 203, 181)',
    address: '76, rue Faubourg Saint-Denis 75010 Paris',
    companyName: 'BidMotion',
    companyWebsite: 'http://www.bidmotion.com',
    logo: 'https://hd-misc.s3.amazonaws.com/assets/misc/logo.png',
    logoLink: 'http://www.bidmotion.com'
  };

  public homaGamesConfig = {
    linkedin: 'https://www.linkedin.com/company/bidmotion',
    twitter: 'https://www.instagram.com/homagames/',
    facebook: 'https://www.facebook.com/homagames/',
    color: '#249e7f',
    address: '76, rue Faubourg Saint-Denis 75010 Paris',
    companyName: 'Homa Games',
    companyWebsite: 'http://homagames.com',
    logo: 'http://homagames.com/wp-content/uploads/sites/8/2018/02/Redone-logo-1.png',
    logoLink: 'http://homagames.com/'
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

  get config() {
    return this.signature['isHomaGames'] ? this.homaGamesConfig : this.bidmotionConfig;
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
