import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CatService } from '../cat.service';
import { Observable, map, startWith } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { catBreeds } from '../add-cat/catBreeds';
import { IPost } from 'src/app/shared/interfaces/posts';

type NewType = Router;

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent {


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

  cat: IPost | undefined

  cat$: Observable<IPost> = new Observable


  constructor(private fb: FormBuilder, private postService: CatService, private router: Router, private route: ActivatedRoute) {
    const { details } = this.route.snapshot.params
    this.postService.getSinglePost(details).subscribe(data => {
      this.cat = data
      this.form.setValue({
        name: this.cat.themeName,
        breed: this.cat.breed,
        age: this.cat.age,
        image: this.cat.image,
        description: this.cat.description,
      })
    });

  }

  catBreeds: string[] = catBreeds

  httpPattern: string = '^(http:\/\/|https:\/\/|HTTP:\/\/|HTTPS:\/\/).+'

  form = this.fb.group({
    name: [``, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    breed: [``, Validators.required],
    age: [``, [Validators.required, Validators.min(0), Validators.max(100)]],
    image: [``, [Validators.required, Validators.pattern(this.httpPattern)]],
    description: [``, [Validators.required, Validators.minLength(3), Validators.maxLength(300)]],
  })

  submitHandler() {
    console.log(this.form.value);

    if (this.form.invalid) return

    const { details } = this.route.snapshot.params

    const { name, breed, age, image, description } = this.form.value

    const themeName = name

    this.postService.editPost(details!, themeName!, breed!, age!, image!, description!).subscribe(data => {
      const id = data._id
      this.router.navigate([`/cats/catalog/${id}`])
    });

  }
}
