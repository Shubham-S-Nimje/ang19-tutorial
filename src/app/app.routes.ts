import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { TolistappComponent } from './pages/tolistapp/tolistapp.component';
import { InterpolationComponent } from './components/day1/interpolation/interpolation.component';
import { RoutingComponent } from './components/day23/routing/routing.component';

export const routes: Routes = [
  { path: '', component: RoutingComponent },
  { path: 'todo-app', component: TolistappComponent },
];
