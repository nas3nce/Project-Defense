import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catBreeds } from './catBreeds';
import { Observable, map, startWith, tap } from 'rxjs';
import { CatService } from '../cat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {

  options: string[] = catBreeds;
  filteredOptions: Observable<string[]> = new Observable

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngOnInit() {
    this.filteredOptions = this.form.controls.breed.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  constructor(private fb: FormBuilder, private postService: CatService, private router: Router) { }

  catBreeds: string[] = catBreeds

  httpPattern: string = '^(http:\/\/|https:\/\/|HTTP:\/\/|HTTPS:\/\/).+'

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    breed: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    image: ['', [Validators.required, Validators.pattern(this.httpPattern)]],
    description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
  })

  submitHandler() {
    const { name, breed, age, image, description } = this.form.value

    const themeName = name

    this.postService.createPost(themeName!,  breed!, age!, image!, description!).subscribe(data => {
      const id = data._id
      this.router.navigate([`/cats/catalog/${id}`])
    });

  }
}

