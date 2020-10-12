import { html } from 'lit-element';
import { DemoSplitview } from './demo-splitview.component';

import '@spectrum/sp-splitview';
import '@spectrum/sp-container';


export default function template(this: DemoSplitview) {
  return html`
  <sp-container>
  <sp-rule medium label="Horizontal"></sp-rule>
  <sp-demo width="400" height="200">
  <pre>
<sp-splitview></sp-splitview></pre>
  </sp-demo>
  </sp-container>
  `;
  
}
