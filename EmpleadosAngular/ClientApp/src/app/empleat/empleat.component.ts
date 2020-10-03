import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Empleat } from '../model/empleat';
import { EmpleatService } from '../services/empleat.service';

@Component({
  selector: 'app-empleat',
  templateUrl: './empleat.component.html',
  styleUrls: ['./empleat.component.scss']
})
export class EmpleatComponent implements OnInit {

  empleat$: Observable<Empleat>;
  Id: number;

  constructor(private empleatService:EmpleatService,private avRoute: ActivatedRoute) {
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]){
      this.Id = this.avRoute.snapshot.params[idParam];
    }
   }

  ngOnInit(): void {
    this.empleat$ = this.empleatService.getEmpleat(this.Id);
  }

}
