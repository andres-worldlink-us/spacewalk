import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

import { SpacewalkRoutes } from '../spacewalk-route-types';

@Component({
    selector: 'eva-side-navigation',
    templateUrl: './side-navigation.component.html',
    styleUrls: ['./side-navigation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterLink, NgFor, NgIf]
})
export default class SideNavigationComponent {

  @Input() isOpen = false;
  @Output() closePanel = new EventEmitter<void>();

  menuItems: SpacewalkRoutes;

  constructor(router: Router) {
    this.menuItems = (router.config as SpacewalkRoutes)
      .filter((item) => item.data?.teaser);
  }

  onLinkClick() {
    this.closePanel.emit();
  }

  onBackdropClick() {
    this.closePanel.emit();
  }
}
