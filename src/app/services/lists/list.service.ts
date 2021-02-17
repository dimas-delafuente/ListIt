import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from 'src/app/shared/entities/lists/list.model';
import { map } from 'rxjs/operators';
import { FirestoreList } from '../firestore/firestore-list.service';
import { DocumentChangeAction, DocumentReference, QueryDocumentSnapshot, QuerySnapshot } from '@angular/fire/firestore';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
    constructor(private firestoreList: FirestoreList) {

    }

    getAll(): Observable<List[]> {
        return this.firestoreList.getAll()
            .pipe(
                map((listsSnapshot) => listsSnapshot.map((x: DocumentChangeAction<List>) => this.mapList(x)))
            );
    }

    createList(list: List): Observable<List> {
        return from(this.firestoreList.create(list))
            .pipe(
                map((x: DocumentReference<List>) => {
                    return {
                        id: x.id,
                        name: list.name,
                        description: list.description
                    };
                })
            );
    }

    private mapList(x: any): List {
        const item = x.payload.doc.data();
        const itemId = x.payload.doc.id;
        return {
            id: itemId,
            name: item.name,
            description: item.description
        };
    }

}
