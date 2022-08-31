import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-bands',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit, OnDestroy {
  public subscription!: Subscription;
  public loggedUser!: { username: string; password: string; };
  public parentMessage = 'message from parent';
  public locations = [];
  public displayedColumns = ['id', 'country', 'city', 'street'];

  constructor(
    private router: Router, 
    private dataService: DataService,
    private locationsService: LocationsService
    ) {}

  ngOnInit() {
    this.subscription = this.dataService.currentUser.subscribe(
      (user) => (this.loggedUser = user)
    );
    this.locationsService.getAll().subscribe(
      (result) => {
        console.log(result);
        this.locations = result;
      },
      (error) => console.error(error)
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public logout(): void {
    localStorage.setItem('Role', 'BasicUser');
    this.router.navigate(['/login']);
  }

  public receiveMessage(event: any): void {
    console.log(event);
  }
}