import BaseControl from './BaseControl'

export default class FunctionControl extends BaseControl {
	/**
	 * 单例
	 */
	static _inst;

	static getInst() {
		FunctionControl._inst = FunctionControl._inst || new FunctionControl();

		return FunctionControl._inst;
	}

	/**
	 * 构造
	 */
	constructor() {
		super();
	}

	/**
	 * 初始化事件
	 */
	init(app){
		this.app = app;   //绑定AppControl到当前对象
        /**
         * 按钮
         */
        this.container = this.app.$view.find(".ParallelLines_footer");
        this.lineLengthBtn = this.app.$view.find(".lineHeight");    //线段长度
        this.proportionBtn = this.app.$view.find(".proportion");   //线段比例
        this.addParallelBtn = this.app.$view.find(".addParallel");   //增加平行线
        this.deleteParallelBtn = this.app.$view.find(".deleteParallel");   //删除平行线
        this.playBtn = this.app.$view.find(".play");    //播放按钮
        this.pauseBtn = this.app.$view.find(".pause");    //暂停按钮
        this.resetBtn = this.app.$view.find(".reset");    //重置按钮
        this.bindEvent();
		return this;
	}

    /**
     * 绑定事件
     */
    bindEvent(){
        let that = this;
        this.container.on("click",'li',function(e){
            e.stopPropagation();
            let $target = $(this);
            if ($target.hasClass('disabled')) {
                return
            }
            if ($target.hasClass('reset')) {
                let [lineAAngle,lineBAngle] = [65 * Math.PI / 180 ,100 * Math.PI / 180];
                that.app.data.animateShow = 0;
                that.app.data.segmentLengthShow = 0;
                that.app.data.segmentRatioShow = 0;
                that.app.data.segmentShow = [];
                that.app.data.showParallelLines = ['l1', 'l2', 'l3'];
                that.app.data.selectedParallelLine = '';
                that.app.data.formulaNeedUpdate = false;
                that.app.data.reset = 0;
                /*
                 重置相交线的位置和角度
                 */
                that.app.data.lineAX = -that.app.data.lineAX;
                that.app.data.lineBX = -that.app.data.lineBX;
                that.app.config.lineAX = that.app.config.initLeftratios[0] * that.app.GraphControl.svgWidth;
                that.app.config.lineBX = that.app.config.initLeftratios[1] * that.app.GraphControl.svgWidth;
                that.app.data.lineAAngle = lineAAngle;
                that.app.data.lineBAngle = lineBAngle;

                /*
                重置平行线的位置
                 */
                that.app.data.y1 = -that.app.data.y1;
                that.app.data.y2 = -that.app.data.y2;
                that.app.data.y3 = -that.app.data.y3;
                that.app.data.y4 = -that.app.data.y4;
                that.app.data.y5 = -that.app.data.y5;

                return;
            }
            that.app.data.reset = 1;
            if($target.hasClass('play')){
                that.app.data.animateShow = 1;
                that.app.data.selectedParallelLine = '';
                return;
            }
            if($target.hasClass('pause')){
                that.app.data.animateShow = 2;
                return;
            }
            if($target.hasClass('lineHeight')){
                that.app.data.segmentLengthShow = +!that.app.data.segmentLengthShow;
                return;
            }
            if($target.hasClass('proportion')){
                that.app.data.segmentRatioShow = +!that.app.data.segmentRatioShow;
                return;
            }
            if($target.hasClass('addParallel')){
                let showParallelLines = that.app.data.showParallelLines.concat();
                showParallelLines.push(that._nextLine(showParallelLines));
                that.app.data.showParallelLines = showParallelLines.concat();
                return;
            }
            if($target.hasClass('deleteParallel')&&that.app.data){
                let showParallelLines = that.app.data.showParallelLines.concat();
                let index = null;
                for(let i =0 ; i < showParallelLines.length ; i++){
                    if( showParallelLines[i] === that.app.data.selectedParallelLine){
                        index = i;
                        break;
                    }
                }
                showParallelLines.splice(index, 1);
                that.app.data.showParallelLines = showParallelLines.concat();
                that.app.data.selectedParallelLine = '';
                return;
            }
        });
    }

    /**
     * 更新按钮状态
     * @param item 被更新的数据项的名称
     * @param value 被更新的数据项的值
     * @param parallelLength 当前平行线的条数,可选，在更新selectedParallelLine时需传入
     */
    updateButtonState(item,value,parallelLength) {
        switch(item){
            case 'animateShow': {
                /*
                更新其他关系的按钮状态
                 */
                if(value > 0){
                    this.proportionBtn.addClass("disabled");
                    this.addParallelBtn.addClass("disabled");
                    this.deleteParallelBtn.addClass("disabled");
                }else{
                    this.proportionBtn.removeClass("disabled");
                    this.deleteParallelBtn.removeClass("disabled");
                    if(this.app.data && this.app.data['showParallelLines'].length > 4){
                        this.addParallelBtn.addClass("disabled");
                    }else{
                        this.addParallelBtn.removeClass("disabled");
                    }
                }
                /*
                更新按钮状态
                */
                if( value === 1){
                    this.playBtn.hide();
                    this.pauseBtn.show();
                }else{
                    this.playBtn.show();
                    this.pauseBtn.hide();
                }
                /*
                 更新文字
                 */
                if( value === 2 ){
                   this.playBtn.find('.txt').text('继续');
                }else{
                    this.playBtn.find('.txt').text('演示');
                }
                break;
            }
            case 'showParallelLines': {
                if(value.length === 5){
                    this.addParallelBtn.addClass("disabled");
                }else{
                    this.addParallelBtn.removeClass("disabled");
                }
                if(value.length === 3){
                    this.deleteParallelBtn.addClass("disabled");
                }else{
                    this.deleteParallelBtn.removeClass("disabled");
                }
                break;
            }
            case 'reset': {
                if(value === 0){
                    this.resetBtn.addClass("disabled");
                }else{
                    this.resetBtn.removeClass("disabled");
                }
                break;
            }
            case 'selectedParallelLine': {
                if(value && parallelLength > 3){
                    this.addParallelBtn.hide();
                    this.deleteParallelBtn.show();
                }else{
                    this.addParallelBtn.show();
                    this.deleteParallelBtn.hide();
                }
                break;
            }
            case 'segmentLengthShow': {
                if(value === 0){
                    this.lineLengthBtn.removeClass("active");
                }else{
                    this.lineLengthBtn.addClass("active");
                }
                break;
            }
            case 'segmentRatioShow': {
                if(value === 0){
                    this.proportionBtn.removeClass("active");
                }else{
                    this.proportionBtn.addClass("active");
                }
                break;
            }
        }
    }


    /**
     * 获得下一条平行线的名称
     * @param currentLines 当前平行线的集合
     * @private
     */
    _nextLine(currentLines){
        let allLinesPriority = this.app.config.parallelLinesPriority;
        for(let line of allLinesPriority){
            if(currentLines.indexOf(line) === -1){
                return line;
            }
        }
        return null;
    }

	/**
	 * 析构
	 */
	destroy(){
        this.container.off("click")
		FunctionControl._inst = null;
	}

}