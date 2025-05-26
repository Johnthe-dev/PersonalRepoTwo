import {useCallback, useEffect, useState} from "react";
import type {iAssistantData} from "./layoutDataTypes.ts";

const version = 1;
const storeName = 'Assistant'
export const useLayoutData = () => {
    const [hasError, setHasError] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [db, setDb] = useState<IDBDatabase>({} as IDBDatabase);
    const [data, setData] = useState<iAssistantData[]>([]);

    const openDb = useCallback(()=> {
            return new Promise((resolve, reject) => {
                const request = window.indexedDB.open(storeName, version);

                request.onerror = (event) => {
                    console.error(event);
                    reject("Database error");
                    setHasError(true);
                };

                request.onsuccess = () => {
                    setDb(request?.result)
                    resolve(request.result);
                };
                request.onblocked = () => {
                    setIsDisabled(true);
                }

                request.onupgradeneeded = (event) => {
                    const db = (event.target as IDBOpenDBRequest)?.result;
                    if (db.objectStoreNames.contains(storeName)) {
                        db.deleteObjectStore(storeName);
                    }
                    return db.createObjectStore(storeName, {keyPath: 'id', autoIncrement: false});
                };
            });
    }, []);

    const addData = useCallback(async (data:iAssistantData):Promise<void> =>{
            return new Promise((resolve, reject)=>{
                if (!db) reject(new Error('No DB'));
                const transaction = db.transaction(storeName, 'readwrite');
                const store = transaction.objectStore(storeName);
                const request = store.add(data);

                request.onsuccess = () => resolve();
                request.onerror = () => reject(new Error('Failed to add data'));
            })

    }, [db]);

    const loadItems = useCallback(() => {
        const transaction = db.transaction(storeName, 'readonly');
        const objectStore = transaction.objectStore(storeName);
        const getAllRequest = objectStore.getAll();

        getAllRequest.onsuccess = () => {
            setData(getAllRequest.result);
        };
        getAllRequest.onerror=(event)=>{
            console.error(event);
            setHasError(true);
        }
    }, [db]);

    const updateData = useCallback((item: iAssistantData) => {
        if (db) {
            const transaction = db.transaction(storeName, 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.put(item);

            request.onsuccess = () => {
                loadItems();
            };

            request.onerror = (event) => {
                console.error('Error updating: '+event);
                setHasError(true);
            };
        }
    },[db, loadItems]);

    const deleteItem = useCallback((id: number) => {
        if (!db) return;

        const transaction = db.transaction(storeName, 'readwrite');
        const objectStore = transaction.objectStore(storeName);
        const deleteRequest = objectStore.delete(id);

        deleteRequest.onsuccess = () => {
            loadItems();
        };

        deleteRequest.onerror = (event) => {
            console.error(event);
            setHasError(true);
            console.error('Error deleting item');
        };
    },[db, loadItems]);


    useEffect(()=>{
        openDb().then(()=> {
            loadItems();
        });
        return ()=>{
            db?.close();
        }
    },[db, openDb, loadItems])

    return {
        data,
        addData,
        hasError,
        isDisabled,
        updateData,
        deleteItem
    }
}