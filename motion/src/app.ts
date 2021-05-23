import { PageComponent } from './components/page/page.js';
import { ImageComponent } from './components/page/item/image.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { Component } from './components/component.js';
import { Composable, PageItemComponent } from './components/page/page.js';
import { InputDialog, TextData, MediaData } from './components/dialog/dialog.js';
import { MedialSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';
import { VideoComponent } from './components/page/item/video.js';

type InputComponentContructor<T = (MediaData | TextData) & Component> = {
    new(): T;
}

class App {
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToDialog<MedialSectionInput>('#new-image', MedialSectionInput, (input: MedialSectionInput) => new ImageComponent(input.title, input.url));
        this.bindElementToDialog<MedialSectionInput>('#new-video', MedialSectionInput, (input: MedialSectionInput) => new VideoComponent(input.title, input.url));
        this.bindElementToDialog<TextSectionInput>('#new-note', TextSectionInput, (input: TextSectionInput) => new NoteComponent(input.title, input.body));
        this.bindElementToDialog<TextSectionInput>('#new-todo', TextSectionInput, (input: TextSectionInput) => new TodoComponent(input.title, input.body));
        this.page.addChild(new ImageComponent('Image Title', 'https://picsum.photos/800/400'));
        this.page.addChild(new VideoComponent('Video Title', 'https://youtu.be/D7cwvvA7cP0'));
        this.page.addChild(new NoteComponent('Note Title', "Don't forget to code your dream"));
        this.page.addChild(new TodoComponent('Todo Title', 'TypeScript Course!'));
        this.page.addChild(new ImageComponent('Image Title', 'https://picsum.photos/800/400'));
        this.page.addChild(new VideoComponent('Video Title', 'https://youtu.be/D7cwvvA7cP0'));
        this.page.addChild(new NoteComponent('Note Title', "Don't forget to code your dream"));
        this.page.addChild(new TodoComponent('Todo Title', 'TypeScript Course!'));
    }

    private bindElementToDialog<T extends (MediaData | TextData) & Component>
        (selector: string, InputComponent: InputComponentContructor<T>, makeSection: (input: T) => Component) {
        const element = document.querySelector(selector)! as HTMLButtonElement;
        element.addEventListener('click', () => {
            const dialog = new InputDialog();
            const input = new InputComponent();

            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);

            dialog.setOnCloseListner(() => dialog.removeFrom(document.body));
            dialog.setOnSubmitListner(() => {
                const image = makeSection(input);
                this.page.addChild(image);
                dialog.removeFrom(document.body)
            });
        })
    }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);