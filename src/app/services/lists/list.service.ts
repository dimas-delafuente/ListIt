import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { FileService } from '../files/file.service';
import { List } from 'src/app/shared/entities/lists/list.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {
    constructor(private fileService: FileService) {

    }

    getAll(): Observable<List[]> {
        return from(this.fileService.readFile())
            .pipe(
                map(data => JSON.parse(data.data))
            );
    }

    // private mockList(): Array<List> {
    //     let mockList = new Array<List>();
    //     const testList = new List(0, 'Test', 'Description');
    //     const testList1 = new List(1, 'Movies', 'Recommended movies');

    //     mockList.push(testList);
    //     mockList.push(testList1);
    //     from
    //     this.fileService.readFile()
    //         .then(data =>  alert("SUCCESS " + data));
    //     return mockList;
    // }

    // private fromList() {
    //     this.fileService.readFile()
    // }
}
