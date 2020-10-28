const COMMON_CLASS_NAME: string = 'ts--neo-mildom';
// 難読化対応
const OBFUSCATED_GIFT_PANEL: string = 'div.m57z8b-0';
const OBFUSCATED_RELATIVE: string = 'div.xr43zp-0';
const OBFUSCATED_ROOM_CHAT: string = 'div.xb72g0-2';
const OBFUSCATED_CHAT_PANEL_HEADER: string = 'div.ycw4tr-2';
const OBFUSCATED_CHAT_PANEL: string = 'div.ycw4tr-0';
const OBFUSCATED_CHAT_PANEL_FOOTER_CONTAINER: string = 'div.ycw4tr-3';

const DISPLAY_SWITCH_CLASS: string = 'neo-mildom--display-switch';
const DISPLAY_SWITCH_LABEL_CLASS: string = `${DISPLAY_SWITCH_CLASS}__label`;
const DISPLAY_SWITCH_DESCRIPTION_CLASS: string = `${DISPLAY_SWITCH_CLASS}__description`;
const GIFT_ID: string = 'neo-mildom--gift';
const CHAT_PANEL_HEADER_ID: string = 'neo-mildom--chat-panel-header';
const RELATIVE_ID: string = 'neo-mildom--relative';
const COMMENT_ID: string = 'neo-mildom--comment';
const PLAYBACK_ID: string = 'neo-mildom--playback';

let mutationObserver: MutationObserver = new MutationObserver(init);
let rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement) {
	mutationObserver.observe(rootElement, {
		childList: true,
		subtree: true
	});
}

init();

function getGiftPanel(): HTMLElement | null {
	return document.querySelector(`div.gift-panel, ${OBFUSCATED_GIFT_PANEL}`);
}

function getRelative(): HTMLElement | null {
	return document.querySelector(`div.room-relative, ${OBFUSCATED_RELATIVE}`);
}

function getPlaybackPageMore(): HTMLElement | null {
	return document.querySelector('div.playback-page__more');
}

function getChatPanel(): HTMLElement | null {
	return document.querySelector(`div.chat-panel, ${OBFUSCATED_CHAT_PANEL}`);
}

function getChatPanelHeader(): HTMLElement | null {
	return document.querySelector(`div.chat-panel__header, ${OBFUSCATED_CHAT_PANEL_HEADER}`);
}

function makeRoomChatHeaderCheckbox(): HTMLElement {
	let chatPanelHeaderCheckbox: HTMLElement = document.createElement('input');
	chatPanelHeaderCheckbox.setAttribute('type', 'checkbox');
	chatPanelHeaderCheckbox.setAttribute('id', CHAT_PANEL_HEADER_ID);
	chatPanelHeaderCheckbox.classList.add(COMMON_CLASS_NAME);
	return chatPanelHeaderCheckbox;
}

function init() {
	if (document.querySelector(`.${COMMON_CLASS_NAME}`)) {
		return;
	}

	// 配信ページ
	if (getRelative() && getGiftPanel()) {
		initOnLive();
	}
	// アーカイブページ
	else if (getPlaybackPageMore()) {
		initOnArchive();
	}
}

function initOnLive() {
	let giftCheckbox: HTMLElement = document.createElement('input');
	giftCheckbox.setAttribute('type', 'checkbox');
	giftCheckbox.setAttribute('id', GIFT_ID);
	giftCheckbox.classList.add(COMMON_CLASS_NAME);

	let relativeCheckbox: HTMLElement = document.createElement('input');
	relativeCheckbox.setAttribute('type', 'checkbox');
	relativeCheckbox.setAttribute('id', RELATIVE_ID);
	relativeCheckbox.classList.add(COMMON_CLASS_NAME);
	
	let commentCheckbox: HTMLElement = document.createElement('input');
	commentCheckbox.setAttribute('type', 'checkbox');
	commentCheckbox.setAttribute('id', COMMENT_ID);
	commentCheckbox.classList.add(COMMON_CLASS_NAME);

	let displaySwitch: HTMLElement = document.createElement('div');
	displaySwitch.setAttribute('class', DISPLAY_SWITCH_CLASS);
	displaySwitch.innerHTML = `
		<div class="${DISPLAY_SWITCH_DESCRIPTION_CLASS}">表示切替</div>
		<label for="${CHAT_PANEL_HEADER_ID}" class="${DISPLAY_SWITCH_LABEL_CLASS}">概要</label>
		<label for="${GIFT_ID}" class="${DISPLAY_SWITCH_LABEL_CLASS}">ギフト欄</label>
		<label for="${RELATIVE_ID}" class="${DISPLAY_SWITCH_LABEL_CLASS}">関連動画</label>
		<label for="${COMMENT_ID}" class="${DISPLAY_SWITCH_LABEL_CLASS} ${DISPLAY_SWITCH_LABEL_CLASS}--comment">コメント入力欄</label>`;
	displaySwitch.classList.add(COMMON_CLASS_NAME);

	getGiftPanel()?.parentNode?.insertBefore(giftCheckbox, getGiftPanel());
	getRelative()?.parentNode?.insertBefore(relativeCheckbox, getRelative());
	getChatPanel()?.parentNode?.insertBefore(commentCheckbox, getChatPanel());
	getGiftPanel()?.parentNode?.insertBefore(displaySwitch, getGiftPanel());
	getChatPanelHeader()?.parentElement?.insertBefore(makeRoomChatHeaderCheckbox(), getChatPanelHeader());
}

function initOnArchive() {
	let playbackCheckbox = document.createElement('input');
	playbackCheckbox.setAttribute('type', 'checkbox');
	playbackCheckbox.setAttribute('id', PLAYBACK_ID);
	playbackCheckbox.classList.add(COMMON_CLASS_NAME);

	let playbackDisplaySwitch = document.createElement('div');
	playbackDisplaySwitch.setAttribute('class', DISPLAY_SWITCH_CLASS);
	playbackDisplaySwitch.innerHTML = `
		<div class="${DISPLAY_SWITCH_DESCRIPTION_CLASS}">表示切替</div>
		<label for="${CHAT_PANEL_HEADER_ID}" class="${DISPLAY_SWITCH_LABEL_CLASS}">概要</label>
		<label for="${PLAYBACK_ID}" class="${DISPLAY_SWITCH_LABEL_CLASS}">アーカイブ一覧</label>`;
	playbackDisplaySwitch.classList.add(COMMON_CLASS_NAME);

	getPlaybackPageMore()?.parentNode?.insertBefore(playbackCheckbox, getPlaybackPageMore());
	getPlaybackPageMore()?.parentNode?.insertBefore(playbackDisplaySwitch, getPlaybackPageMore());
	getChatPanelHeader()?.parentElement?.insertBefore(makeRoomChatHeaderCheckbox(), getChatPanelHeader());
}