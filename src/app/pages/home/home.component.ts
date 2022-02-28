import { Component, Injectable, OnInit } from '@angular/core';
import { exps } from './hero/experiences.data';

interface Experiences {
  img: string;
  title: string;
  description: string;
}
@Injectable({
  providedIn: 'root',
})
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public experiencias: Experiences[] = [...exps];
  constructor() {}

  ngOnInit(): void {}
}
