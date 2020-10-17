import { Item } from './Item.model';

export interface Motherboard extends Item {
    chipset: string,
    forProc: string
}