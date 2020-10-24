"use strict";var COMMON_CLASS_NAME="ts--neo-mildom",OBFUSCATED_GIFT_PANEL="div.m57z8b-0",OBFUSCATED_RELATIVE="div.xr43zp-0",OBFUSCATED_ROOM_CHAT="div.xb72g0-2",OBFUSCATED_CHAT_PANEL_HEADER="div.ycw4tr-2",OBFUSCATED_CHAT_PANEL="div.ycw4tr-0",OBFUSCATED_CHAT_PANEL_FOOTER_CONTAINER="div.ycw4tr-3",DISPLAY_SWITCH_CLASS="neo-mildom--display-switch",DISPLAY_SWITCH_LABEL_CLASS=DISPLAY_SWITCH_CLASS+"__label",DISPLAY_SWITCH_DESCRIPTION_CLASS=DISPLAY_SWITCH_CLASS+"__description",GIFT_ID="neo-mildom--gift",CHAT_PANEL_HEADER_ID="neo-mildom--chat-panel-header",RELATIVE_ID="neo-mildom--relative",COMMENT_ID="neo-mildom--comment",PLAYBACK_ID="neo-mildom--playback",mutationObserver=new MutationObserver(init),rootElement=document.getElementById("root");function getGiftPanel(){return document.querySelector("div.gift-panel, "+OBFUSCATED_GIFT_PANEL)}function getRelative(){return document.querySelector("div.room-relative, "+OBFUSCATED_RELATIVE)}function getPlaybackPageMore(){return document.querySelector("div.playback-page__more")}function getChatPanel(){return document.querySelector("div.chat-panel, "+OBFUSCATED_CHAT_PANEL)}function getChatPanelHeader(){return document.querySelector("div.chat-panel__header, "+OBFUSCATED_CHAT_PANEL_HEADER)}function makeRoomChatHeaderCheckbox(){var e=document.createElement("input");return e.setAttribute("type","checkbox"),e.setAttribute("id",CHAT_PANEL_HEADER_ID),e.classList.add(COMMON_CLASS_NAME),e}function init(){document.querySelector("."+COMMON_CLASS_NAME)||(getRelative()&&getGiftPanel()?initOnLive():getPlaybackPageMore()&&initOnArchive())}function initOnLive(){var e,t=document.createElement("input");t.setAttribute("type","checkbox"),t.setAttribute("id",GIFT_ID),t.classList.add(COMMON_CLASS_NAME);var n=document.createElement("input");n.setAttribute("type","checkbox"),n.setAttribute("id",RELATIVE_ID),n.classList.add(COMMON_CLASS_NAME);var a=document.createElement("input");a.setAttribute("type","checkbox"),a.setAttribute("id",COMMENT_ID),a.classList.add(COMMON_CLASS_NAME);var i=document.createElement("div");i.setAttribute("class",DISPLAY_SWITCH_CLASS),i.innerHTML='\n\t\t<div class="'+DISPLAY_SWITCH_DESCRIPTION_CLASS+'">表示切替</div>\n\t\t<label for="'+CHAT_PANEL_HEADER_ID+'" class="'+DISPLAY_SWITCH_LABEL_CLASS+'">概要</label>\n\t\t<label for="'+GIFT_ID+'" class="'+DISPLAY_SWITCH_LABEL_CLASS+'">ギフト欄</label>\n\t\t<label for="'+RELATIVE_ID+'" class="'+DISPLAY_SWITCH_LABEL_CLASS+'">関連動画</label>\n\t\t<label for="'+COMMENT_ID+'" class="'+DISPLAY_SWITCH_LABEL_CLASS+" "+DISPLAY_SWITCH_LABEL_CLASS+'--comment">コメント入力欄</label>',i.classList.add(COMMON_CLASS_NAME),null!==(e=null===(e=getGiftPanel())||void 0===e?void 0:e.parentNode)&&void 0!==e&&e.insertBefore(t,getGiftPanel()),null!==(t=null===(t=getRelative())||void 0===t?void 0:t.parentNode)&&void 0!==t&&t.insertBefore(n,getRelative()),null!==(n=null===(n=getChatPanel())||void 0===n?void 0:n.parentNode)&&void 0!==n&&n.insertBefore(a,getChatPanel()),null!==(a=null===(a=getGiftPanel())||void 0===a?void 0:a.parentNode)&&void 0!==a&&a.insertBefore(i,getGiftPanel()),null!==(i=null===(i=getChatPanelHeader())||void 0===i?void 0:i.parentElement)&&void 0!==i&&i.insertBefore(makeRoomChatHeaderCheckbox(),getChatPanelHeader())}function initOnArchive(){var e,t=document.createElement("input");t.setAttribute("type","checkbox"),t.setAttribute("id",PLAYBACK_ID),t.classList.add(COMMON_CLASS_NAME);var n=document.createElement("div");n.setAttribute("class",DISPLAY_SWITCH_CLASS),n.innerHTML='\n\t\t<div class="'+DISPLAY_SWITCH_DESCRIPTION_CLASS+'">表示切替</div>\n\t\t<label for="'+CHAT_PANEL_HEADER_ID+'" class="'+DISPLAY_SWITCH_LABEL_CLASS+'">概要</label>\n\t\t<label for="'+PLAYBACK_ID+'" class="'+DISPLAY_SWITCH_LABEL_CLASS+'">アーカイブ一覧</label>',n.classList.add(COMMON_CLASS_NAME),null!==(e=null===(e=getPlaybackPageMore())||void 0===e?void 0:e.parentNode)&&void 0!==e&&e.insertBefore(t,getPlaybackPageMore()),null!==(t=null===(t=getPlaybackPageMore())||void 0===t?void 0:t.parentNode)&&void 0!==t&&t.insertBefore(n,getPlaybackPageMore()),null!==(n=null===(n=getChatPanelHeader())||void 0===n?void 0:n.parentElement)&&void 0!==n&&n.insertBefore(makeRoomChatHeaderCheckbox(),getChatPanelHeader())}rootElement&&mutationObserver.observe(rootElement,{childList:!0,subtree:!0}),init();