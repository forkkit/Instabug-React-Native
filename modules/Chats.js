import {
    NativeModules
  } from 'react-native';
  let { IBGChats } = NativeModules;

/**
 * Chats
 * @exports Chats
 */
export default {
    /* istanbul ignore next */
    /**
     * @deprecated See https://docs.instabug.com/docs/ios-sdk-8-6-migration-guide#section-show for instructions on migrating to SDK v8.6 APIs.
     * Enables and disables everything related to creating new chats.
     * @param {boolean} isEnabled 
     */
    setEnabled(isEnabled) {
        IBGChats.setEnabled(isEnabled);
    },

    /* istanbul ignore next */
    /**
     * @deprecated See https://docs.instabug.com/docs/ios-sdk-8-6-migration-guide#section-show for instructions on migrating to SDK v8.6 APIs.
     * Manual invocation for chats view. 
     */
    show() {
        IBGChats.show();
    }
}
