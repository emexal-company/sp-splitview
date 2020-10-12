import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './splitview.styles';
import standardTemplate from './splitview.template';

@customElement('sp-splitview')
export class Splitview extends Base {
  public static componentStyles = [labelStyles];

  @property({ type: Boolean }) public horizontal: boolean = false;
  @property({ type: Boolean }) public vertical: boolean = false;
  @property({ type: Boolean }) public draggable: boolean = false;
  @property({ type: Boolean }) public collapsedstart: boolean = false;
  @property({ type: Boolean }) public collapsedend : boolean = false;


  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-splitview': Splitview;
  }
}
