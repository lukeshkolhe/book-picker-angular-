import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AddBook } from '../add-book';

@Component({
  selector: 'app-add-book-to-library',
  templateUrl: './add-book-to-library.component.html',
  styleUrls: ['./add-book-to-library.component.sass']
})
export class AddBookToLibraryComponent implements OnInit {

  bookForm: FormGroup= new FormGroup({});
  book: FormGroup= new FormGroup({})
  public newbookForm: AddBook = new AddBook();

  constructor(
    public _fb: FormBuilder,
    public _http: HttpClient
  ) {
     this.bookForm = this._fb.group({
       email: ['sdjfkasdjk@ldkfjslkdf.com'],
       book: this._fb.group({
         _id: ['1'],
         bookName: ['sdfsdf'],
         author: ['sdfsd'],
         edition: ['2'],
         genre: ['sdfsdf'],
         condition: ['1'],
         opinion: ['dsfsdf'],
         status: ['true']
       })
     })
   }

  ngOnInit(){
    localStorage.setItem('email', 'surajbbd.in@gmail.com');

  }

submitForm() {

  //console.log(this.bookForm.controls['book'].value );
    this.newbookForm = <AddBook>this.bookForm.value;
    console.log(this.newbookForm);
    var Header = new HttpHeaders();
    Header.append("Content-Type", "application/json").append('Cache-Control', 'no-cache');
    this._http.post('https://192.168.0.111:4000/addbook', JSON.stringify(this.newbookForm), { headers: Header }).subscribe(
    (data) => console.log(data),
    (response) => console.log(response),
    // (error) => console.log(error)
    )
  }

}
