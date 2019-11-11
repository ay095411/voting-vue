<template>
	<div class="home">
		<!-- 头部跑马灯 -->
		<van-notice-bar :text="lists" left-icon="volume-o" />
		<!-- 背景图片 -->
		<el-row>
			<el-col :span="24">
				<el-carousel class="banner-carousel" :interval="3000" arrow="never">
					<el-carousel-item v-for="item in 4" :key="item">
						<img class="banner" src="../../../static/images/banner.jpeg" alt="">
					</el-carousel-item>
				</el-carousel>
			</el-col>
		</el-row>
		<!-- 统计 -->
		<el-row>
			<el-col :span="24">
				<div class="total">
					<div class="total-header">
						<div class="total-li">
							<p>参与商家</p>
							<p>{{statistics.cysj}}</p>
						</div>
						<div class="total-li">
							<p>总票数</p>
							<p>{{statistics.zps}}</p>
						</div>
						<div class="total-li">
							<p>浏览量</p>
							<p>{{statistics.lll}}</p>
						</div>
					</div>
					<!-- 投票时间 -->
					<div class="total-timer">
						<div>
							<i class="el-icon-date" style="color: #F37B1D;font-size: 14px;"></i>
							<span>投票日期 : </span>
							<span>{{createTime}}到{{endTime}}</span>
						</div>
						<div>
							<i class="el-icon-time" style="color: #F37B1D;font-size: 14px;"></i>
							<span>活动剩余 : </span>
							<span>{{timer}}</span>
						</div>
					</div>
				</div>
			</el-col>
		</el-row>
		<!-- 搜索 -->
		<el-form class="search-form">
			<el-form-item>
				<el-input v-model="searchData" placeholder="请输入商家编号或关键字"></el-input>
			</el-form-item>
			<el-button type="primary" icon="el-icon-search" class="search-btn" @click="searchBtn"></el-button>
			<el-button type="primary" icon="el-icon-refresh-right" class="search-reset" @click="resetBtn"></el-button>
		</el-form>
		<!-- 内容 -->
		<div class="main">
			<div class="main-content" v-for="(item,index) in list" :key="index">
				<div class="main-li">
					<img :src="item.img" alt="">
					<div class="main-top">
						<p class="am-badge-danger">{{item.num}}号</p>
						<p>{{item.name}}</p>
					</div>
					<div class="main-bottom">
						<p>
							<i class="el-icon-star-off" style="color: #F37B1D;" v-if="!item.flag"></i>
							<i class="el-icon-star-on" style="color: #F37B1D;" v-else></i>
							<span>{{item.number}}</span>
						</p>
						<el-button type="danger" icon="el-icon-thumb" @click="vote(item)">投票</el-button>
					</div>
				</div>
			</div>
			<van-pagination v-model="currentPage" :page-count="12" mode="simple" />
		</div>
		<!-- 活动规则 -->
		<div class="footer">
			<div class="footer-hhgz">
				<i class="el-icon-bell"></i>
				<span>活动规则</span>
			</div>
			<div class="footer-content">
				<p>本次网络评选大赛活动真实可靠、公平公正、免费报名、免费参与、请各位商家放心！我方不会收取商家任何参与费用。</p>
				<p>每个微信号间隔2小时可投一票，每天最多可投12票。活动中加速投票为自愿赠送行为，独自承担相关责任，与主办方无关，赠送后无法退还，主办方不承担任何法律责任，请各位商家谨慎使用</p>
				<p>在商家详情页面，商家可联系工作人员修改展示图片，在参赛宣言可展示商家的促销信息，产品信息，介绍信息，招聘信息等等。</p>
				<p>如有问题可以添加主办方微信号：123456789</p>
				<p>
					<strong>互联网时代 :</strong>
					<span>网络宣传传播更快、便捷、高效！老店需要持续宣传，树立品牌形象! 新店更需要大力宣传，提高知名度!</span>
				</p>
				<p><strong>主办单位：诚信商家网</strong></p>
				<p><strong>协办单位：天歌文化传播</strong></p>
				<p><strong>特别感谢：腾讯社交广告服务商（天歌文化）</strong></p>
				<p><strong>特别说明:如遇到活动链接失效，请联系客服重新获取活动链接</strong></p>
				<p style="float: right;"><strong>本活动最终解释权为主办方</strong></p>
			</div>
		</div>
		<wTab></wTab>
	</div>
</template>

<script>
	import {
		publicMethod
	} from "../../../utils/pubilc.js";
	export default {
		data() {
			return {
				//头部滚动字幕
				lists: '2019首届黑龙江省哈尔滨市呼兰县A-9“诚信商家”的评选大赛特别提示:本次活动、公平、公正、公开、此活动免费报名，免费参与，本次活动主要是宣传推广，增加商家人气！本次评选大赛商家均由黑龙江省哈尔滨市呼兰县市民推荐。',
				//统计数据
				statistics: {
					cysj: 46,
					zps: 89943,
					lll: 91996
				},
				//搜索数据
				searchData: undefined,
				currentPage: 1, //当前页码
				list: [{ //模拟商家总数据
						num: 27,
						name: '赛唯洗衣生活馆',
						img: require('../../../static/images/list.jpeg'),
						flag: false,
						number: 7469
					},
					{
						num: 28,
						name: '赛唯洗衣生活馆',
						img: require('../../../static/images/list.jpeg'),
						flag: false,
						number: 7469
					},
					{
						num: 29,
						name: '赛唯洗衣生活馆',
						img: require('../../../static/images/list.jpeg'),
						flag: false,
						number: 7469
					},
					{
						num: 30,
						name: '赛唯洗衣生活馆',
						img: require('../../../static/images/list.jpeg'),
						flag: false,
						number: 7469
					}
				],
				searchList: [], //搜索的数据
				createTime: '2019-11-08',
				endTime: '2019-12-01',
				timer: null, //活动结束时间
			}
		},
		methods: {
			//投票按钮
			vote(e) {
				if (e.flag) {
					this.$toast('您已经投过票了');
				} else {
					e.number++;
					e.flag = true;
					console.log(this.list)
					let num = 0;
					this.list.forEach((item, index) => {
						num += item.number;
					})
					this.statistics.zps = num; //总票数
					this.$toast.success('投票成功');
				}
			},
			//搜索按钮
			searchBtn() {
				this.$toast('您点击了搜索');
			},
			//重置按钮
			resetBtn() {
				this.$toast('您点击了重置');
				this.searchList = []; //清空搜索数据
				this.searchData = undefined;
			}
		},
		mounted() {
			this.statistics.cysj = this.list.length; //参与商家
			let num = 0;
			this.list.forEach((item, index) => {
				num += item.number; //累加计算总数
			})
			this.statistics.zps = num; //总票数
			this.statistics.lll = this.$cookies.get('counter'); //统计

			//获取活动结束时间
			let endTime = this.endTime + ' 18:59:00';
			let time = publicMethod.getTimestamp(endTime);
			this.timer = publicMethod.computedResidualTime(time)
			setInterval(() => {
				this.timer = publicMethod.computedResidualTime(time)
			}, 1000)
		},
		destroyed() {
			clearInterval()
		}
	}
</script>

<style scoped="scoped" lang="less">
	.van-notice-bar {
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
		height: 14px;
		padding: 6px 0;
		font-size: 12px;
		overflow: hidden;
		background: rgba(0, 0, 0, 0.6);
		color: #FFF;
		z-index: 4;
		display: flex;
		align-items: center;
		
	}

	.home /deep/ .van-notice-bar__content {
		text-indent: 120px !important;
	}
	.home /deep/ .van-notice-bar__left-icon {
		margin: 0 6px !important;
	}

	.banner-carousel {
		height: 208px;

		& .banner {
			width: 100%;
			height: 208px;
		}
	}

	.banner-carousel /deep/ .el-carousel__container {
		height: 208px !important;
	}

	.total {
		width: 100%;
		height: 130px;

		& .total-header {
			width: 100%;
			height: 64px;
			display: flex;
			align-items: center;
			justify-content: space-around;

			& .total-li {
				width: 125px;
				text-align: center;

				p {
					&:first-of-type {
						font-size: 12px;
					}

					&:last-of-type {
						font-size: 20px;
						margin-top: 8px;
					}
				}
			}
		}

		.total-timer {
			width: 100%;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			padding: 6px 0;
			border-top: 1px dotted #333;
			border-bottom: 1px dotted #333;

			div {
				width: 100%;
				margin: 3px 18px 0;

				& span {
					font-size: 15px;
				}
			}
		}
	}

	.search-form {
		position: relative;
		width: 350px;
		margin: 0 auto;

		& .el-form-item {
			width: 258px;
			margin: 10px 0 !important;
		}

		.search-btn,
		.search-reset {
			position: absolute;
			width: 48px;
			right: 0;
			top: 0;
			border-radius: 0 !important;
			background: #E6E6E6;
			display: flex;
			justify-content: center;
			border: 1px solid #DCDFE6;
		}

		.search-btn {
			right: 48px;
			border-right: 1px solid #DCDFE6 !important;
		}
	}

	.main {
		width: 96%;
		margin: 0 auto;
		padding-bottom: 20px;
		box-sizing: border-box;

		& .main-content {
			width: 43%;
			padding: 3px;
			margin: .5rem;
			float: left;
			border: 1px solid #CCC;

			& .main-li {
				position: relative;
				height: 257px;

				& img {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}

				.main-top,
				.main-bottom {
					position: absolute;
					left: 0;
					display: flex;
					align-items: center;
				}

				.main-top {
					width: 100%;
					height: 26px;
					background: rgba(255, 255, 255, .7);
					top: 0;
					font-size: 12px;

					& .am-badge-danger {
						min-width: 10px;
						color: #fff;
						line-height: 1;
						background: #dd514c;
						padding: 2px 3px;
						margin: 0 6px;
					}
				}

				& .main-bottom {
					width: 100%;
					bottom: 0;
					height: 32px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background: #FFF;

					& p {
						display: flex;
						align-items: center;
						flex-grow: 1;
						height: 100%;
						overflow: hidden;
						background: #f5f5f5;

						& span {
							color: #F37B1D;
						}

						& i {
							margin: 0 4px;
						}
					}

					& button {
						background: #dd514c;
						height: 32px;
						width: 72px;
						border: none;
						border-radius: 0 !important;
						font-size: 13px;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}
		}

		& .van-pagination {
			clear: both;
			text-align: center;
			padding-top: 30px;
		}
	}

	.footer {
		width: 100%;
		border-top: 1px dotted #ccc;
		padding-bottom: 120px;

		& .footer-hhgz {
			width: 90%;
			margin: 20px auto 40px;
			font-size: 14px;
		}

		& .footer-content {
			width: 90%;
			margin: 0 auto;

			& p {
				font-size: 12px;
				margin: 18px 0;
			}
		}
	}
</style>
