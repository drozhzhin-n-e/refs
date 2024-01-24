import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, query, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private firestore: Firestore) { }

  createRecord(record: any) {
    const recordsRef = collection(this.firestore, 'records');
    return addDoc(recordsRef, record);
  }

  getRecords(): Observable<any[]> {
    const recordsRef = collection(this.firestore, 'records');
    return collectionData(query(recordsRef), { idField: 'id' }) as Observable<any[]>;
  }
}
