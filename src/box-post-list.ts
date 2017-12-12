import EventManager from './event-manager';
import BoxPostForm from './box-post-form';

export default class BoxPostList{

    static boxId = 'box-post-list';
    static EVENT_CLICK_HIDDEN_BOX_LIST = 'box-post-list-click-hidden';
    private buttonFormSelector = `#${BoxPostList.boxId}>button[type=button]`;

    constructor(private eventManager: EventManager) {
        this.init();
    }

    private init() {
        const buttonList = document.querySelector(this.buttonFormSelector);
        buttonList.addEventListener('click', () => {
            this.hiddenBox();

            this.eventManager.runEvent(BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST);
            //const boxForm = document.getElementById(BoxPostForm.boxId);
            //boxForm.removeAttribute('style');

            //func 1
            //func 2
            //func 3
        });
        this.eventManager.addListener(BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM, () => {
            this.showBox();
        });
        this.eventManager.addListener(BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM, () => {
            //faço outra coisa
        });
        this.eventManager.addListener(BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM, () => {
            //faço outra coisa
        });
        //this.eventManager.addListener('box-post-form-click-hidden');
    }

    hiddenBox() {
        const boxList = document.getElementById(BoxPostList.boxId);
        boxList.style.display = 'none';
    }

    showBox() {
        const boxList = document.getElementById(BoxPostList.boxId);
        boxList.removeAttribute('style');
    }
}