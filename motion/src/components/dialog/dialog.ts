import { BaseComponent, Component } from '../component.js';
import { Composable } from '../page/page.js';

type onCloseListener = () => void;
type onSubmitListener = () => void;

export interface MediaData{
    readonly title: string;
    readonly url: string;
}

export interface TextData{
    readonly title: string;
    readonly body: string;
}

export class InputDialog extends BaseComponent<HTMLElement> implements Composable{
    closeListener?: onCloseListener;
    submitListener?: onSubmitListener;
    constructor(){
        super(`
            <dialog class="dialog">
                <div class="dialog__container">
                    <button class="close">&times;</button>
                    <div id="dialog__body"></div>
                    <button class="dialog__submit">ADD</button>
                </div>
            </dialog>
        `);
        const closeBtn = this.element.querySelector('.close')! as HTMLElement;
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        }
        const submitBtn = this.element.querySelector('.dialog__submit')! as HTMLElement;
        submitBtn.onclick = () => {
            this.submitListener && this.submitListener();
        }
        
    }

    setOnCloseListner(listener: onCloseListener){
        this.closeListener = listener;
    }

    setOnSubmitListner(listener: onSubmitListener){
        this.submitListener = listener
    }

    addChild(child: Component){
        const body = this.element.querySelector('#dialog__body')! as HTMLElement;
        child.attachTo(body)
    }
}