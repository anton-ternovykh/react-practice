import TaskModel from "./TaskModel.ts";
import {BucketType} from "./BucketType.enum.ts";

export default class BucketModel {
    public tasks: TaskModel[] = [];

    constructor(public title: string, public bucketType: BucketType) {
    }
}