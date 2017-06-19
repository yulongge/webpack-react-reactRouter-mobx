import React from 'react';
import { Link } from 'react-router'
import './style'

export default class Detail extends React.Component {
	constructor(...args) {
		super(...args);
		this.Data = [1, 2, 3, 4, 5];
	}

	render() {
		return (
			<div className="Detail">
				<div className="Detail__Ins">
					<div className="Detail__Ins__Img">
						<img src={ require("assets/img/ins.png")} />
					</div>
					<div className="Detail__Ins__Desc">
						<p className="Detail__Ins__Desc__Name">幸运大转盘积分翻倍抽奖</p>
						<p className="Detail__Ins__Desc__Words">
							由畅游游戏公司自主研发的日式风格H5互动小游戏。经典的抽奖活动，有趣的互动奖品可自行设置；截至到17年9月，有8000家公司使用该游戏接入微信平台，成为新一轮拉粉厉器；
						</p>
						<p className="Detail__Ins__Desc__Price"><i>￥20.00</i> 元/天</p>
					</div>
					<div className="Detail__Ins__Buy">
						<Link className="Detail__Ins__Buy__Btn">立即购买 </Link>
					</div>
				</div>
				<div className="Detail__Msg Detail__Img">
					<div className="Detail__Msg__Title Detail__Msg__Img">
						插件截图
					</div>
					<div className="Detail__Msg__Con">
					{
						this.Data.map((item, index) => {
							return <img src={ require("assets/img/detail_plugin.png")} key={index}/>
						})
					}
					</div>
				</div>
				<div className="Detail__Msg Detail__PluginMsg">
					<div className="Detail__Msg__Title Detail__Msg__PluginMsg">
						插件信息
					</div>
					<div className="Detail__Msg__Words">
						《幸运大转盘抽奖》插件是由畅游游戏公司自主研发的日式风格H5互动小游戏。经典的抽奖活动，有趣的互动，奖品可自行设置；截至到17年9月，有8000家公司使用该游戏接入微信平台，成为新一轮拉粉厉器；
					</div>
				</div>
				<div className="Detail__Msg Detail__Developer">
					<div className="Detail__Msg__Title Detail__Msg__Developer">
						开发者
					</div>
					<div className="Detail__Msg__Words">
						网易游戏
					</div>
				</div>
				<div className="Detail__Msg Detail__PublishDate">
					<div className="Detail__Msg__Title Detail__Msg__PublishDate">
						发行日期
					</div>
					<div className="Detail__Msg__Words">
						2017年2月1日
					</div>
				</div>
				<div className="Detail__Msg Detail__Type">
					<div className="Detail__Msg__Title Detail__Msg__Type">
						类型
					</div>
					<div className="Detail__Msg__Words">
						积分营销类，促进顾客消费欲，提升营业额
					</div>
				</div>
				<div className="Detail__Msg Detail__BrightSpot">
					<div className="Detail__Msg__Title Detail__Msg__BrightSpot">
						亮点
					</div>
					<div className="Detail__Msg__Words">
						提高用户粘性，奖品可设置优惠券/积分	
					</div>
				</div>
			</div>
		)
	}
}
