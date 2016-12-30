import AppConfig from "../model/AppConfig"
/**
 * 控制器基类
 *
 * @author Tiago
 */
class BaseControl {
	/**
	 * 构造
	 */
	constructor() {
	}

	/**
	 * 根据事件类型，获取目标
	 * 主要是为了pad兼容
	 */
	_getRealEvent( event, stopPop = true ) {
		stopPop && event.stopPropagation;
		if ( event.targetTouches && event.targetTouches.length ) return event.targetTouches[ 0 ];
		if ( event.changedTouches && event.changedTouches.length ) return event.changedTouches[ 0 ];
		return event;
	}

	/**
	 * 打印调用堆栈
	 */
	__( ...args ) {
		console.log( this );
		throw new Error( '《调用堆栈》' );
	}

}

export default BaseControl;