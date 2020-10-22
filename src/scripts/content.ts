init();

let mutationObserver: MutationObserver = new MutationObserver(init);
let rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement) {
	mutationObserver.observe(rootElement, { childList: true, subtree: true });
}

function init() {
	if (document.querySelector('div.neo-mildom--display-switch')) {
		return;
	}

	if (document.querySelector('div.room-relative') && document.querySelector('div.gift-panel')) {
		initOnLive();
	}
	else if (document.querySelector('div.playback-page__more')) {
		initOnArchive();
	}
	else {
		return;
	}
}

function initOnLive() {
	let giftCheckbox = document.createElement('input');
	giftCheckbox.setAttribute('type', 'checkbox');
	giftCheckbox.setAttribute('id', 'neo-mildom--gift');

	let relativeCheckbox = document.createElement('input');
	relativeCheckbox.setAttribute('type', 'checkbox');
	relativeCheckbox.setAttribute('id', 'neo-mildom--relative');

	let commentCheckbox = document.createElement('input');
	commentCheckbox.setAttribute('type', 'checkbox');
	commentCheckbox.setAttribute('id', 'neo-mildom--comment');

	let displaySwitch = document.createElement('div');
	displaySwitch.setAttribute('class', 'neo-mildom--display-switch');
	displaySwitch.innerHTML = '<div class="neo-mildom--display-switch__description">表示切替</div><label for="neo-mildom--gift" class="neo-mildom--display-switch__label">ギフト欄</label><label for="neo-mildom--relative" class="neo-mildom--display-switch__label">関連動画</label><label for="neo-mildom--comment" class="neo-mildom--display-switch__label neo-mildom--display-switch__label--comment">コメント入力欄</label>';

	let giftPanel = document.querySelector('div.gift-panel');
	giftPanel?.parentNode?.insertBefore(displaySwitch, giftPanel);
	giftPanel?.parentNode?.insertBefore(giftCheckbox, giftPanel);

	let roomRelative = document.querySelector('div.room-relative');
	roomRelative?.parentNode?.insertBefore(relativeCheckbox, roomRelative);

	let commentPanel = document.querySelector('div.chat-panel');
	commentPanel?.parentNode?.insertBefore(commentCheckbox, commentPanel);
}

function initOnArchive() {
	let playbackCheckbox = document.createElement('input');
	playbackCheckbox.setAttribute('type', 'checkbox');
	playbackCheckbox.setAttribute('id', 'neo-mildom--playback');

	let playbackDisplaySwitch = document.createElement('div');
	playbackDisplaySwitch.setAttribute('class', 'neo-mildom--display-switch');
	playbackDisplaySwitch.innerHTML = '<div class="neo-mildom--display-switch__description">表示切替</div><label for="neo-mildom--playback" class="neo-mildom--display-switch__label">アーカイブ一覧</label>';

	let playbackPageMore = document.querySelector('div.playback-page__more');
	playbackPageMore?.parentNode?.insertBefore(playbackDisplaySwitch, playbackPageMore);
	playbackPageMore?.parentNode?.insertBefore(playbackCheckbox, playbackPageMore);
}