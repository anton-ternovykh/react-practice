import {v4 as uuidv} from 'uuid';
import {BucketType} from "./BucketType.enum.ts";

export default class TaskModel {
    public id: string;

    constructor(public title: string, public bucketType: BucketType) {
        this.id = uuidv();
    }
}