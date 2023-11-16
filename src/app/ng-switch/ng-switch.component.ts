import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {
  mass = ["car","ship","airplane"]
  count:number = 0
  cars =["БЕЛАЗ-75710","создан в 2013 году","длинна:20,6 м","ширина:9,87 м","высота:8,26 м","масса:390,5 т","изготовитель:Беларусь"]
  ship = ["Wonder of the Seas","создан в 9 мая 2019 г","длинна:362,04 м","осадка:9,3 м","дедвейт:17100 т","Пассажировместимость:6988","Изготовитель:Франция"]
  airoplane = ["Ан-225 «Мрия»","создан в 1988 году","длинна:84 м","высота:18,2 м","размах крыла:88,4 м","Крейсерская скорость:км/ч: 850","изготовитель:СССР-Украина"]
}

