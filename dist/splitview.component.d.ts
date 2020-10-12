import { Base } from '@spectrum/sp-base';
export declare class Splitview extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    horizontal: boolean;
    vertical: boolean;
    draggable: boolean;
    collapsedstart: boolean;
    collapsedend: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-splitview': Splitview;
    }
}
