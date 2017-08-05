/**
 * Created by Acery on 2017/8/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
	teacherInfo: {
		age: '',
		avatar: "../../../static/icons/topBar/indexPic.png",
		gender: '',
		mobile: "",
		name: "请登录",
		star: ''
	},// 教师登录信息
	isLogin:false, // 判断是否登录
	showSetting:false // 判断显示设备检测
}
export default new Vuex.Store({
	state,
	// getters, 计算属性暂时不用
	actions,
	mutations,
})