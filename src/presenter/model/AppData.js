export default class AppData {
	/**
	 * 单例
	 */
	static _inst;

	static getInst() {
		AppData._inst = AppData._inst || new AppData;
		return AppData._inst;
	}

	constructor() {
		this._defaultData = {
			handPause: false,
			lineAAngle: 65 * Math.PI / 180,
			lineBAngle: 100 * Math.PI / 180,
			y0: 0,
			y1: 0,
			y2: 0,
			y3: 0,
			y4: 0,
			y5: 0,
			lineAX: 0,
			lineBX: 0,
			segmentLengthShow: 0, // 是否显示线段长度 0 否 1 是
			segmentRatioShow: 0, // 是否显示线段比例 0 否 1 是
			segmentShow: [],
			showParallelLines: ['l1', 'l2', 'l3'], // 显示的平行线数组
			hiddenParallelLines: ['c1', 'c2'],     // 隐藏的平行线数组
			animateShow: 0, // 是否动态演示 0 否 1 演示中 2 暂停
			reset: 0, // 复位是否可点击 0 不可点击 1 可点击
			selectedParallelLine: '', //当前选中的平行线，空时为未选中
            formulaNeedUpdate : false  //公式是否需要强制更新
		};

		this.data = {};
	}

	init(app, data) {
		this.app = app;
		this._init = true;
		if (!data) {
			data = this._defaultData;
		}
		for (let key in data) {
			this[key] = data[key];
		}
		this._init = false;
		this.app.$view.css('visibility','visible');

		return this;
	}

	destroy() {
		AppData._inst = null;
	}

	get lineAAngle() {
		return this.data.lineAAngle;
	}

	set lineAAngle(angle) {
		console.log('setangle')
		this.data.lineAAngle = angle;
		this.app.config.lineAAngle = angle;
		this.app.GraphControl.drawByAngle(angle, 'lineA', this._init);
		this.app.GraphControl.drawLineText(this._init, 'lineAX');
	}
	get lineBAngle() {
		return this.data.lineBAngle;
	}

	set lineBAngle(angle) {
		this.data.lineBAngle = angle;
		this.app.config.lineBAngle = angle;
		this.app.GraphControl.drawByAngle(angle, 'lineB',this._init);
		this.app.GraphControl.drawLineText(this._init);
	}

	get lineAX() {
		return this.data.lineAX;
	}

	set lineAX(x) {
		console.log('setoffset')
		this.data.lineAX = this.data.lineAX === undefined ? x: this.data.lineAX + x;
		this.app.GraphControl.bringToFront('lineAXGroup');
		this.app.GraphControl.drawByOffset({
			x
		}, 'lineAX');
		this.app.GraphControl.drawLineText(this._init, 'lineAX');
		this.app.GraphControl.controlTextShow({bool:'',init:this._init});
		this.app.GraphControl.controlSegments(this._init, 'lineAX');
	}

	get lineBX() {
		return this.data.lineBX;
	}

	set lineBX(x) {
		this.data.lineBX = this.data.lineBX === undefined ? x: this.data.lineBX + x;
		this.app.GraphControl.bringToFront('lineBXGroup');
		this.app.GraphControl.drawByOffset({
			x
		}, 'lineBX');
		this.app.GraphControl.drawLineText(this._init);
		this.app.GraphControl.controlTextShow({bool:'',init:this._init});
		this.app.GraphControl.controlSegments(this._init);
	}

	get y0() {
		return this.data.y0;
	}

	set y0(diff) {

		this.data.y0 = diff;
		this.app.GraphControl.drawLineText(this._init);
	}


	get y1() {
		return this.data.y1;
	}

	set y1(diff) {
		this.data.y1 = this.data.y1 === undefined ? diff : Math.round((this.data.y1 + diff)*1000)/1000;
		let y = this.data.y1 + this.app.config.y1;
		this.app.GraphControl.bringToFront('y1Group');
		this.app.GraphControl.drawParallelByOffset({
			y
		}, 1);
		this.app.GraphControl.drawPointByOffset({
			y
		}, 1, this._init);
		this.app.GraphControl.controlSegments(this._init);
        this.app.GraphControl.updateFormula();
	}
	get y2() {
		return this.data.y2;
	}

	set y2(diff) {
		this.data.y2 = this.data.y2 === undefined ? diff : Math.round((this.data.y2 + diff)*1000)/1000;
		let y = this.data.y2 + this.app.config.y2;
		this.app.GraphControl.bringToFront('y2Group');
		this.app.GraphControl.drawParallelByOffset({
			y
		}, 2);
		this.app.GraphControl.drawPointByOffset({
			y
		}, 2, this._init);
		this.app.GraphControl.controlSegments(this._init);
        this.app.GraphControl.updateFormula();
	}
	get y3() {
		return this.data.y3;
	}

	set y3(diff) {
		this.data.y3 = this.data.y3 === undefined ? diff : Math.round((this.data.y3 + diff)*1000)/1000;
		let y = this.data.y3 + this.app.config.y3;
		this.app.GraphControl.bringToFront('y3Group');
		this.app.GraphControl.drawParallelByOffset({
			y
		}, 3);
		this.app.GraphControl.drawPointByOffset({
			y
		}, 3, this._init);
		this.app.GraphControl.controlSegments(this._init);
        this.app.GraphControl.updateFormula();
	}
	get y4() {
		return this.data.y4;
	}

	set y4(diff) {
		this.data.y4 = this.data.y4 === undefined ? diff : Math.round((this.data.y4 + diff)*1000)/1000;
		let y = this.data.y4 + this.app.config.y4;
		this.app.GraphControl.bringToFront('y4Group');
		this.app.GraphControl.drawParallelByOffset({
			y
		}, 4);
		this.app.GraphControl.drawPointByOffset({
			y
		}, 4, this._init);
		this.app.GraphControl.controlSegments(this._init);
        this.app.GraphControl.updateFormula();
	}
	get y5() {
		return this.data.y5;
	}

	set y5(diff) {
		this.data.y5 = this.data.y5 === undefined ? diff : Math.round((this.data.y5 + diff)*1000)/1000;
		let y = this.data.y5 + this.app.config.y5;
		this.app.GraphControl.bringToFront('y5Group');
		this.app.GraphControl.drawParallelByOffset({
			y
		}, 5);
		this.app.GraphControl.drawPointByOffset({
			y
		}, 5, this._init);
		this.app.GraphControl.controlSegments(this._init);
        this.app.GraphControl.updateFormula();
	}

	get segmentShow() {
		return this.data.segmentShow;
	}

	set segmentShow(arr) {
		this.data.segmentShow = arr.slice();
		this.app.config.segmentShow = arr.slice();
		this.app.GraphControl.controlSegments(this._init);
	}


	get row() {
		return this.data.row;
	}

	set row(i) {
		this.data.row = i;
	}

	get segmentLengthShow() {
		return this.data.segmentLengthShow
	}
	set segmentLengthShow(b) {
		this.data.segmentLengthShow = b;
        this.app.config.segmentLengthShow = b;
        this.app.func.updateButtonState('segmentLengthShow',b);
        this.app.GraphControl.updateGraph('segmentLengthShow',b);
	}

	get segmentRatioShow() {
		return this.data.segmentRatioShow
	}
	set segmentRatioShow(b) {
		this.data.segmentRatioShow = b;
        this.app.config.segmentRatioShow = b;
        this.app.func.updateButtonState('segmentRatioShow',b);
        this.app.GraphControl.updateGraph('segmentRatioShow',b);
        this.app.GraphControl.updateFormula('segmentRatioShow',b);
	}

	get showParallelLines() {
		return this.data.showParallelLines
	}
	set showParallelLines(b) {
        let that = this;
        let oldValue = this.data.showParallelLines;
		this.data.showParallelLines = b;
        this.app.config.showParallelLines = b;
        /*
        更新hiddenParallelLines,segmentShow
         */
        let hiddenParallelLines = [];
        let segmentShow = [];
        this.app.config.allParallelLinesName.forEach(function(pl,index){
            if(b.indexOf(pl)!= -1){
                hiddenParallelLines.push(pl);
                segmentShow.push('y'+(index+1));
            }
        })
        this.hiddenParallelLines = hiddenParallelLines;
        this.segmentShow = segmentShow;
        this.app.func.updateButtonState('showParallelLines',b);
        this.app.GraphControl.updateGraph('showParallelLines',b,oldValue);
        this.app.GraphControl.updateFormula('showParallelLines',b);
	}

    get hiddenParallelLines(){
        return this.data.hiddenParallelLines;
    }

    set hiddenParallelLines(b){
        return this.data.hiddenParallelLines = b;
        this.app.config.hiddenParallelLines = b;
    }

	get animateShow() {
		return this.data.animateShow
	}
	set animateShow(b) {
		this.data.animateShow = b;
        this.app.func.updateButtonState('animateShow',b);
        this.app.GraphControl.updateFormula('animateShow',b);
        this.app.GraphControl.animateControl(b);
	}

	get reset() {
		return this.data.reset
	}
	set reset(b) {
		this.data.reset = b;
        this.app.config.reset = b;
        this.app.func.updateButtonState('reset',b);
        this.app.GraphControl.updateGraph('reset',b);
	}

	get selectedParallelLine() {
        return this.data.selectedParallelLine
    }

	set selectedParallelLine(b) {
        this.data.selectedParallelLine = b;
        this.app.config.selectedParallelLine = b;
        this.app.func.updateButtonState('selectedParallelLine',b ,this.showParallelLines.length );
        this.app.GraphControl.updateGraph('selectedParallelLine',b);
    }

    get formulaNeedUpdate(){
        return this.data.formulaNeedUpdate;
    }

    set formulaNeedUpdate(b){
        this.data.formulaNeedUpdate = b;
        this.app.config.formulaNeedUpdate = b;
        if(b){
            this.app.GraphControl.updateFormula('formulaNeedUpdate',b);
            this.data.formulaNeedUpdate = false;
        }
	}

	get handPause(){
		return this.data.handPause
	}

	set handPause(b){
		this.data.handPause = b;
	}


}