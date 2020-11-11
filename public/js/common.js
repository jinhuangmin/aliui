$(function() {
	var navHtml = `<div class="head">
									<div class="logo2">
											<a href="">
													<img src="https://img.alicdn.com/imgextra/i4/800803731/O1CN0169je931dQqLwCtZMf_!!800803731.png">
											</a>
									</div>
									<div class="nnnna">
											<ul id="ddmenu">
													<li class="dflli home"><a  class="d-menu" href=""><em class='f15'>首页</em></a></li>
													<li class="dflli submenu"><a href="http://www.aliui.com/all/" class="d-menu"><em class='f15'>全部模版</em></a></li>
													<li class="dflli submenu"><a href="http://www.aliui.com/guide/" class="d-menu"><em class='f15'>设置教程</em></a></li>
													<li class="dflli submenu"><a target="_blank" href="https://fuwu.taobao.com/serv/shop_index.htm?isv_id=800803731" class="d-menu"><em class='f15'>服务商信息</em></a></li>
													<li class="dflli"><a target="_blank" href="http://www.aliui.com/tool/" class="d-menu f15">热区工具</a></li>
													<li class="dflli"><a  href="http://www.aliui.com/linktool/" class="d-menu f15">链接转换工具</a></li>
											</ul>
									</div>
									<a  href="http://www.aliui.com/contact/" class='contact f15'>
											<svg class="iconfont-symbol " aria-hidden="true" style="font-size: 22px;position: relative;top: 3px;">
													<use xlink:href="#iconicon-test"></use>
											</svg>
											联系我们
									</a>
								</div>`;

	var ftHtml = `<div class="row">
									<div class="top">
											<div class="left">
													<div>
															<img class="logo"
																	src="https://img.alicdn.com/imgextra/i2/800803731/O1CN01mp57RK1dQqENW1ISm_!!800803731.png">

															<ul>
																	<li>
																			<span style="float: left;color:#9b9ea0;">淘宝天猫</span>
																			<a target="_blank"
																					href="https://www.taobao.com/webww/ww.php?ver=3&touid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&siteid=cntaobao&status=1&charset=utf-8"
																					style="background:url(https://img.alicdn.com/imgextra/i4/800803731/O1CN01Eo4Zhm1dQqENdaQiF_!!800803731.png) left center no-repeat;margin:4px 0 0 15px;width:20px;height:20px;display:block;float: left;"></a>
																			<a target="blank" href="https://wpa.qq.com/msgrd?V=3&uin=11627067&Site=QQ客服&Menu=yes"
																					style="width: 20px;height:21px;margin:-3px 0 0 15px;display:block;float: left;"><img
																							src="https://img.alicdn.com/imgextra/i1/800803731/O1CN010bT9wD1dQqEMphL7t_!!800803731.png"
																							alt="点击这里给我发消息"></a>
																	</li>
																	<li>
																			<span style="float: left;color:#9b9ea0;">Alibaba</span>
																			<a target="_blank"
																					href="https://amos.alicdn.com/msg.aw?v=2&amp;uid=沃姆设计&amp;site=enaliint&amp;s=24&amp;charset=UTF-8"
																					style="background:url(https://img.alicdn.com/imgextra/i4/800803731/O1CN01Eo4Zhm1dQqENdaQiF_!!800803731.png) left center no-repeat;margin:4px 0 0 15px;width:20px;height:20px;display:block;float: left;"></a>
																			<a target="blank" href="https://wpa.qq.com/msgrd?V=3&uin=79001768&Site=QQ客服&Menu=yes"
																					style="width: 20px;height:21px;margin:-3px 0 0 15px;display:block;float: left;"><img
																							src="https://img.alicdn.com/imgextra/i1/800803731/O1CN010bT9wD1dQqEMphL7t_!!800803731.png"
																							alt="点击这里给我发消息"></a>
																	</li>
																	<li>
																			<span style="float: left;color:#9b9ea0;font-size: 12px;">在线时间：周一至周六 9:30分至18:00</span>
																	</li>
																	<li>
																			<span style="float: left;color:#9b9ea0;font-size: 12px;">电话：15355003615</span>
																	</li>
															</ul>
													</div>
											</div>
											<ul class="right">
													<li>
															<h3>模板/定制业务</h3>
															<ul>
																	<li><a target="blank" href="https://cnzoom.com/weex/">天猫淘宝WEEX无线定制</a></li>
																	<li><a target="blank"
																	href="https://zxn.taobao.com/designer_detail.htm?spm=a215h.7721252.0.0.xB9n9L&designerId=1016893&productType=0&site=3&price=50-100">天猫PC模版</a>
																	</li>
																	<li><a target="blank"
																					href="https://zxn.taobao.com/designer_detail.htm?spm=a215h.7721252.0.0.wQp1gr&designerId=1016893&productType=0&site=2&price=30-50">淘宝PC模版</a>
																	</li>
																	<li><a target="blank"
																					href="https://zxn.taobao.com/designer_detail.htm?spm=a215h.7721252.1998546510.6.qvSIcI&designerId=1016893&productType=0&site=1003">无线端模版</a>
																	</li>	
																	<li><a target="blank"
																					href="https://zhuangxiu.alibaba.com/list.html?viewMarket=icbuzxAll&key=%E6%B2%83%E5%A7%86&pageSize=20&startPrice=&endPrice=&sort=sale-show&market=icbuzx">Alibaba模板</a>
																	</li>
															</ul>
													</li>
													<li>
															<h3>在线工具</h3>
															<ul>
																	<li><a target="blank" href="https://cnzoom.com/3.0/">天猫/淘宝PC端装修工具</a></li>
																	<li><a target="blank" href="https://www.cnzoom.com/gm">无线端链接转换</a></li>
																	<li><a target="blank" href="https://www.cnzoom.com/tool/nav">天猫/淘宝PC端导航样式修改工具</a></li>
																	<li><a target="blank" href="https://www.cnzoom.com/zxn/color">取色值工具</a></li>
																	<li><a target="blank" href="https://cnzoom.com/en/tool/">阿里国际站热区工具</a></li>
															</ul>
													</li>
													<li>
															<h3>帮助教程</h3>
															<ul>
																	<li><a target="blank" href="https://www.cnzoom.com/guide/tool.html">天猫/淘宝PC端教程</a></li>
																	<li><a target="blank" href="https://www.cnzoom.com/guide/wuxian.html">无线端模板教程</a></li>
																	<li><a target="blank" href="https://www.cnzoom.com/en/guide/">国际站模板教程</a></li>
																	<li><a target="blank" href="https://www.cnzoom.com/doc/buyandfapiao/">发票说明</a></li>
															</ul>
													</li>
											</ul>
									</div>
									<div class="mid">
											<div class="row">
													<ul>
															<li>公司地址：浙江省杭州市滨江区江南大道江南岸艺术园区1215室</li>
															<li>官方唯一网站：https://www.cnzoom.com</li>
															<li>专注阿里巴巴集团旗下开放平台模板创意设计与开发</li>
													</ul>
											</div>
									</div>
									<div class="bot">
											<div class="row">
													© 2013-2021 Cnzoom.com <span class="">版权所有</span><img style="width:20px;margin-left:20px;"
																	src="https://img.alicdn.com/imgextra/i3/800803731/O1CN01tGTyRm1dQqEMT1sgS_!!800803731.gif"><img
																	style="width:20px;margin:0 5px 0 2px;"
																	src="https://img.alicdn.com/imgextra/i3/800803731/O1CN018m4mET1dQqELLGwVe_!!800803731.png"><span>浙公网安备
																	33010802005272号</span><a target="blank" style="padding-left:20px;"
																	href="http://www.beian.miit.gov.cn/">浙ICP备09006645号-2</a>
											</div>
									</div>
								</div>`;

	var contactHtml = `<div class="tel">
												<div class="icon"></div>
												<p class="title">联系我们</p>
												<div class="sub-nav">
														<div class="list">
																<div class="sub_icon f1"></div>
																<p><a href="https://www.taobao.com/webww/ww.php?ver=3&amp;touid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&amp;siteid=cntaobao&amp;status=1&amp;charset=utf-8"
																				target="_blank" rel="noopener"><img class="tb"
																						src="https://amos.alicdn.com/realonline.aw?v=2&amp;uid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&amp;site=cntaobao&amp;s=1&amp;charset=utf-8"
																						alt="点这里给我发消息"></a></p>
														</div>
														<div class="list">
																<div class="sub_icon f2"></div>
																<p><a target="blank" href="tencent://message/?uin=11627067&amp;Site=点击这里给我发消息&amp;Menu=yes"><img class="tb"
																						src="https://pub.idqqimg.com/qconn/wpa/button/button_old_11.gif" alt="点击这里给我发消息"></a></p>
														</div>
														<div class="list">
																<div class="sub_icon f3"></div>
																<p>定制咨询</p>
																<p class="number">15355003615</p>
														</div>
														<div class="list">
																<div class="sub_icon f3"></div>
																<p>技术支持</p>
																<p class="number">18072803854</p>
														</div>
														<div class="list">
																<div class="sub_icon f4"></div>
																<img src="https://www.cnzoom.com/en/images/weixin.jpg">
														</div>
														<div class="list">
																<div class="sub_icon f5"></div>
																<p>杭州市滨江区江南岸艺术园区A幢-1215室</p>
														</div>
												</div>
											</div>
											<a href="#top" class="gotop"><i></i></a>`;
	// 头部导航
	$(".header").append(navHtml);
	// 页尾
	$(".footer").append(ftHtml);
	// 右侧悬浮
	$(".sidebar").append(contactHtml);

	//导航菜单下拉效果
	$('#ddmenu li').hover(function() {
		clearTimeout($.data(this, 'timer'));
		$('ul', this).stop(true, true).slideDown(200);
	}, function() {
		$.data(this, 'timer', setTimeout($.proxy(function() {
			$('ul', this).stop(true, true).slideUp(200);
		}, this), 100));
	});


});