import {helper} from '@ember/component/helper';

export default helper(([action]) => action || (() => {}));
