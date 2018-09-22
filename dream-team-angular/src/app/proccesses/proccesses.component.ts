import { Component, OnInit } from '@angular/core';
import { Proccess } from './proccess';
import * as $ from 'jquery';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-proccesses',
  templateUrl: './proccesses.component.html',
  styleUrls: ['./proccesses.component.css']
})

export class ProccessesComponent {

  //procs = Proccess[];

  private itemsCollection: AngularFirestoreCollection<Proccess>;
  items: Observable<Proccess[]>;
  constructor(private afs: AngularFirestore) {
    console.log('FUCK');
    this.itemsCollection = afs.collection<Proccess>('buses');
    console.log(this.itemsCollection);
    this.items = this.itemsCollection.valueChanges();
    console.log(this.items);
  }
}
