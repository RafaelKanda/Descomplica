import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationRoutingModule } from './evaluation-routing-module';
import { SharedModule } from '../../shared/shared.module';
import { EvaluationList } from './evaluation-list/evaluation-list';
import { EvaluationForm } from './evaluation-form/evaluation-form';

@NgModule({
  declarations: [EvaluationForm, EvaluationList],
  imports: [CommonModule, EvaluationRoutingModule, SharedModule],
})
export class EvaluationModule {}
