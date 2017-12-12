import EventManager from "./event-manager";
import BoxPostList from './box-post-list';

export default class BoxPostForm{

    static boxId = 'box-post-form';
    static EVENT_CLICK_HIDDEN_BOX_FORM = 'box-post-form-click-hidden';
    private buttonListSelector = `#${BoxPostForm.boxId}>button[type=button]`;

    constructor(private eventManager: EventManager) {
        this.init();
    }

    private init() {
        const buttonForm = document.querySelector(this.buttonListSelector);
        buttonForm.addEventListener('click', () => {
            this.hiddenBox();

            //const boxList = document.getElementById(BoxPostList.boxId);
            //boxList.removeAttribute('style');
            this.eventManager.runEvent(BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM);
        });
        this.eventManager.addListener(BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST, () => {
            this.showBox();
        });
    }

    hiddenBox() {
        const boxForm = document.getElementById(BoxPostForm.boxId);
        boxForm.style.display = 'none';
    }

    showBox() {
        const boxForm = document.getElementById(BoxPostForm.boxId);
        boxForm.removeAttribute('style');
    }
}