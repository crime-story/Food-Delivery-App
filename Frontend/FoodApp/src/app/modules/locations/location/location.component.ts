import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LocationsService } from '../../../services/locations.service';
import { Location } from '../../../interfaces/location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  public subscription: Subscription | undefined;
  public city: any;
  public location: Location | undefined {
    id: 'default id';
    country: 'default country';
    city: 'default city';
    street: 'default street';
  };

  constructor(
    private route: ActivatedRoute,
    private locationsService: LocationsService,
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.city = +params['city'];
      if (this.city) {
        this.getLocation();
      }
    });
  }

  public getLocation(): void {
    this.locationsService.getLocationByCity(this.city).subscribe(
      (result: Location) => {
        console.log(result);
        this.location = result;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}
