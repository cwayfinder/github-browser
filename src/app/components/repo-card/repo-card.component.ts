import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoCardComponent {

  @Input() title: string;
  @Input() description: string;
  @Input() stars: number;
  @Input() language: string;
  @Input() languageColor: string;
  @Input() removable: boolean;

  @Output() remove = new EventEmitter<void>();

}
