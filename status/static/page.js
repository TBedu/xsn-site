layui.use(function(){
	var $ = layui.$;
	var layer = layui.layer;
	var util = layui.util;
	// 事件
	util.on('lay-on', {
		'open-sup': function(){
			layer.open({
				type: 1,
				title:'惊喜',
				shadeClose: true,
				content: $('#sup-layer'),
			});
		},
		'motd-tip': function(){
			layer.open({
				type: 1,
				title:'MOTD 提示',
				shadeClose: true,
				content: $('#motd-layer'),
				area: ['auto','500px'],
			});
		}
	});
})

function opentip(){
	setTimeout(() => layer.tips('嘿，点这里~', document.getElementById('supbtn')),1000)
}

function showtip(){
	layer.msg('加载成功', {icon: 6})
}

function badresp(){
	layer.msg('加载失败', {icon: 5})
}



window.onload(opentip())
