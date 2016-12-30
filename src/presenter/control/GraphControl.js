import BaseControl from './BaseControl'
let Snap = require('snapsvg');

export default class GraphControl extends BaseControl {
	/**
	 * 单例
	 */
	static _inst;

	static getInst() {
		GraphControl._inst = GraphControl._inst || new GraphControl();

		return GraphControl._inst;
	}

	/**
	 * 构造
	 */
	constructor() {
		super();
	}

	/**
	 * 析构
	 */
	destroy() {
		this.unbindEvent();
		if (this.animateObj) {
			this.animateObj.kill();
			this.animateObj = null;
		}
		GraphControl._inst = null;
	}

	/**
	 * 初始化事件
	 */
	init(app) {

		this.app = app;

		// 初始化svg界面
		var uid = 'svg' + this.uuid();
		this.container = this.app.$view.find('.parallel-container');
		this.container.html('<svg id="' + uid + '" style="width: 100%;height: 100%;" ></svg>');
		this.$svg = this.app.$view.find('#' + uid);
		this.svg = Snap('#' + uid);

		// svg绘制参数设置
		this.svgWidth = this.$svg.width();
		this.svgHeight = this.$svg.height();

		this.app.config.lineAX = this.app.config.initLeftratios[0] * this.svgWidth;
		this.app.config.lineBX = this.app.config.initLeftratios[1] * this.svgWidth;


		for (let i = 1; i < 6; i++) {
			this.app.config['y' + i] = Math.round((this.svgHeight / 6 * i + this.svgHeight / 15)*1000)/1000;
		}

		this.app.config.y0 = 0;

		this.transformPosition = {
			x: 0,
			y: 0
		};

		this.canvasBoundary = {
			minX: -this.svgWidth,
			minY: -this.svgHeight,
			maxX: this.svgWidth * 2,
			maxY: this.svgHeight * 2
		};

		this.pointGroupArr = [];

		this.parallelLineGroupArr = [];

		this.crossingLineArr = [];

		Snap.plugin(function(Snap, Element, Paper, glob) {
			var elproto = Element.prototype;
			elproto.toFront = function(target) {
				if (target) {
					this.appendTo(target);
					return this
				}
				this.appendTo(this.paper);
			};
			elproto.toBack = function(target) {
				if (target) {
					this.prependTo(target);
					return this
				}
				this.prependTo(this.paper);
			};

			elproto.setPosition = function(position, direct) {
				switch (this.type) {
					case 'circle':
						if (direct) {
							this.attr({
								'cx': position.x,
								'cy': position.y
							})
						} else {
							this.attr({
								'cx': '+=' + position.x,
								'cy': '+=' + position.y
							})
						}
						break;
					case 'line':
						if (direct) {
							this.attr({
								'x1': position.x1,
								'y1': position.y1,
								'x2': position.x2,
								'y2': position.y2
							});
						} else {
							this.attr({
								'x1': '+=' + position.x,
								'y1': '+=' + position.y,
								'x2': '+=' + position.x,
								'y2': '+=' + position.y
							});
						}
						break;

					default:
						if (direct) {
							this.attr({
								x: position.x,
								y: position.y
							})

						} else {
							this.attr({
								x: '+=' + position.x,
								y: '+=' + position.y
							})
						}
						break;
				}
			}


		});
		this.initFormula();
		this.drawBasic();
		this.bindEvent()
		return this;
	}

	/**
	 * 初始化公式面板
	 */
	initFormula() {
		this.$formulaContainer = this.app.$view.find(".ParallelLines_formula"); //公式面板,控制线段比例的显示隐藏
		/*
		 三条线时公式形式
		 */
		this.$littileFormula = this.app.$view.find(".formula_little:first");
		//第一项
		this.$littileF_rowTxt1 = this.$littileFormula.find(".rowTxt:first");
		this.$littileF_rowTxt1_member = this.$littileF_rowTxt1.find("i:first");
		this.$littileF_rowTxt1_denominator = this.$littileF_rowTxt1.find("i:last");
		//等号1
		this.$littileF_equal1 = this.$littileFormula.find(".equal:last");
		//第二项
		this.$littileF_rowTxt2 = this.$littileFormula.find(".rowTxt:last");
		this.$littileF_rowTxt2_member = this.$littileF_rowTxt2.find("i:first");
		this.$littileF_rowTxt2_denominator = this.$littileF_rowTxt2.find("i:last");
		//等号2
		this.$littileF_equal2 = this.$littileFormula.find(".equal:last");
		//比例值
		this.$littileF_verMid = this.$littileFormula.find(".verMid");

		/*
		 三条线以上时公式形式
		 */
		this.$manyFormula = this.app.$view.find(".formula_many:first");
		let rowTxts = this.$manyFormula.find(".rowTxt");
		//第一项
		this.$manyF_rowTxt1 = rowTxts.first();
		//第二项
		this.$manyF_rowTxt2 = rowTxts.eq(1);
		//第三项
		this.$manyF_rowTxt3 = rowTxts.last();

		/*
		 有线段等于0时显示
		 */
		this.$equalFormulas = this.app.$view.find(".formula_equal");


	}

	/**
	 * 生成id
	 * @return {[string]} [返回随机字符串]
	 */
	uuid() {
		let s = [],
			hexDigits = '0123456789abcdef';
		for (let i = 0; i < 10; i++) {
			s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
		}

		return s.join('');
	}

	/**
	 * 绘制基本界面
	 */
	drawBasic() {
		this.group = this.svg.g();

		// 相交线A
		let lineA = this.drawLine('crossingLine').addClass('lineA lineAX').data({
			type: 'X',
			classString: 'lineA'
		});

		let lineA2 = this.drawLine('crossingLine').addClass('lineA lineAX').data({
			type: 'X',
			classString: 'lineA'
		}).attr({
			'stroke-opacity': 0.001,
			'strokeWidth': this.app.config.unvisibleCrossingLineWidth
		});

		let textA = this.svg.text(0, 0, 'a').attr({
			fill: this.app.config.crossingLineColor
		}).addClass('textA');
		// 相交线B
		let lineB = this.drawLine('crossingLine').addClass('lineB lineBX').data({
			type: 'X',
			classString: 'lineB'
		});

		let lineB2 = this.drawLine('crossingLine').addClass('lineB lineBX').data({
			type: 'X',
			classString: 'lineB'
		}).attr({
			'stroke-opacity': 0.001,
			'strokeWidth': this.app.config.unvisibleCrossingLineWidth
		});

		let textB = this.svg.text(0, 0, 'b').attr({
			fill: this.app.config.crossingLineColor
		}).addClass('textB');

		// let baseSplit = this.svgHeight / 6;

		for (let i = 1; i < 6; i++) {

			let path = this.drawLine('parallelLine').addClass('parallelLine ' + this.app.config.allParallelLinesName[i - 1] + ' y' + i).data({
				type: 'Y',
				index: i
			});

			let path2 = this.drawLine('parallelLine').addClass('parallelLine ' + ' y' + i).data({
				type: 'Y',
				index: i
			}).attr({
				'stroke-opacity': 0.001,
				'strokeWidth': this.app.config.unvisibleParallelLineWidth
			});

			let text = this.svg.text(22 * this.app.config.fontSize / 24, -this.app.config.parallelLineWidth / 2 - this.app.config.textGap, this.app.config.allParallelLinesName[i - 1].split('')).attr({
				fill: this.app.config.parallelLineColor
			}).addClass('text_parallel_line y' + i);

			let parallelLineGroup = this.svg.g(path2, path, text).addClass('y' + i + 'Group ' + 'parallelLine' + i + 'Group');

			this.group.add(parallelLineGroup);
			this.parallelLineGroupArr.push(parallelLineGroup);
		}

		this.crossingLineArr.push(lineA);
		this.crossingLineArr.push(lineB);

		let lineAGroup = this.svg.g(lineA2, lineA).addClass('lineAXGroup');
		let lineBGroup = this.svg.g(lineB2, lineB).addClass('lineBXGroup');;



		this.group.add(lineAGroup, lineBGroup, textA, textB);

		this.drawPoints();

	}

	drag(position) {

		this.transformPosition.x += position.x;
		this.transformPosition.y += position.y;

		if (-this.transformPosition.x < this.canvasBoundary.minX) {
			this.transformPosition.x = -this.canvasBoundary.minX;
		} else if (this.svgWidth - this.transformPosition.x > this.canvasBoundary.maxX) {
			this.transformPosition.x = this.svgWidth - this.canvasBoundary.maxX;
		}

		if (-this.transformPosition.y < this.canvasBoundary.minY) {
			this.transformPosition.y = -this.canvasBoundary.minY;
		} else if (this.svgHeight - this.transformPosition.y > this.canvasBoundary.maxY) {
			this.transformPosition.y = this.svgHeight - this.canvasBoundary.maxY;
		}

		let transformString = 't ' + this.transformPosition.x + ' ' + this.transformPosition.y;

		this.group.transform(transformString);
	}


	controlTextShow({
		init = false,
		bool = '',
		i = -1
	} = {}) {
		if (bool === '') {
			if (init) {
				[-this.app.config.y1 / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX <=
					-this.app.config.y1 / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX, -this.app.config.y2 / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX <=
					-this.app.config.y2 / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX, -this.app.config.y3 / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX <=
					-this.app.config.y3 / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX, -this.app.config.y4 / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX <=
					-this.app.config.y4 / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX, -this.app.config.y5 / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX <=
					-this.app.config.y5 / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX
				].map((b, index) => {
					this.controlTextShow({
						bool: b,
						i: index
					});
				})
			} else {
				[-(this.app.config.y1 + this.app.data.y1) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX + this.app.data.lineAX <=
					-(this.app.config.y1 + this.app.data.y1) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.data.lineBX, -(this.app.config.y2 + this.app.data.y2) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX + this.app.data.lineAX <=
					-(this.app.config.y2 + this.app.data.y2) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.data.lineBX, -(this.app.config.y3 + this.app.data.y3) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX + this.app.data.lineAX <=
					-(this.app.config.y3 + this.app.data.y3) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.data.lineBX, -(this.app.config.y4 + this.app.data.y4) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX + this.app.data.lineAX <=
					-(this.app.config.y4 + this.app.data.y4) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.data.lineBX, -(this.app.config.y5 + this.app.data.y5) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX + this.app.data.lineAX <=
					-(this.app.config.y5 + this.app.data.y5) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.data.lineBX
				].map((b, index) => {
					this.controlTextShow({
						bool: b,
						i: index
					});
				})
			}

		} else {

			if (!bool) {
				this.pointGroupArr[i][0].select('.text_point_left').removeClass('hidden_svg');
				this.pointGroupArr[i][0].select('.text_point_right').addClass('hidden_svg');

				this.pointGroupArr[i][1].select('.text_point_left').addClass('hidden_svg');
				this.pointGroupArr[i][1].select('.text_point_right').removeClass('hidden_svg');
			} else {
				this.pointGroupArr[i][0].select('.text_point_left').addClass('hidden_svg');
				this.pointGroupArr[i][0].select('.text_point_right').removeClass('hidden_svg');

				this.pointGroupArr[i][1].select('.text_point_left').removeClass('hidden_svg');
				this.pointGroupArr[i][1].select('.text_point_right').addClass('hidden_svg');

			}
		}
	}


	// 绘制相交线
	drawLine(type) {

		let startPoint = {
			x: this.canvasBoundary.minX,
			y: 0
		}
		let endPoint = {
			x: this.canvasBoundary.maxX,
			y: 0
		}

		return this.svg.line(startPoint.x, startPoint.y, endPoint.x, endPoint.y).attr({
			fill: 'none',
			stroke: this.app.config[type + 'Color'],
			strokeWidth: this.app.config[type + 'Width']
		});

	}

	drawPoints() {

		this.pointGroupArr = this.app.config.pointsNameArr.map((textArr, i) => {

			let unvisibleOutsideCircle1 = this.svg.circle(0, 0, this.app.config.unvisiblePointRadius).attr({
				fill: this.app.config.unvisiblePointFillColor,
				stroke: 'none'
			}).addClass('unvisibleCircle circle lineAX lineAPartY' + (i + 1)).data({
				line: 'lineA',
				type: 'rotate',
				row: 'y' + (i + 1)
			});

			let outsideCircle1 = this.svg.circle(0, 0, this.app.config.pointOutsideRadius).attr({
				fill: this.app.config.pointOutsideFillColor,
				stroke: 'none'
			}).addClass('outsideCircle circle lineAX lineAPartY' + (i + 1)).data({
				line: 'lineA',
				type: 'rotate',
				row: 'y' + (i + 1)
			});
			let circle1 = this.svg.circle(0, 0, this.app.config.pointRadius).attr({
				fill: this.app.config.pointFillColor,
				stroke: this.app.config.pointStrokeColor,
				strokeWidth: this.app.config.pointStrokeWidth
			}).addClass('circle lineAX lineAPartY' + (i + 1)).data({
				line: 'lineA',
				type: 'rotate',
				row: 'y' + (i + 1)
			});

			let leftText1 = this.svg.text(0 - this.app.config.pointRadius, 0 - this.app.config.pointRadius - this.app.config.textGap, textArr[0].split('')).attr({
				fill: this.app.config.pointTextColor
			}).addClass('text_point hidden_svg text_point_left lineAX lineAPartY' + (i + 1));

			leftText1.attr({
				x: +leftText1.attr('x') - leftText1.node.clientWidth * 5 / 4
			});

			let rightText1 = this.svg.text(0 + this.app.config.pointRadius, 0 - this.app.config.pointRadius - this.app.config.textGap, textArr[0].split('')).attr({
				fill: this.app.config.pointTextColor
			}).addClass('text_point hidden_svg text_point_right lineAX lineAPartY' + (i + 1));

			rightText1.attr({
				x: +rightText1.attr('x') + rightText1.node.clientWidth / 4
			});

			let group1 = this.svg.g(unvisibleOutsideCircle1, outsideCircle1, circle1, leftText1, rightText1).addClass('pointGroup lineAXGroup y' + (i + 1) + 'Group');


			let unvisibleOutsideCircle2 = this.svg.circle(0, 0, this.app.config.unvisiblePointRadius).attr({
				fill: this.app.config.unvisiblePointFillColor,
				stroke: 'none'
			}).addClass('unvisibleCircle circle lineBX lineBPartY' + (i + 1)).data({
				line: 'lineB',
				type: 'rotate',
				row: 'y' + (i + 1)
			});

			let outsideCircle2 = this.svg.circle(0, 0, this.app.config.pointOutsideRadius).attr({
				fill: this.app.config.pointOutsideFillColor,
				stroke: 'none'
			}).addClass('outsideCircle circle lineBX lineBPartY' + (i + 1)).data({
				line: 'lineB',
				type: 'rotate',
				row: 'y' + (i + 1)
			});
			let circle2 = this.svg.circle(0, 0, this.app.config.pointRadius).attr({
				fill: this.app.config.pointFillColor,
				stroke: this.app.config.pointStrokeColor,
				strokeWidth: this.app.config.pointStrokeWidth
			}).addClass('circle lineBX lineBPartY' + (i + 1)).data({
				line: 'lineB',
				type: 'rotate',
				row: 'y' + (i + 1)
			});

			let leftText2 = this.svg.text(0 - this.app.config.pointRadius, 0 - this.app.config.pointRadius - this.app.config.textGap, textArr[1].split('')).attr({
				fill: this.app.config.pointTextColor
			}).addClass('text_point hidden_svg text_point_left lineBX lineBPartY' + (i + 1));

			leftText2.attr({
				x: +leftText2.attr('x') - leftText2.node.clientWidth * 5 / 4
			});

			let rightText2 = this.svg.text(0 + this.app.config.pointRadius, 0 - this.app.config.pointRadius - this.app.config.textGap, textArr[1].split('')).attr({
				fill: this.app.config.pointTextColor
			}).addClass('text_point hidden_svg text_point_right lineBX lineBPartY' + (i + 1));


			rightText2.attr({
				x: +rightText2.attr('x') + rightText2.node.clientWidth / 4
			});
			let group2 = this.svg.g(unvisibleOutsideCircle2, outsideCircle2, circle2, leftText2, rightText2).addClass('pointGroup lineBXGroup y' + (i + 1) + 'Group');

			this.group.add(group1, group2);
			return [group1, group2]

		});

	}


	drawSegmentLines() {

		let length = this.pointGroupArr.length;
		for (let i = 1; i < length; i++) {
			let leftStartPoint = this.pointGroupArr[i - 1][0];
			let rightstartPoint = this.pointGroupArr[i - 1][1];
			let leftEndPoint = this.pointGroupArr[i][0];
			let rightEndPoint = this.pointGroupArr[i][1];
		}
	}


	drawByAngle(angle, classString, init) {
		let radian = Math.tan(angle);

		let pos;
		if (init) {
			pos = {
				y1: this.canvasBoundary.minY - this.app.config.lineGap,
				x1: -(this.canvasBoundary.minY - this.app.config.lineGap) / radian + this.app.config[classString + 'X'],
				y2: this.canvasBoundary.maxY + this.app.config.lineGap,
				x2: -(this.canvasBoundary.maxY + this.app.config.lineGap) / radian + this.app.config[classString + 'X']
			}

		} else {
			pos = {
				y1: this.canvasBoundary.minY - this.app.config.lineGap,
				x1: -(this.canvasBoundary.minY - this.app.config.lineGap) / radian + this.app.config[classString + 'X'] + this.app.data[classString + 'X'],
				y2: this.canvasBoundary.maxY + this.app.config.lineGap,
				x2: -(this.canvasBoundary.maxY + this.app.config.lineGap) / radian + this.app.config[classString + 'X'] + this.app.data[classString + 'X']
			}
		}

		[].slice.call(Snap.selectAll('.' + classString)).map(el => {
			el.setPosition(pos, true);
		})
	}

	drawByOffset({
		x = 0,
		y = 0
	} = {}, classString = null, direct = null) {
		let pos = {
			x,
			y
		};
		[].slice.call(Snap.selectAll('.' + classString)).map(el => {
			el.setPosition(pos, direct);
		})
	}

	drawParallelByOffset({
		x = 0,
		y = 0
	} = {}, index = null) {

		let group = Snap.select('.parallelLine' + index + 'Group');

		let originY = group.select('.parallelLine').attr('y1');
		let pos = {
			x,
			y: y - originY
		};

		[].slice.call(group.children()).map(el => {
			el.setPosition(pos);
		})
	}


	drawLineText(init = false, side, {
		x = 0,
		y = 0
	} = {}) {
		let pos1, pos2;
		let textA = Snap.select('.textA');
		let textB = Snap.select('.textB');
		if (init) {
			pos1 = {
				x: -(y + textA.node.clientHeight) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX - textA.node.clientWidth - this.app.config.textGap,
				y: +textA.node.clientHeight
			};
			pos2 = {
				x: -(y + textB.node.clientHeight) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.config.textGap,
				y: +textB.node.clientHeight
			};

			textA.data({
				x: textA.node.clientWidth,
				y: textA.node.clientHeight
			});
			textB.data({
				y: textB.node.clientHeight
			});

		} else {
			pos1 = {
				x: -(y + textA.data('y')) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX - textA.data('x') + this.app.data.lineAX - this.app.config.textGap,
				y: +textA.data('y')
			};
			pos2 = {
				x: -(y + textB.data('y')) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.data.lineBX + this.app.config.textGap,
				y: +textB.data('y')
			};

		}
		textA.setPosition(pos1, true);
		textB.setPosition(pos2, true);

		if (side) {
			textA.after(textB);
		}

	}

	drawPointByOffset({
		x = 0,
		y = 0
	} = {}, index = null, init = false) {

		let pos1, pos2;
		if (init) {

			pos1 = {
				x: -y / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX,
				y
			};
			pos2 = {
				x: -y / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX,
				y
			};

		} else {
			pos1 = {
				x: -y / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX + this.app.data.lineAX,
				y
			};
			pos2 = {
				x: -y / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.data.lineBX,
				y
			};

		}

		let point1 = {
			x: +Snap.select('.circle.lineAPartY' + index).attr('cx'),
			y: +Snap.select('.circle.lineAPartY' + index).attr('cy')
		};
		let point2 = {
			x: +Snap.select('.circle.lineBPartY' + index).attr('cx'),
			y: +Snap.select('.circle.lineBPartY' + index).attr('cy')
		};

		let offset1 = {
			x: pos1.x - point1.x,
			y: pos1.y - point1.y
		};
		let offset2 = {
			x: pos2.x - point2.x,
			y: pos2.y - point2.y
		};

		this.drawByOffset(offset1, 'lineAPartY' + index);
		this.drawByOffset(offset2, 'lineBPartY' + index);
		this.controlTextShow({
			bool: pos1.x <= pos2.x,
			i: index - 1
		});
	}

	bringToFront(classString) {
		let group = Snap.selectAll('.' + classString);
		if (!classString || !group) {
			return
		}
		[].slice.call(group).map(el => {
			el.toFront(el.parent());
		})
	}

	controlSegments(init, side) {

		if (Snap.selectAll('.segmentGroup')) {
			Snap.selectAll('.segmentGroup').remove();
		}
		this.app.config.segmentShow.sort((a, b) => {

			if (init) {
				return this.app.config[a] > this.app.config[b]
			} else {
				return this.app.config[a] + this.app.data[a] > this.app.config[b] + this.app.data[b]
			}

		})

		let pointArr = this.app.config.segmentShow.map(key => {
			if (init) {
				return [{
					x: -(this.app.config[key]) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX,
					y: (this.app.config[key])
				}, {
					x: -(this.app.config[key]) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX,
					y: (this.app.config[key])
				}]
			} else {
				return [{
					x: -(this.app.config[key] + this.app.data[key]) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX + this.app.data.lineAX,
					y: (this.app.config[key] + this.app.data[key])
				}, {
					x: -(this.app.config[key] + this.app.data[key]) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.data.lineBX,
					y: (this.app.config[key] + this.app.data[key])
				}]
			}
		});


		for (let i = 1; i < pointArr.length; i++) {
			let segment1 = this.svg.path(`M${pointArr[i-1][0].x} ${pointArr[i-1][0].y} L${pointArr[i][0].x} ${pointArr[i][0].y}`).attr({
				fill: 'none',
				stroke: this.app.config.segmentLineColors[i - 1][0],
				strokeWidth: this.app.config.crossingLineWidth
			}).addClass('segment');

			let segment2 = this.svg.path(`M${pointArr[i-1][1].x} ${pointArr[i-1][1].y} L${pointArr[i][1].x} ${pointArr[i][1].y}`).attr({
				fill: 'none',
				stroke: this.app.config.segmentLineColors[i - 1][1],
				strokeWidth: this.app.config.crossingLineWidth
			}).addClass('segment');

			let length1 = +segment1.getTotalLength();
			let textValue1 = Math.round(length1 * 100 / this.app.config.pixelToLength) / 100 < 0.01 ? '0' : '' + Math.round(length1 * 100 / this.app.config.pixelToLength) / 100;
			let center1 = (length1 * 100 / this.app.config.pixelToLength) / 100 < 0.01 ? {
				x: pointArr[i - 1][0].x,
				y: pointArr[i - 1][0].y
			} : segment1.getPointAtLength(length1 / 2);
			let text1 = null;

			let length2 = +segment2.getTotalLength();
			let textValue2 = Math.round(length2 * 100 / this.app.config.pixelToLength) / 100 < 0.01 ? '0' : '' + Math.round(length2 * 100 / this.app.config.pixelToLength) / 100;
			let center2 = (length2 * 100 / this.app.config.pixelToLength) / 100 < 0.01 ? {
				x: pointArr[i - 1][1].x,
				y: pointArr[i - 1][1].y
			} : segment2.getPointAtLength(length2 / 2);
			let text2 = null;

			let showDecide = center1.x <= center2.x;

			if (showDecide) {

				text1 = this.svg.text(center1.x, center1.y, textValue1).attr({
					fill: this.app.config.crossingLineColor
				}).addClass('segment text_segment');
				text1.attr({
					x: +text1.attr('x') - text1.node.clientWidth - this.app.config.textGap
				});
				text2 = this.svg.text(center2.x, center2.y, textValue2).attr({
					fill: this.app.config.crossingLineColor
				}).addClass('segment text_segment');

				text2.attr({
					x: +text2.attr('x') + this.app.config.textGap
				});

			} else {
				text1 = this.svg.text(center1.x, center1.y, textValue1).attr({
					fill: this.app.config.crossingLineColor
				}).addClass('segment text_segment');

				text1.attr({
					x: +text1.attr('x') + this.app.config.textGap
				});

				text2 = this.svg.text(center2.x, center2.y, textValue2).attr({
					fill: this.app.config.crossingLineColor
				}).addClass('segment text_segment');

				text2.attr({
					x: +text2.attr('x') - text2.node.clientWidth - this.app.config.textGap
				});
			}

			let group2 = this.svg.g(segment2, text2).addClass('segmentGroup');
			let group1 = this.svg.g(segment1, text1).addClass('segmentGroup');

			if (side) {
				this.group.add(group2, group1);
			} else {
				this.group.add(group1, group2);
			}



		}

		this.bringToFront('pointGroup');
		this.updateGraph('segmentRatioShow', this.app.config.segmentRatioShow)
		this.updateGraph('segmentLengthShow', this.app.config.segmentLengthShow)

	}

	animateControl(state) {

		switch (state) {
			case 0:
				if (this.animateObj) {
					this.animateObj.kill();

					this.animateObj = null;
				}
				break;
			case 1:
				if (this.animateObj) {
					this.animateObj.resume();
					return
				}
				this.animateObj = this.createAnimate();
				this.animateObj.play();
				break;
			case 2:
				if (this.animateObj) {
					this.animateObj.pause();
				}
				break;
			default:
				if (this.animateObj) {
					this.animateObj.kill();

					this.animateObj = null;
				}
				break;
		}

	}

	createAnimate() {
		this.app.config.segmentShow.sort((a, b) => {
			return this.app.config[a] + this.app.data[a] > this.app.config[b] + this.app.data[b]
		});
		let center;
		let length = this.app.config.segmentShow.length;
		let even = length % 2 === 0;
		if (even) {

			center = (this.app.config[this.app.config.segmentShow[length - 2]] + this.app.data[this.app.config.segmentShow[length - 2]] + this.app.config[this.app.config.segmentShow[1]] + this.app.data[this.app.config.segmentShow[1]]) / 2;

		} else {
			center = this.app.config[this.app.config.segmentShow[parseInt(length / 2)]] + this.app.data[this.app.config.segmentShow[parseInt(length / 2)]];
		}

		let moveArr = [];
		let t1 = new TimelineMax({
			onUpdate: function() {

				moveArr.map(obj => {
					this.app.data[obj.y] = obj.start - obj.diff;
					obj.diff = obj.start;
				})
			},
			onComplete: function() {
				t1.reverse()
			},
			onReverseComplete: function() {
				moveArr = null;
				this.app.data.animateShow = 0;
			},
			ease: Power0.easeNone,
			callbackScope: this,
			paused: true
		});


		let cover = this.app.config.segmentShow.reduce((a,b)=>{

			return Math.round((this.app.config[a] + this.app.data[a])*1000) === Math.round((this.app.config[b] + this.app.data[b])*1000)? b : null
		});

		for (let i = 0; i < length; i++) {

			let myObject = {
				y: this.app.config.segmentShow[i],
				diff: 0,
				start: 0,
				end: center - (this.app.config[this.app.config.segmentShow[i]] + this.app.data[this.app.config.segmentShow[i]])
			};
			if(cover){
				myObject.end = 0;
			}
			t1.to(myObject, Math.abs(myObject.end - myObject.start) / 50, {
				start: myObject.end
			}, 0);
			moveArr.push(myObject);
		}

		return t1;

	}


	checkOutsideCanvas({
		x = 0,
		y = 0,
		type = null,
		index = -1,
		classString = ''
	} = {}) {

		this.app.config.segmentShow.sort((a, b) => {
			return this.app.config[a] + this.app.data[a] > this.app.config[b] + this.app.data[b]
		});

		switch (type) {
			case 'X':


				let key1 = this.app.config.segmentShow[0];
				let key2 = this.app.config.segmentShow[this.app.config.segmentShow.length - 1];

				let x1 = -(this.app.config[key1] + this.app.data[key1]) / Math.tan(this.app.config[classString + 'Angle']) + this.app.config[classString + 'X'] + this.app.data[classString + 'X'] + x;
				let x2 = -(this.app.config[key2] + this.app.data[key2]) / Math.tan(this.app.config[classString + 'Angle']) + this.app.config[classString + 'X'] + this.app.data[classString + 'X'] + x;

				if (x1 < x2) {

					return x1 - this.app.config.pointRadius > this.canvasBoundary.minX && x2 + this.app.config.pointRadius < this.canvasBoundary.maxX
				} else {
					return x2 - this.app.config.pointRadius > this.canvasBoundary.minX && x1 + this.app.config.pointRadius < this.canvasBoundary.maxX
				}

				break;

			case 'Y':

				let pos1 = {
					x: -(this.app.config[index] + this.app.data[index] + y) / Math.tan(this.app.config.lineAAngle) + this.app.config.lineAX + this.app.data.lineAX,
					y: (this.app.config[index] + this.app.data[index] + y)
				}
				let pos2 = {
					x: -(this.app.config[index] + this.app.data[index] + y) / Math.tan(this.app.config.lineBAngle) + this.app.config.lineBX + this.app.data.lineBX,
					y: (this.app.config[index] + this.app.data[index] + y)
				};

				if ((pos1.y + this.app.config.pointRadius) < this.canvasBoundary.maxY && (pos1.y - this.app.config.pointRadius) > this.canvasBoundary.minY) {
					if (pos1.x < pos2.x) {
						return pos1.x - this.app.config.pointRadius > this.canvasBoundary.minX && pos2.x < this.canvasBoundary.maxX
					} else {
						return pos2.x - this.app.config.pointRadius > this.canvasBoundary.minX && pos1.x + this.app.config.pointRadius < this.canvasBoundary.maxX
					}
				}


				break;

			case 'rotate':


				let cover = this.app.config.segmentShow.reduce((a,b)=>{

					return Math.round((this.app.config[a] + this.app.data[a])*1000) === Math.round((this.app.config[b] + this.app.data[b])*1000)? b : null
				})

				if(cover){
					return
				}
				
				let last = this.app.config.segmentShow[this.app.config.segmentShow.length - 1];
				let first = this.app.config.segmentShow[0];
				if (index == first || index == last) {
					return (x - this.app.config.pointRadius) > this.canvasBoundary.minX && (x + this.app.config.pointRadius) < this.canvasBoundary.maxX
				}

				let movepoint = {
					x,
					y
				};

				let fitstPoint = {
					x: -(this.app.config[first] + this.app.data[first]) / Math.tan(this.app.config[classString + 'Angle']) + this.app.config[classString + 'X'] + this.app.data[classString + 'X'],
					y: (this.app.config[first] + this.app.data[first])
				};

				let k = -(movepoint.y - fitstPoint.y) / (movepoint.x - fitstPoint.x);
				let offset = movepoint.x - -(movepoint.y) / k;

				let checkX = -(this.app.config[last] + this.app.data[last]) / k + offset;

				return (checkX - this.app.config.pointRadius) > this.canvasBoundary.minX && (checkX + this.app.config.pointRadius) < this.canvasBoundary.maxX


				break;
			default:
				break;

		}
	}

	/**
	 * 旋转线段
	 * @param rotateData
	 */
	rotate(rotateData) {
		//        rotateData.x
		//        rotateData.y
		//        rotateData.row
		//        rotateData.path
		let segmentShow = this.app.config.segmentShow;
		//根据y值排序
		segmentShow.sort((a, b) => {
			return this.app.config[a] + this.app.data[a] > this.app.config[b] + this.app.data[b]
		})

		//算出圆心位置
		let center = {
				x: null,
				y: null
			},
			line = null,
			centerPointName = null,
			centerPoint = null;
		if (rotateData.row === segmentShow[0]) {
			line = segmentShow[segmentShow.length - 1];
		} else {
			line = segmentShow[0];
		}
		centerPointName = rotateData.path + "Part" + line.toUpperCase();
		centerPoint = Snap.selectAll("." + centerPointName)[1];
		center.x = centerPoint.attr("cx");
		center.y = centerPoint.attr("cy");
		let tan = -(rotateData.y - center.y) / (rotateData.x - center.x);
		// tan = Math.tan(75 * Math.PI / 180);
		let angle = Math.atan(tan);
		let offsetx = -(this.app.config[line] + this.app.data[line]) / Math.tan(this.app.data[rotateData.path + 'Angle']) + this.app.config[rotateData.path + 'X'] + this.app.data[rotateData.path + 'X'];
		this.app.config[rotateData.path + 'X'] = offsetx - -(this.app.config[line] + this.app.data[line]) / Math.tan(angle) - this.app.data[rotateData.path + 'X']
		this.app.data[rotateData.path + 'Angle'] = angle;
		//将点和线提升至最上层
		this.bringToFront(rotateData.path + 'XGroup')
			//更新点的位置
		this.app.data.y1 = 0;
		this.app.data.y2 = 0;
		this.app.data.y3 = 0;
		this.app.data.y4 = 0;
		this.app.data.y5 = 0;
	}

	/**
	 * 绑定svg点击事件
	 */
	bindEvent() {
		let that = this;
		let type = '';
		let target = null;
		let isDrag = false,
			eventData = {
				x: 0,
				y: 0
			};

		function mousedownEvent(e) {
			if (e.touches) {
				if (e.touches.length === 1) {
					e.preventDefault();
					e = e.changedTouches[0];
				} else {
					return
				}
			} else {
				e.preventDefault();
				if(e.which !== 1){
					return
				}
			}

			Snap.select('.selectedCircle') ? Snap.select('.selectedCircle').removeClass('selectedCircle') : null;
			if (that.app.data.animateShow) { //演示过程中不可点击
				return;
			}

			target = Snap(e.target);
			type = target.data('type');
			isDrag = false;
			eventData.startX = e.clientX;
			eventData.startY = e.clientY;
			if (type === 'rotate') {
				//选中该点
				let row = target.data('row');
				let targetLine = target.data('line');
				let pointName = targetLine + 'Part' + row.toUpperCase();
				target.parent().select('.outsideCircle').addClass('selectedCircle');
			}

			that.svg.mousemove(mousemoveEvent);
			that.svg.touchmove(mousemoveEvent);
			that.svg.touchcancel(mouseupEvent);
			that.svg.mouseup(mouseupEvent);
			that.svg.touchend(mouseupEvent);

		}

		function mousemoveEvent(e) {
			e.preventDefault();
			if (e.changedTouches) {
				e = e.changedTouches[0];
			}

			eventData.x = e.clientX - eventData.startX;
			eventData.y = e.clientY - eventData.startY;
			Snap.select('.parallelLineSelected') ? that.app.data.selectedParallelLine = '' : null;

			if ((Math.abs(eventData.x) > 5 || Math.abs(eventData.y) > 5)) {
				isDrag = true;
				that.app.data.reset = 1;
				if((eventData.x + eventData.startX - that.container.offset().left) > that.svgWidth || (eventData.x + eventData.startX - that.container.offset().left) < 0 ||
					(eventData.y + eventData.startY - that.container.offset().top) < 0 || (eventData.y + eventData.startY - that.container.offset().top) > that.svgHeight){
					mouseupEvent();
					return
				};

				switch (type) {
					case 'Y':
						let index = target.data('index');
						if (that.checkOutsideCanvas({
								y: eventData.y,
								index: 'y' + index,
								type
							})) {
							that.app.data['y' + index] = eventData.y;
						}
						break;
					case 'X':
						let classString = target.data('classString');
						if (that.checkOutsideCanvas({
								type,
								classString,
								x: eventData.x
							})) {

							that.app.data[classString + 'X'] = eventData.x;
						}
						break;
					case 'rotate':
						let row = target.data('row');
						let targetLine = target.data('line');
						if (that.checkOutsideCanvas({
								type,
								x: eventData.x + parseFloat(target.attr("cx")),
								y: parseFloat(target.attr("cy")),
								index: row,
								classString: targetLine
							})) {
							that.rotate({
								x: eventData.x + parseFloat(target.attr("cx")),
								y: parseFloat(target.attr("cy")),
								row: row,
								path: targetLine
							});
						}

						// that.app.data[]
						/*that.rotate({
						    x : eventData.x + parseFloat(target.attr("cx")) ,
						    y : parseFloat(target.attr("cy")),
						    row : row ,
						    path :targetLine
						});
						that.app.data[targetLine + 'X'] = eventData.x;*/
						break;
					default:
						that.drag(eventData);
						break;
				}
				eventData.startX = e.clientX;
				eventData.startY = e.clientY;
			}
		}

		function mouseupEvent(e) {
			/*
					 取消点的选中状态
					 */
			Snap.select('.selectedCircle') ? Snap.select('.selectedCircle').removeClass('selectedCircle') : null;
			if (!isDrag && target) {
				/*
				    更新平行线的选中状态
				     */
				let isSelectedBefore = target.hasClass('parallelLineSelected');
				if (!isSelectedBefore && target.hasClass('parallelLine') && that.app.data.showParallelLines.length > 3) {
					let index = target.data('index') - 1;
					that.app.data.selectedParallelLine = that.app.config.allParallelLinesName[index];
				} else {
					if (that.app.data.selectedParallelLine) {
						that.app.data.selectedParallelLine = '';
					}
				}
				that.app.data.reset = 1;
			}
			target = null;
			type = '';
			isDrag = false;
			that.svg.unmousemove();
			that.svg.untouchmove();
			that.svg.untouchcancel();
			that.svg.unmouseup();
			that.svg.untouchend();
		}

		this.svg.mousedown(mousedownEvent);
		this.svg.touchstart(mousedownEvent);

		this.container.on('mouseleave', e => {
			Snap.select('.selectedCircle') ? Snap.select('.selectedCircle').removeClass('selectedCircle') : null;
			this.svg.unmousemove();
			this.svg.untouchmove();
			this.svg.untouchcancel();
			this.svg.unmouseup();
			this.svg.untouchend();
		});

	}

	/**
	 * 解绑svg上的事件
	 */
	unbindEvent() {
		this.svg.unmousedown();
		this.svg.untouchstart();
		this.svg.unmousemove();
		this.svg.untouchmove();
		this.svg.unmouseup();
		this.svg.untouchcancel();
		this.svg.untouchend();
	}


	/**
	 * 更新图形
	 * @param item 数据项名称
	 * @param value 数据项新值
	 * @param oldValue 旧数据项
	 */
	updateGraph(item, value, oldValue) {
		switch (item) {
			case 'segmentLengthShow':
				{
					if (value === 1) {
						Snap.selectAll('.segmentGroup').forEach((seg) => seg[1].removeClass('hidden_svg'))
					} else {
						Snap.selectAll('.segmentGroup').forEach((seg) => seg[1].addClass('hidden_svg'))
					}
					break;
				}
			case 'segmentRatioShow':
				{
					if (value === 1) {
						Snap.selectAll('.segmentGroup').forEach((seg) => seg[0].removeClass('hidden_svg'))
					} else {
						Snap.selectAll('.segmentGroup').forEach((seg) => seg[0].addClass('hidden_svg'))
					}
					break;
				}
			case 'showParallelLines':
				{
					//更新线的显示隐藏
					let allParallelLinesName = this.app.config.allParallelLinesName;
					for (let i = 0; i < allParallelLinesName.length; i++) {
						let targetParallel = this.parallelLineGroupArr[i];
						let targetPoints = this.pointGroupArr[i];
						if (value.indexOf(allParallelLinesName[i]) !== -1) {
							targetParallel.removeClass('hidden_svg');
							targetPoints[0].removeClass('hidden_svg');
							targetPoints[1].removeClass('hidden_svg');
						} else {
							targetParallel.addClass('hidden_svg');
							targetPoints[0].addClass('hidden_svg');
							targetPoints[1].addClass('hidden_svg');
						}
					}

					//添加了数据,计算新线的位置
					if (oldValue && oldValue.length < value.length) {
						let newItem = null;
						value.forEach((it) => {
							if (oldValue.indexOf(it) === -1) {
								newItem = it;
							}
						});
						//取消选中
						if (this.app.config.selectedParallelLine === newItem) {
							this.app.data.selectedParallelLine = '';
						}

						//根据y值排序
						let index = this.app.config.allParallelLinesName.indexOf(newItem);
						index++;
						let segmentShow = $.extend([], this.app.config.segmentShow);
						segmentShow.splice(segmentShow.indexOf('y' + index), 1);
						segmentShow.sort((a, b) => {
							return this.app.config[a] + this.app.data[a] > this.app.config[b] + this.app.data[b]
						})

						//设置新线位置
						let preY = null,
							nextY = null;
						if (oldValue.length === 3) {
							preY = this.app.data[segmentShow[0]] + this.app.config[segmentShow[0]];
							nextY = this.app.data[segmentShow[1]] + this.app.config[segmentShow[1]];
						} else {
							preY = this.app.data[segmentShow[2]] + this.app.config[segmentShow[2]];
							nextY = this.app.data[segmentShow[3]] + this.app.config[segmentShow[3]];
						}

						this.app.data['y' + index] = (preY + nextY) / 2 - (this.app.config['y' + index] + this.app.data['y' + index]);
					}
					break;
				}
			case 'animateShow':
				{
					break;
				}
			case 'reset':
				{
					if (!value) {
						this.group.attr('transform', "");
						this.transformPosition = {
							x: 0,
							y: 0
						};
					}
					break;
				}
			case 'selectedParallelLine':
				{
					if (Snap.select('.parallelLineSelected')) {
						Snap.select('.parallelLineSelected').removeClass('parallelLineSelected');
					}
					if (value) {
						let target = Snap.select('.' + value);
						target.addClass('parallelLineSelected');
					}
					break;
				}
		}
	}

	/**
	 * 更新公式
	 * @param item
	 * @param value
	 */
	updateFormula(item, value) {
		switch (item) {
			case 'segmentRatioShow':
				{
					if (value === 1) {
						this.$formulaContainer.show();
					} else {
						this.$formulaContainer.hide();
					}
					break;
				}
			case 'animateShow':
				{
					if (value > 0) {
						this.app.data.segmentRatioShow = 1;
					}
					break;
				}
			case 'showParallelLines':
				{
					if (value.length > 3) {
						this.$manyFormula.show();
						this.$littileFormula.hide();
					} else {
						this.$manyFormula.hide();
						this.$littileFormula.show();
					}
					break;
				}
			case 'formulaNeedUpdate':
				{
					break;
				}
		}
		this._updateFormulaText();
	}


	/**
	 * 更新公式文字
	 * @private
	 */
	_updateFormulaText() {
		if (!this.app.data) {
			return;
		}
		let segmentShow = this.app.config.segmentShow;


		//根据y值排序
		segmentShow.sort((a, b) => {
			return this.app.config[a] + this.app.data[a] > this.app.config[b] + this.app.data[b]
		})
		console.log(segmentShow)

		//提取公式所需数据
		let data = [],
			data1 = [],
			data2 = [],
			preLineData = null;
		for (let i = 1; i < segmentShow.length; i++) {
			let index = parseInt(segmentShow[i][1]) - 1;
			let preIndex = parseInt(segmentShow[i - 1][1]) - 1;
			let y = this.app.config[segmentShow[i]] + this.app.data[segmentShow[i]];
			let preY = this.app.config[segmentShow[i - 1]] + this.app.data[segmentShow[i - 1]];
			let names = this.app.config.pointsNameArr[index];
			let preNames = this.app.config.pointsNameArr[preIndex];
			let length = Math.round(((y - preY) * 100 / this.app.config.pixelToLength)) / 100;
			length = length < 0.01 ? 0 : length;
			data1.push(preNames[0] + names[0]);
			data1.push(length);
			data2.push(preNames[1] + names[1]);
			data2.push(length);

		}
		data = data1.concat(data2);

		let indexOfZeroIndex = data.indexOf(0);
		if (indexOfZeroIndex != -1) { //线段长度有0
			this._updateEqualFormulaText(true, data);
		} else {
			this._updateEqualFormulaText(false)
		}

		//更新公式
		if (this.app.data.showParallelLines.length === 3) {
			this._updateLittleFormulaText(data);
		} else {
			this._updateManyFormulaText(data)
		}
	}

	/**
	 * 更新三条线时公式文字
	 * @param data 公式数据，格式形如:['AB',1,'BC',1,'DE',1,'EF',1];
	 * @private
	 */
	_updateLittleFormulaText(data) {
		/* data的格式如下
		 data = ['AB',1,'BC',1,'DE',1,'EF',1];
		 */
		if (data.length < 8) {
			this.$littileFormula.hide();
			return;
		} else {
			this.$littileFormula.show();
		}
		//写入DOM
		for (let i = 0; i < data.length; i += 2) {
			let index = i % 4;
			if (i < 4) {
				this._setFormulaTextToDom({
					container: this.$littileF_rowTxt1,
					type: 1,
					text: data[i],
					index: index
				});
			} else {
				this._setFormulaTextToDom({
					container: this.$littileF_rowTxt2,
					type: 1,
					text: data[i],
					index: index
				});
			}
		}
		let ratio = parseFloat((data[1] / data[3]));
		ratio = Math.round(ratio * 100) / 100;
		if (ratio < 0.01) {
			this.$littileF_verMid.text('x');
			this.$littileF_verMid.css("margin-top", "-0.2em");
			this.$littileFormula.find('.remark').css('display', 'block');
		} else {
			this.$littileF_verMid.text(ratio);
			this.$littileF_verMid.css("margin-top", "auto");
			this.$littileFormula.find('.remark').css('display', 'none');
		}

	}

	/**
	 * 更新多与三条线时公式文字
	 * @param data 公式数据，格式形如:['AP1',1,'P1B',1,'BC',1,'DQ1',1,'Q1E',1,'EF',1];
	 * @private
	 */
	_updateManyFormulaText(data) {
		/* data的格式如下
		 data = ['AP1',1,'P1B',1,'BC',1,'DQ1',1,'Q1E',1,'EF',1];
		 */

		/*
		 处理长度为0的情况
		 */
		if (data.length < 8) {
			this.$manyFormula.hide();
			return;
		} else {
			this.$manyFormula.show();
		}

		this._normalize(data);
		//删除多余项
		let showLength = data.length / 4 - 1;
		for (let i = 0; i < 4; i++) {
			if (i > showLength) {
				let iIndex = i * 2;
				this.$manyF_rowTxt1.find("i").eq(iIndex).hide();
				this.$manyF_rowTxt1.find("i").eq(iIndex + 1).hide();
				this.$manyF_rowTxt2.find("i").eq(iIndex).hide();
				this.$manyF_rowTxt2.find("i").eq(iIndex + 1).hide();
				this.$manyF_rowTxt3.find("span").eq(i + 1).hide();
				if (i > 0) {
					this.$manyF_rowTxt1.find("em").eq(i - 1).hide();
					this.$manyF_rowTxt2.find("em").eq(i - 1).hide();
					this.$manyF_rowTxt3.find("em").eq(i - 1).hide();
				}
			} else {
				let iIndex = i * 2;
				this.$manyF_rowTxt1.find("i").eq(iIndex).show();
				this.$manyF_rowTxt1.find("i").eq(iIndex + 1).show();
				this.$manyF_rowTxt2.find("i").eq(iIndex).show();
				this.$manyF_rowTxt2.find("i").eq(iIndex + 1).show();
				this.$manyF_rowTxt3.find("span").eq(i + 1).show();
				if (i > 0) {
					this.$manyF_rowTxt1.find("em").eq(i - 1).show();
					this.$manyF_rowTxt2.find("em").eq(i - 1).show();
					this.$manyF_rowTxt3.find("em").eq(i - 1).show();
				}
			}
		}



		//写入DOM
		let index = 1;
		for (let i = 0, j = data.length / 2; i < data.length / 2; i++, j++) {
			if (i % 2 === 0) { //处理线段文字
				this._setFormulaTextToDom({
					container: this.$manyF_rowTxt1,
					type: 1,
					text: data[i],
					index: i
				});
				this._setFormulaTextToDom({
					container: this.$manyF_rowTxt2,
					type: 1,
					text: data[j],
					index: i
				});

			} else { //处理线段长度
				this._setFormulaTextToDom({
					container: this.$manyF_rowTxt3,
					type: 2,
					text: data[i],
					index: index
				});
				index++;
			}
		}

	}

	/**
	 * 更新等于0情况
	 * @param hasZero 是否有0
	 * @param data 数据
	 * @private
	 */
	_updateEqualFormulaText(hasZero, data) {
		this.$equalFormulas.hide();
		if (hasZero) {
			let zeroIndex = 0;
			//删除为0的元素，并显示
			for (let i = 1; i < data.length / 2; i += 2) {
				if (data[i] === 0) {
					let seg1Index = i - 1,
						seg2Index = data.length / 2 + i - 1,
						zeroText1 = data[seg1Index],
						zeroText2 = data[seg2Index];
					let $equalFormula = this.$equalFormulas.eq(zeroIndex);

					zeroIndex++;
					this._setFormulaTextToDom({
						container: $equalFormula.find('.rowTxt:first'),
						type: 1,
						text: zeroText1,
						index: 0

					})
					this._setFormulaTextToDom({
						container: $equalFormula.find('.rowTxt:first'),
						type: 1,
						text: zeroText2,
						index: 2

					})
					$equalFormula.show();
					data.splice(seg1Index + 1, 1);
					data.splice(seg1Index, 1);
					seg2Index = seg2Index - 2;
					data.splice(seg2Index + 1, 1);
					data.splice(seg2Index, 1);
					i -= 2;
				}
			}
		}
	}


	/**
	 * 将公式写入到文档中
	 * @param 文字数据
	 * {   container : null, 数据项的外层，指$manyF_rowTxt1,2,3
	        type : null, 数据项的类型，1，线段名称，2，线段长度
	        text : null, 数据项的文字
	        index: null 数据项的序号
	    }
	 * @private
	 */
	_setFormulaTextToDom(textData) {
		if (textData.type === 1) { //type === 1

			let segName = textData.text;
			let letters = [textData.container.find("i").eq(textData.index), textData.container.find("i").eq(textData.index + 1)];
			let letterIndex = 0;
			for (let i = 0; i < segName.length; i++) {
				let currChar = segName[i];
				if (currChar === 'P' || currChar === 'Q') {
					letters[letterIndex].html(`${segName[i]}<sub class="TimesNewRoman times36">${segName[i+1]}</sub>`);
					i++;
				} else {
					letters[letterIndex].html(segName[i]);
				}
				letterIndex++;
			}

		} else { //type === 2

			let target = textData.container.find("span").eq(textData.index);
			target.text(textData.text);

		}
	}


	/**
	 * 将数据变成以1为基底的形式
	 * @param data 原始数据
	 * @returns {*} 标准化后的数据
	 * @private
	 */
	_normalize(data) {
		let min = parseFloat(data[1]);
		for (let i = 1; i < data.length / 2; i += 2) {
			if (min > parseFloat(data[i])) {
				min = parseFloat(data[i]);
			}
		}
		for (let i = 1; i < data.length; i += 2) {
			data[i] = Math.round((data[i] / min) * 100) / 100;
		}
		return data;
	}


}