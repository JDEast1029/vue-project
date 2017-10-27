import API from '@/store/api';

const BASE_URL = 'http://localhost:8080';

const fetchMixin = {
	methods: {
		ATFetcher: function(commit, {type, method, params, onSuccess, onFailed}) {
			let formData = null;
			let uri = '';
			//TODO 会根据type，在url后加上对应的接口
			let url = BASE_URL;

			if (!type && !API[type]) return;
			url = url + API[type];

			//请求类型转大写
			method = method && method.toLocaleUpperCase();

			//根据method来生成相应的传递数据格式
			if (method === 'POST') {
				formData = new FormData();
				for (let key in params) {
					if (!!params[key]) {
						formData.append(key, params[key]);
					}
				}
			} else if (method === 'GET') {
				for (let key in params) {
					if (!!params[key]) {
						uri += key + '=' + params[key] + '&';
					}
				}

				uri = uri.substring(0, uri.length - 1);
				url += uri;
			} else {
				console.error('暂不支持改请求类型');
				return;
			}

			//TODO Loading commit
			// commit('increate');
			post(url, formData)
			.then((data) => {
				onSuccess && onSuccess();
				// commit(type);
			})
			.catch((err) => {
				onFailed && onFailed(err);
			});
		}
	}
};

const post = (url, body) => {

	if (process.env.NODE_ENV === 'development') {
		console.log('url：' + url);
		console.log('body：' + body);
	}

	return new Promise((resolve, reject) => {
		fetch(url, {
			headers: {
				'Accept': 'application/json',
				'Content-Type':'application/json',
			},
			body: body
		})
		.then((response) => response.text())
		.then((responseText) => {
			try {
				const res = JSON.parse(responseText);
				if (res.status === -1) {
					reject({
						msg: '登录失效',
						code: res.status
					});
				} else {
					res.status
						? resolve(res.data)
						: reject({msg: res, code: 4}); //code: 4 Toast显示错误
				}
			} catch(err) {
				reject({
					msg: '系统异常',
					code: 3
				});
			}
		})
		.catch((err) => {
			if (process.env.NODE_ENV === 'development') {
				console.error(err);
			}

			reject({
				msg: '网络异常',
				code: 2
			});
		});
	});
};

export default fetchMixin;
