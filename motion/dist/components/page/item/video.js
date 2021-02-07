import { BaseComponent } from '../../component.js';
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(`
            <section class="video">
                <div class="video__player">
                    <iframe class="video__iframe"></iframe>
                </div>
                <h3 class="page-item__title video__title"></h3>
            </section>
        `);
        const iframeElement = this.element.querySelector('.video__iframe');
        iframeElement.src = this.converToEmbeddedURL(url);
        const titleElement = this.element.querySelector('.video__title');
        titleElement.textContent = title;
    }
    converToEmbeddedURL(url) {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([\w-]{11}))|(?:youtu.be\/([\w-]{11})))/;
        const match = (url.match(regExp));
        const id = match ? match[1] || match[2] : undefined;
        if (id) {
            return `https://www.youtube.com/embed/${id}`;
        }
        return url;
    }
}
