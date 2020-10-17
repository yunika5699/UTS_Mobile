import { Item } from './Item.model';

export interface Cpu extends Item {
    baseclock: number,
    boostclock: number,
    core: number,
    thread: number
}