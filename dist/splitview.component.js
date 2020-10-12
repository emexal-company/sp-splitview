import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import labelStyles from './splitview.styles';
import standardTemplate from './splitview.template';
let Splitview = class Splitview extends Base {
    constructor() {
        super(...arguments);
        this.horizontal = false;
        this.vertical = false;
        this.draggable = false;
        this.collapsedstart = false;
        this.collapsedend = false;
    }
    render() {
        return standardTemplate.call(this);
    }
};
Splitview.componentStyles = [labelStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Splitview.prototype, "horizontal", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Splitview.prototype, "vertical", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Splitview.prototype, "draggable", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Splitview.prototype, "collapsedstart", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Splitview.prototype, "collapsedend", void 0);
Splitview = __decorate([
    customElement('sp-splitview')
], Splitview);
export { Splitview };
//# sourceMappingURL=splitview.component.js.map