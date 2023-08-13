/// <reference types="react" />
export interface SaddleClothTdProps {
    programnumber: number;
    id?: string;
    width?: string;
    bordersize?: number;
    ref?: any;
}
export declare const SaddleClothTd: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<Omit<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "ref"> & {
    ref?: ((instance: HTMLTableDataCellElement | null) => void) | import("react").RefObject<HTMLTableDataCellElement> | null | undefined;
}, SaddleClothTdProps>>;
