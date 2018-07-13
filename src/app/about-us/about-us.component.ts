import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  gridPeople = [
    {name: "Simon Hall", position: "Executive Chairman", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0d8db853450a5e82562fd4/1487072767172/?format=500w"},
    {name: "Andy Davies", position: "Partner", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0db4a08165f598a27f17c8/1510853525432/Stonehaven-International_Retouched_AndyDavies.jpg?format=500w"},
    {name: "IAIN MCNEIL OBE", position: "Chief of Staff", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0d98a5c8302571a8119181/1510853538691/Stonehaven-International_IainMcneil.jpg?format=500w"},
    {name: "JOHN BARKER", position: "Senior Advisor", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0dc3a24192020bbec92c6c/1510851499357/Stonehaven-International_Retouched_JohnBarker.jpg?format=500w"},
    {name: "Catherine May", position: "Senior Advisor", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0db3168165f598a27ec787/1510847262148/Stonehaven-International_Retouched_CatherineMay.jpg?format=500w"},
    {name: "James Clements", position: "Partner", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0d9b2ec8302571a811e816/1510844609061/Stonehaven-International_JamesClements.jpg?format=500w"},
    {name: "Andrew Crawford", position: "Partner", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0d9a9f8165f5a87d7c4721/1510844614887/Stonehaven-Interantional_AndyCrawford.jpg?format=500w"},
    {name: "JULIET GARFORTH-BLES", position: "Partner", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0d8db853450a5e82562fdc/1487004349610/?format=500w"},
    {name: "Tom Graham", position: "Partner, Head of Technology", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0d8db853450a5e82562fde/1506615602680/?format=500w"},
    {name: "Adam Harris", position: "Partner", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0dc3b653450a890b34b006/1521651517366/AdamHarris.jpg?format=500w"},
    {name: "EMMA HAWKINS-HAILE", position: "Partner", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5ab28a411ae6cf815cdf1974/1521719276086/Emma+Hawkins+Haile.jpg?format=500w"},
    {name: "TOBY LAPAGE-NORRIS", position: "Partner", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0da08571c10be9f570e31a/1510844627497/Stonehaven-International_TLN.jpg?format=500w"},
    {name: "JULIAN ORTNER", position: "Partner", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0da1c1f9619aada95b8e97/1510844638620/Stonehaven-International_JulianOrtner.jpg?format=500w"},
    {name: "MATTHEW PARRY", position: "Partner", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0db4b1e4966ba63b140593/1510847713273/Stonehaven-International_Retouched_MattParry.jpg?format=500w"},
    {name: "MARC QUINTON", position: "Partner", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0da1fa9140b7510346d960/1510844643139/Stonehaven-International_MarcQuinton.jpg?format=500w"},
    {name: "TOM CURRY", position: "Director", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0d8db853450a5e82562fe0/1487004242927/?format=500w"},
    {name: "JUDITH OSBORNE", position: "Director", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0d8db853450a5e82562fe2/1487072734013/?format=500w"},
    {name: "Joanna Hall", position: "Senior Associate", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0da2d8419202ef1b32c10a/1510844658660/Stonehaven-International_JoanneHall.jpg?format=500w"},
    {name: "FRASER MCGUINNESS", position: "Senior Associate", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0d8db853450a5e82562fe4/1495711783209/Headsots_Retouched_FMG.jpg?format=500w"},
    {name: "Fiona Poland", position: "Senior Associate", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0dacda71c10b9cec9e3fdf/1510845676156/Stonehaven-International_Retouched_FionaPoland.jpg?format=500w"},
    {name: "NISHIKA SAMARATUNGA", position: "Senior Associate", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5ab28aa3352f53c3a3709921/1521652572583/Nishika+final+photo.jpg?format=500w"},
    {name: "HARRY LEWIS", position: "Head of Finance", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0d9996652deae2eb7ebdfd/1510844592756/Stonehaven-International_HarryLewis.jpg?format=500w"},
    {name: "DANIEL BARRY", position: "Senior Researcher", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5ab288ab2b6a283afce8535c/1521719822170/Daniel+Barry.jpg?format=500w"},
    {name: "SACHA SCOGING", position: "Executive Assistant", picture: "https://static1.squarespace.com/static/587ce565ff7c50c9f5f58201/t/5a0d8db853450a5e82562fe6/1495712177751/?format=500w"}
  ];


  constructor() {

   }

  ngOnInit() {
  }

}
