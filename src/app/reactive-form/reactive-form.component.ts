import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  fg: FormGroup;
  post: any;
  firstName: string;
  comment: string;
  acceptTerms: boolean;

  constructor(private fb: FormBuilder) {
    this.fg = fb.group({
      'firstName': ['', Validators.compose([
                          Validators.required,
                          Validators.minLength(5),
                          Validators.maxLength(10)])
                    ],
      'comment': ['', Validators.required],
      'acceptTerms': [false, Validators.requiredTrue]
    });
  }

  ngOnInit() {}

  addPost(post) {
    this.firstName = post.firstName;
    this.comment = post.comment;
    console.log(this.fg);
  }

  log(x) {
    console.log(x);
  }
}
