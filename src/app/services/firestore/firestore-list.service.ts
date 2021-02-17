import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, DocumentChangeAction, DocumentReference, QuerySnapshot } from '@angular/fire/firestore';
import { List } from './../../shared/entities/lists/list.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreList {
    constructor(private firestore: AngularFirestore) {

    }

    getAll(): Observable<DocumentChangeAction<List>[]> {
        return this.firestore.collection<List>('lists').snapshotChanges();
    }

    create(list: List): Promise<DocumentReference<List>> {
      return this.firestore.collection<List>('lists').add(list);
    }
}
