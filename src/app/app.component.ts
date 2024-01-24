import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  recordForm: FormGroup;
  records: any[] = [];

  constructor(private dataService: DataService) {
    this.recordForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      // другие поля...
    });
  }

  ngOnInit(): void {
    this.dataService.getRecords().subscribe(data => {
      this.records = data;
    });
  }

  onSubmit() {
    if (this.recordForm.valid) {
      this.dataService.createRecord(this.recordForm.value).then(() => {
        console.log('Record created!');
        this.recordForm.reset();
      });
    }
  }
}
