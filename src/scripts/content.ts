const commonClassName: string = 'ts--neo-mildom';

let mutationObserver: MutationObserver = new MutationObserver(init);
let rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement) {
	mutationObserver.observe(rootElement, {
		childList: true,
		subtree: true
	});
}

init();

// 難読化対応
function getGiftPanel(): HTMLElement | null {
	return document.querySelector('div.m57z8b-0, div.gift-panel');
}

function getRelative(): HTMLElement | null {
	return document.querySelector('div.xr43zp-0, div.room-relative');
}

function getPlaybackPageMore(): HTMLElement | null {
	return document.querySelector('div.playback-page__more');
}

function getRoomChat(): HTMLElement | null {
	return document.querySelector('div.ycw4tr-0, div.chat-panel');
}

function getRoomChatHeader(): HTMLElement | null {
	return document.querySelector('div.ycw4tr-2, div.chat-panel__header');
}

function makeRoomChatHeaderCheckbox(): HTMLElement {
	let chatPanelHeaderCheckbox: HTMLElement = document.createElement('input');
	chatPanelHeaderCheckbox.setAttribute('type', 'checkbox');
	chatPanelHeaderCheckbox.setAttribute('id', 'neo-mildom--chat-panel-header');
	chatPanelHeaderCheckbox.classList.add(commonClassName);
	return chatPanelHeaderCheckbox;
}

function init() {
	if (document.querySelector(`.${commonClassName}`)) {
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
	giftCheckbox.setAttribute('id', 'neo-mildom--gift');
	giftCheckbox.classList.add(commonClassName);

	let relativeCheckbox: HTMLElement = document.createElement('input');
	relativeCheckbox.setAttribute('type', 'checkbox');
	relativeCheckbox.setAttribute('id', 'neo-mildom--relative');
	relativeCheckbox.classList.add(commonClassName);
	
	let commentCheckbox: HTMLElement = document.createElement('input');
	commentCheckbox.setAttribute('type', 'checkbox');
	commentCheckbox.setAttribute('id', 'neo-mildom--comment');
	commentCheckbox.classList.add(commonClassName);

	let displaySwitch: HTMLElement = document.createElement('div');
	displaySwitch.setAttribute('class', 'neo-mildom--display-switch');
	displaySwitch.innerHTML = `
		<div class="neo-mildom--display-switch__description">表示切替</div>
		<label for="neo-mildom--chat-panel-header" class="neo-mildom--display-switch__label">概要</label>
		<label for="neo-mildom--gift" class="neo-mildom--display-switch__label">ギフト欄</label>
		<label for="neo-mildom--relative" class="neo-mildom--display-switch__label">関連動画</label>
		<label for="neo-mildom--comment" class="neo-mildom--display-switch__label neo-mildom--display-switch__label--comment">コメント入力欄</label>`;
	displaySwitch.classList.add(commonClassName);

	getGiftPanel()?.parentNode?.insertBefore(giftCheckbox, getGiftPanel());
	getRelative()?.parentNode?.insertBefore(relativeCheckbox, getRelative());
	getRoomChat()?.parentNode?.insertBefore(commentCheckbox, getRoomChat());
	getGiftPanel()?.parentNode?.insertBefore(displaySwitch, getGiftPanel());
	getRoomChatHeader()?.parentElement?.insertBefore(makeRoomChatHeaderCheckbox(), getRoomChatHeader());
}

function initOnArchive() {
	let playbackCheckbox = document.createElement('input');
	playbackCheckbox.setAttribute('type', 'checkbox');
	playbackCheckbox.setAttribute('id', 'neo-mildom--playback');
	playbackCheckbox.classList.add(commonClassName);

	let playbackDisplaySwitch = document.createElement('div');
	playbackDisplaySwitch.setAttribute('class', 'neo-mildom--display-switch');
	playbackDisplaySwitch.innerHTML = `
		<div class="neo-mildom--display-switch__description">表示切替</div>
		<label for="neo-mildom--chat-panel-header" class="neo-mildom--display-switch__label">概要</label>
		<label for="neo-mildom--playback" class="neo-mildom--display-switch__label">アーカイブ一覧</label>`;
	playbackDisplaySwitch.classList.add(commonClassName);

	getPlaybackPageMore()?.parentNode?.insertBefore(playbackCheckbox, getPlaybackPageMore());
	getPlaybackPageMore()?.parentNode?.insertBefore(playbackDisplaySwitch, getPlaybackPageMore());
	getRoomChatHeader()?.parentElement?.insertBefore(makeRoomChatHeaderCheckbox(), getRoomChatHeader());
}