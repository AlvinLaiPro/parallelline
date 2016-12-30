/**
 * 颗粒配置环境
 *
 * @author 
 */
class AppConfig {

	/**
	 * 单例
	 */
	static _inst;

	static getInst() {
		AppConfig._inst = AppConfig._inst || new AppConfig();
		return AppConfig._inst;
	}

	/**
	 * 初始化
	 */
	init(app) {
		this.app = app;
		this.fontSize = this.app.$view.css('font-size').replace(/px/, '');

		this.parallelLineWidth = 8 * this.fontSize / 24;
		this.unvisibleParallelLineWidth = 24 * this.fontSize / 24;
		this.crossingLineWidth = 9 * this.fontSize / 24;
		this.unvisibleCrossingLineWidth = 27 * this.fontSize / 24;
		this.parallelLineColor = '#005797';
		this.parallelLineSelectedColor = '#ffe013';
		this.crossingLineColor = '#cb1f1f';
		this.initLeftratios = [564 / 1022, 660 / 1022];;
		this.allParallelLinesName = ['l1', 'c1', 'l2', 'c2', 'l3'];
		this.parallelLinesPriority = ['l1', 'l2', 'l3', 'c1', 'c2'];
		this.selectedParallelLine = '';

		this.segmentLineColors = [
			['#8300de', '#037409'],
			['#11b1b7', '#ffe013'],
			['#e06313', '#ff6767'],
			['#e828c1', '#006de8']
		];
		// 点参数
		this.pointsNameArr = [
			['A', 'D'],
			['P1', 'Q1'],
			['B', 'E'],
			['P2', 'Q2'],
			['C', 'F']
		];
		this.pointTextColor = '#333333';
		this.pointRadius = 13 * this.fontSize / 24;
		this.pointStrokeWidth = 3 * this.fontSize / 24;
		this.pointActivedRadius = 16 * this.fontSize / 24;
		this.pointFillColor = '#e06313';
		this.pointStrokeColor = '#ffffff';
		this.pointOutsideRadius = 23 * this.fontSize / 24;
		this.pointOutsideFillColor = '#e06313';
		this.unvisiblePointRadius = 30 * this.fontSize / 24;
		this.unvisiblePointFillColor = 'transparent';

		// this.intersectLineAngle = [ 65, 100];
		// 线参数
		this.lineAAngle = 65 * Math.PI / 180;
		this.lineBAngle = 100 * Math.PI / 180;
		this.lineAX = 0;
		this.lineBX = 0;

		this.lineGap = 9 * this.fontSize / 24 * 2;

		this.segmentShow = ['y1', 'y3', 'y5'];
		this.pixelToLength = 30;

		this.pointArr = [];

		// 文字间隙
		this.textGap = 8 * this.fontSize / 24;

		return this;
	}

	destroy() {
		AppConfig._inst = null;
	}

}


export default AppConfig;