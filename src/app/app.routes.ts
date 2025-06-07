import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { TolistappComponent } from './pages/tolistapp/tolistapp.component';
import { InterpolationComponent } from './components/day1/interpolation/interpolation.component';
import { RoutingComponent } from './components/day23/routing/routing.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo-app', component: TolistappComponent },
  { path: 'login', component: LoginComponent },
];
