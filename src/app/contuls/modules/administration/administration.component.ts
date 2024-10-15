import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ContulsActions } from 'src/app/state';
import { IContulsState } from 'src/app/state/contuls.state'

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent {

  selectedIndex = 0;

  constructor(
    private store$: Store<IContulsState>,
    private router: Router, 
    private route: ActivatedRoute
  ){
    this.store$.dispatch(ContulsActions.setModule({title: 'Administración', subtitle: null}))
  }

  ngOnInit(): void {
    this.route.firstChild?.url.subscribe(url => {
      const path = url[0]?.path;
      if (path === 'user') this.selectedIndex = 0;
      else if (path === 'users') this.selectedIndex = 1;
      else if (path === 'roles') this.selectedIndex = 2;
    });
  }

  onTabChange(index: number) {
    if (index === 0) this.router.navigate(['user'], { relativeTo: this.route });
    else if (index === 1) this.router.navigate(['users'], { relativeTo: this.route });
    else if (index === 2) this.router.navigate(['roles'], { relativeTo: this.route });
  }

}
