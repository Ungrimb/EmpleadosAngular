import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpleatService } from '../services/empleat.service';
import { Empleat } from '../models/empleat';

@Component({
  selector: 'app-empleat-add-edit',
  templateUrl: './empleat-add-edit.component.html',
  styleUrls: ['./empleat-add-edit.component.scss']
})
export class EmpleatAddEditComponent implements OnInit {
  form: FormGroup;
  actionType: string;
  formNom: string;
  formCognom: string;
  formSou: string;
  formCarrec: string;
  Id: number;
  errorMessage: any;
  existingEmpleat: Empleat;

  constructor(private EmpleatService: EmpleatService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) { 
    const idParam = 'id';
    this.actionType = 'Add';
    this.formNom = 'Nom';
    this.formCognom = 'Cognom';
    this.formSou = 'Sou';
    this.formCarrec ='Càrrec';
    if (this.avRoute.snapshot.params[idParam]) {
      this.Id = this.avRoute.snapshot.params[idParam];
    }
  this.form = this.formBuilder.group(
    {
      Id: 0,
      Nom: ['', [Validators.required]],
      Cognom: ['', [Validators.required]],
      Carrec: ['', [Validators.required]],
      Sou: ['', [Validators.required]],
    }
  )
  }

  ngOnInit() {
    if (this.Id > 0) {
      this.actionType = 'Edit';
      this.EmpleatService.getEmpleat(this.Id)
        .subscribe(data => (
          this.existingEmpleat = data,
          this.form.controls[this.formNom].setValue(data.Nom),
          this.form.controls[this.formCognom].setValue(data.Cognom),
          this.form.controls[this.formCarrec].setValue(data.Carrec),
          this.form.controls[this.formSou].setValue(data.Sou)
        ));
    }
  }
  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let Empleat: Empleat = {
        Nom: this.form.get(this.formNom).value,
        Cognom: this.form.get(this.formCognom).value,
        Carrec: this.form.get(this.formCarrec).value,
        Sou: this.form.get(this.formSou).value
      };

      this.EmpleatService.saveEmpleat(Empleat)
        .subscribe((data) => {
          this.router.navigate(['/Empleats', data.Id]);
        });
    }

    if (this.actionType === 'Edit') {
      let Empleat: Empleat = {
        Id: this.existingEmpleat.Id,
        Sou: this.form.get(this.formSou).value,
        Carrec: this.form.get(this.formCarrec).value,
        Nom: this.form.get(this.formNom).value,
        Cognom: this.form.get(this.formCognom).value
      };
      this.EmpleatService.updateEmpleat(Empleat.Id, Empleat)
        .subscribe((data) => {
          this.router.navigate([this.router.url]);
        });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  get Nom() { return this.form.get(this.formNom); }
  get Cognom() { return this.form.get(this.formCognom); }
  get Carrec() { return this.form.get(this.formCarrec); }
  get Sou() { return this.form.get(this.formSou); }

}
