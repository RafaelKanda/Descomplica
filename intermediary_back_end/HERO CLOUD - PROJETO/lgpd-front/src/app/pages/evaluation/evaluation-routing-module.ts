import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluationForm } from './evaluation-form/evaluation-form';
import { EvaluationList } from './evaluation-list/evaluation-list';

const routes: Routes = [
  {
    path: 'evaluations',
    component: EvaluationList,
  },
  {
    path: 'addEvaluation',
    component: EvaluationForm,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluationRoutingModule {}
