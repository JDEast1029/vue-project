/**
 * Created by AT on 2017/10/31.
 * ---------  工具类  ----------
 */

/**
 * 去掉字符串两边空格
 * @param str
 */
export const trim = (str) => {
	if (typeof str === 'string') {
		return str.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,'')
	}
	console.error('参数类型错误');
	return !1;
};

/**
 * 内容是否为空
 * @param char 过滤后的字符串
 * @returns {boolean}
 */
export const isContent = (char) => {
	if (typeof char === 'string') return !char;
	console.error('参数类型错误');
	return !1;
};
