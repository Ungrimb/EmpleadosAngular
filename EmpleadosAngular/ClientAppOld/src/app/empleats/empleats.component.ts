import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpleatService } from '../services/empleat.service';
import { Empleat } from '../models/empleat';

@Component({
  selector: 'app-empleats',
  templateUrl: './empleats.component.html',
  styleUrls: ['./empleats.component.scss']
})
export class EmpleatsComponent implements OnInit {

  empleats$: Observable<Empleat[]>;
  Id: number;

  constructor(private EmpleatService:EmpleatService, private avRoute: ActivatedRoute) { 
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.Id = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit() {
    this.loadEmpleats();
  }

  loadEmpleats() {
    this.empleats$ = this.EmpleatService.getEmpleats();
  }

  delete(Id) {
    const ans = confirm('Do you want to delete blog post with id: ' + Id);
    if (ans) {
      this.EmpleatService.deleteEmpleat(Id).subscribe((data) => {
        this.loadEmpleats();
      });
    }
  }

}
