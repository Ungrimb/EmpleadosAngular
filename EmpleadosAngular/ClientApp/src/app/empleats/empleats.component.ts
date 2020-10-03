import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleat } from '../model/empleat';
import { EmpleatService } from '../services/empleat.service';

@Component({
  selector: 'app-empleats',
  templateUrl: './empleats.component.html',
  styleUrls: ['./empleats.component.scss']
})
export class EmpleatsComponent implements OnInit {

  empleat$: Observable<Empleat[]>;

  constructor(private empleatService: EmpleatService) {

   }

  ngOnInit() {
    this.loadEmpleats();
  }

  loadEmpleats(){
    this.empleat$=this.empleatService.getEmpleats();
  }

  delete(Id) {
    const ans = confirm('Do you want to delete blog post with id: ' + Id);
    if (ans) {
      this.empleatService.deleteEmpleat(Id).subscribe((data) => {
        this.loadEmpleats();
      });
    }
  }

}
