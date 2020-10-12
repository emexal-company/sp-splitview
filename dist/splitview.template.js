import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
export default function standardTemplate() {
    const classes = {
        'spectrum-SplitView--horizontal': this.horizontal,
        'spectrum-SplitView--vertical': this.vertical
    };
    //is-draggable        H/width: 304px  V/height: 50px
    //is-collapsed-start  H/width: 0  V/height: 0
    //is-collapsed-end    flex: 1
    return html `
<div class="spectrum-SplitView ${classMap(classes)}" style="height: 200px">
  <div class="spectrum-SplitView-pane" style="width: 304px">Left</div>
  <div class="spectrum-SplitView-splitter"></div>
  <div class="spectrum-SplitView-pane" style="flex: 1">Right</div>
</div>
   `;
}
//# sourceMappingURL=splitview.template.js.map