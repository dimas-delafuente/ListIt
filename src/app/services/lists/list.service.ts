import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from 'src/app/shared/entities/lists/list.model';
import { map } from 'rxjs/operators';
import { FirestoreList } from '../firestore/firestore-list.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {
    constructor(private firestoreList: FirestoreList) {

    }

    getAll(): Observable<List[]> {
        return this.firestoreList.getAll()
            .pipe(
                map(response => {
                    return response.docs.map(x => x.data())
                })
            );
    }

    // get(): Observable<List[]> {
    //     return this.firestore.collection('cats').snapshotChanges();
    // }
}
