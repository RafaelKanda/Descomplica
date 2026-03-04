import { Component } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evaluation } from '../evaluation';

@Component({
  standalone: false,
  selector: 'app-evaluation-form',
  imports: [],
  templateUrl: './evaluation-form.html',
  styleUrl: './evaluation-form.scss',
})
export class EvaluationForm {
  teacher: any = {};
  form = new FormGroup({});
  model: any = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'd-flex align-content-center justify-content-center',
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'concept',
          type: 'input',
          props: {
            label: 'Conceito',
            placeholder: 'Nome da Conceito',
            required: true,
          },
        },
        {
          key: 'evaluation_id',
          type: 'input',
          props: {
            label: 'Número da Avaliação',
            placeholder: 'Número da Avaliação',
            required: true,
          },
        },
      ],
    },
  ];
}
