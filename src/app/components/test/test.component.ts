import { CommonModule } from "@angular/common";
import { CheckComponent } from "../basic-components/check/check.component";
import { SliderComponent } from "../basic-components/slider/slider.component";
import { Component } from "@angular/core";
import { CheckStateType, CheckType } from "src/app/enums/check-enum";

@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [ SliderComponent , CommonModule , CheckComponent
    ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {

  CheckStateType=CheckStateType; // types of check state.
  CheckType=CheckType; // check type.
                  
}