import { Injectable } from '@angular/core';
import { Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';
const { Filesystem } = Plugins;


@Injectable({
    providedIn: 'root'
  })
export class FileService {

    // private fs = require('fs');

    public async readFile(): Promise<any> {
        return await Filesystem.readFile({
            path: 'storage/my-lists.json',
            directory: FilesystemDirectory.Data,
            encoding: FilesystemEncoding.UTF8
        }).catch(async (error) => {
            // alert("ERROR READ" + error);
            await this.writeFile();
        });
    }

    public async writeFile(): Promise<any> {
        const result = await Filesystem.writeFile({
            path: 'storage/my-lists.json',
            data: "[{\"id\": 0,\"name\": \"Movies\",\"description\": \"Recommended\"}]",
            directory: FilesystemDirectory.Data,
            encoding: FilesystemEncoding.UTF8,
            recursive: true
        }).catch(error => alert("WRITE ERROR " + error));
    }
}
