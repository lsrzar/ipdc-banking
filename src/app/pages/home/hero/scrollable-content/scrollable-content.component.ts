import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'scrollable-content',
  templateUrl: './scrollable-content.component.html',
  styleUrls: ['./scrollable-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollableContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
