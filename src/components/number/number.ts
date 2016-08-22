import { FormioComponents } from '../components';
import { BaseElement } from '../base';
import { InputComponent, InputOptions } from '../input/input';
import { FormioTemplate } from '../../formio.template';
import { FormGroup } from '@angular/forms';

export class NumberComponent extends InputComponent<InputOptions> {
    constructor(form: FormGroup, settings:any) {
        super('number', form, settings);
    }
}

export class NumberElement extends BaseElement<NumberComponent> {}
export function NumberField(template:FormioTemplate) {
    FormioComponents.register('number', NumberComponent, NumberElement, {
        template: template.components.input
    });
    return NumberElement;
};