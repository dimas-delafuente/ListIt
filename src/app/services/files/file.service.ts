import { Injectable } from '@angular/core';
import { Plugins, FilesystemDirectory, FilesystemEncoding, DeviceInfo } from '@capacitor/core';
const { Filesystem } = Plugins;


@Injectable({
    providedIn: 'root'
  })
export class FileService {

    private ANDROID_DEVICE = 'android';
    private IOS_DEVICE = 'android';

    public async readFile(): Promise<any> {
        const deviceInfo = await this.getDeviceInfo();

        if (true)
            return new Promise((resolve, reject) => {
                resolve("[{\"code\": 0,\"name\": \"Movies\",\"description\": \"Recommended\"}, {\"code\": 1,\"name\": \"Series\",\"description\": \"Mis series\"}, {\"code\": 1,\"name\": \"Series\",\"description\": \"Mis series\"}]");
            });
        const directory = deviceInfo.platform === this.ANDROID_DEVICE ? FilesystemDirectory.Data : FilesystemDirectory.Documents;

        return await Filesystem.readFile({
            path: 'storage/my-lists.json',
            directory: directory,
            encoding: FilesystemEncoding.UTF8
        }).catch(async (error) => {
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

    private async getDeviceInfo(): Promise<DeviceInfo> {
        return await Plugins.Device.getInfo();
    }
}
