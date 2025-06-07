import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { TolistappComponent } from './pages/tolistapp/tolistapp.component';
import { InterpolationComponent } from './components/day1/interpolation/interpolation.component';
import { RoutingComponent } from './components/day23/routing/routing.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ChildComponent } from './components/day25/child/child.component';
import { ProfileComponent } from './components/day25/profile/profile.component';
import { DynamicuserComponent } from './components/day27/dynamicuser/dynamicuser.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo-app', component: TolistappComponent },
  { path: 'child', component: ChildComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { name: 'Shubham Nimje' },
  },
  { path: 'user/:id/:name/:age/:email', component: DynamicuserComponent },
  { path: '**', component: PagenotfoundComponent },
];
