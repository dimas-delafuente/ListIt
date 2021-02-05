import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { List } from './../../shared/entities/lists/list.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreList {
    constructor(private firestore: AngularFirestore) {

    }

    getAll(): Observable<QuerySnapshot<List>> {
        return this.firestore.collection<List>('lists').get();
    }
}
